import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/PageNotFound/PageNotFound";
import Post from "./components/pages/Post/Post";
import About from "./components/pages/About/About";
import PostAdd from './components/pages/PostAdd/PostsAdd'
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

const App = () => {
  return (
    <>
      <Container>
        <Header/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit" element={<PostAdd />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Container>
    </>
  );
};
export default App;
