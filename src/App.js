import Footer from "./components/Footer";
import Header from "./components/Header";
import MiApi from "./components/MiApi";
import Products from "./components/products";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  return (
    <Container>
      <Header />

      <Row>
        <Col xs lg="2"><MiApi /></Col>
        <Col><Products title="iPhone 9" descrip="An apple mobile which is nothing like apple" image="https://i.dummyjson.com/data/products/1/1.jpg" /></Col>
        <Col><Products title="Women Shoulder Bags" descrip="LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies"
          image="https://i.dummyjson.com/data/products/71/1.jpg" /></Col>
        <Col><Products title="Bluetooth Aux" descrip="Bluetooth Aux Bluetooth Car Aux Car Bluetooth Transmitter Aux Audio Receiver Handfree Car 
      Bluetooth Music Receiver Universal 3.5mm Streaming A2DP Wireless Auto AUX Audio Adapter With Mic For Phone MP3"
          image="https://i.dummyjson.com/data/products/86/1.jpg" /></Col>
      </Row>



      <Footer />
    </Container>

  );
}

export default App;
