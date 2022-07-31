import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { editPost, getPostById } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';

const EditPost = () => {
	const { postId } = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const postData = useSelector(state => getPostById(state, postId));

	const handleSubmit = post => {
		dispatch(editPost({ ...post, postId }));
		navigate(-2);
	};

	const actionText = 'Edit Post';

	return (
		<>
			<h1>Edit Post</h1>
			<PostForm
				action={handleSubmit}
				actionText={actionText}
				title={postData.title}
				author={postData.author}
				shortDesription={postData.shortDesription}
				content={postData.content}
				id={postId}
			/>
		</>
	);
};

export default EditPost;
