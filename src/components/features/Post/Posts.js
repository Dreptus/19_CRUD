import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr';
import { getAllPosts } from '../../../redux/postsRedux';

function Posts() {
	const posts = useSelector(getAllPosts);
	return (
		<Row>
			{posts.map(post => (
				<Col
					key={post.id}
					md={4}
					lg={6}
					xl={3}
					className='justify-content-md-start mb-5 mt-5'>
					<Card
						style={{ minwidth: '15rem' }}
						lassName='rounded'
						key={post.id}>
						<Card.Body>
							<Card.Title>{post.title}</Card.Title>
							<p>
								<b>Author: </b>
								{post.author}
							</p>
							<p>
								<b>Published: </b> {dateToStr(post.publishedDate)}
							</p>
							<p>
								<b>Category: </b>
								{post.category}
							</p>
							<Card.Text>
								<span>
									Short Description:
									{post.shortDescription}
								</span>
							</Card.Text>
							<Link
								key={post.id}
								to={`/post/${post.id}`}>
								<Button variant='primary'>Read more</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default Posts;
