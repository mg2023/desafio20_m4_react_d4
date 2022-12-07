import Footer from "./components/Footer";
import Header from "./components/Header";
import MiApi from "./components/MiApi";
import Products from "./components/products";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AllProducts from "./components/AllProducts";

function App() {
  return (
    // Punto 1: quitar archivos innecesarios
    // Punto 2: landing page
    <Container>
      <Header />
      <Row >
        {/* Punto 3: crear componente MiApi  e importarlo en App.jsx */}
        <Col className="sidebar" xs lg="2"><MiApi /></Col>
        <Col className="body">
          <Row>
            <Col><Products title="iPhone 9" descrip="An apple mobile which is nothing like apple" image="https://i.dummyjson.com/data/products/1/thumbnail.jpg" /></Col>
            <Col><Products title="HP Pavilion 15-DK1056WM" descrip="HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10"
              image="https://i.dummyjson.com/data/products/10/thumbnail.jpeg" /></Col>
            <Col><Products title="Brown Perfume" descrip="Royal_Mirage Sport Brown Perfume for Men & Women - 120ml"
              image="https://i.dummyjson.com/data/products/12/thumbnail.jpg" /></Col>
          </Row>
          <Row>
            <AllProducts />
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
