import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/PageNotFound/PageNotFound';
import Post from './components/pages/Post/Post';
import About from './components/pages/About/About';
import AddPostForm from './components/features/AddPostForm/AddPostForm';
import EditPostForm from './components/features/EditPostForm/EditPostForm';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Categories from './components/pages/Categories/Categories';
import Category from './components/pages/Category/Category';

function App() {
	return (
		<Container>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/post/:id'
					element={<Post />}
				/>
				<Route
					path='/post/add'
					element={<AddPostForm />}
				/>
				<Route
					path='/post/edit/:postId'
					element={<EditPostForm />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/categories'
					element={<Categories />}
				/>
				<Route
					path='/category/:categoryId'
					element={<Category />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
			<Footer />
		</Container>
	);
}
export default App;
