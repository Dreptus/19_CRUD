import { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getPostById } from '../../../redux/postsRedux'
import { dateToStr } from '../../../utils/dateToStr'
import { deletePost } from '../../../redux/postsRedux'
import RemoveModal from '../../features/RemoveModal/RemoveModal'

const Post = () => {
  const { id } = useParams()
  let navigate = useNavigate()

  const listData = useSelector(state => getPostById(state, id))
  const [showRemoveModal, setShowRemoveModal] = useState(false)
  const handleClose = () => setShowRemoveModal(false)

  const dispatch = useDispatch()

  const handleRemove = e => {
    e.preventDefault()
    dispatch(deletePost(id))
    setShowRemoveModal(false)
  }

  const handleShowRemoveModal = () => setShowRemoveModal(true)

  if (!listData) return navigate(-1) //Nawiguje do poprzedniej strony

  return (
    <>
      <Row className='justify-content-center'>
        <RemoveModal
          show={showRemoveModal}
          handleClose={handleClose}
          handleRemove={handleRemove}
        />
        <Col md={8} className='d-flex justify-content-between'>
          <h1>{listData.title}</h1>
          <div>
            <Link to={'/post/edit/' + id}>
              <Button variant='outline-info' className='m-2'>
                Edit
              </Button>
            </Link>
            <Button variant='outline-danger' onClick={handleShowRemoveModal}>
              Delete
            </Button>
          </div>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col md={8}>
          <p>
            <b>Author: </b>
            {listData.author}{' '}
          </p>
          <p>
            <b>Published: </b> {dateToStr(listData.publishedDate)}
          </p>
          <p>
            <b>Category: </b>
            {listData.category}
          </p>
          <p dangerouslySetInnerHTML={{ __html: listData.content }} />
        </Col>
      </Row>
    </>
  )
}

export default Post
