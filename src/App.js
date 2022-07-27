import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/PageNotFound/PageNotFound";
import Posts from "./components/pages/Post/Posts";
import About from "./components/pages/About/About";
import PostAdd from './components/pages/PostAdd/PostsAdd'
import PostEdit from './components/pages/PostEdit/PostEdit'
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

const App = () => {
  return (
    <>
      <Container>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Posts />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:postId" element={<PostEdit />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Container>
    </>
  );
};
export default App;
