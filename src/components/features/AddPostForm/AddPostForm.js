import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import addPost from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';


const AddForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (post) => {
        dispatch(addPost(post));
        navigate('/');
    };

    const actionText = 'Add Post';
    return (
        <>
            <PostForm action={handleSubmit} actionText={actionText} />
        </>
    );
};

export default AddForm;