import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Posts from '../../features/Post/Posts'

const Home = () => { 
return (
   <>
   <div className='d-flex justify-content-between'>
    <h1>All posts</h1>
    <Link to='/post/add'> <Button variant='outline-info'>Add Post</Button> </Link>
   </div>
   <Posts/>
   </>
    
)

 }

 export default Home