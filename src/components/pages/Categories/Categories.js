import { Col, ListGroup, Nav, NavLink, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import shortid from "shortid";
import { getAllCategories } from "../../../redux/categoriesRedux";

const Categories = () => {
  const categories = useSelector(getAllCategories);
  return (
    <>
      <Row className="justify - content - md - center">
        <Col md={6}>
          <h1>All Categories</h1>
          <ListGroup className="mb-3 mt-3">
            {categories.map((category) => (
              <ListGroup.Item key={shortid()}>
                <Nav.Link as={NavLink} to={"/category/" + category}>
                  {category}
                </Nav.Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default Categories;
