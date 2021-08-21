// Lets start with Link basic header
// We have to import react
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { MDBCol, MDBIcon } from "mdbreact";
import Auth from '../utils/auth';
// Import images
import Mountain from "../images/mountain.jpg";
import { gql } from "apollo-server-core";
import { Mutation } from "react-apollo";

const SAVE_STOCK = gql`
mutation add{
  saveStock(stocks: {
    stockId: "611d74a47b67398bae9ab508",
    icon: "https://www.clipartmax.com/png/middle/360-3605240_stocks-transparent-background-transparent-stock-icon-png.png",
    name: "Apple Inc",
    ticker: "APPL",
    unit_price: 47.89,
    quantity: 10,
    total_price: 478.09
})
}
`;
const Home = () => {
  //const [showModal, setShowModal] = useState(false);
  // const [buyStock, setBuyStock] = useState({
  //   name: "",
  //   ticker: "",
  //   unit_price: "",
  //   quantity: 1,
  //   total_price: ""
  // });
  // const [saveStock, {error}] = useMutation(SAVE_STOCK);
  const state = {
    stockId: "",
    icon: "",
    name: "",
    ticker: "",
    unit_price: "",
    quantity: "",
    total_price: ""
  };
  return (
    <main>
      <section className="home-main-section">
        <Card className="bg-dark text-white" style={{ borderRadius: 0 }}>
          <Card.Img src={Mountain} alt="Card image" />
          <Card.ImgOverlay className="card-first">
            <Card.Title>
              Investing is the first step to achieve financial freedom
            </Card.Title>
            <Card.Text>Take a look at our Stocks</Card.Text>
            <MDBCol md="4">
              <form className="form-inline mt-4 mb-4">
                <MDBIcon icon="search" />
                <input
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </MDBCol>
          </Card.ImgOverlay>
        </Card>
      </section>
      <section className="widgets" style={{ backgroundColor: "black" }}>
        <h2 className="text-center">NASDAQ STOCKS</h2>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card bg={"dark"} text={"white"} className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  <MDBIcon fab icon="apple" size="2x" />
                </Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">Ticker: APPL</ListGroup.Item>
                    <ListGroup.Item variant="success">Price:  47.89 </ListGroup.Item>
                    <ListGroup.Item action href="/charts" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                {Auth.loggedIn() ? (
                  <>
                    <Mutation
                      mutation={SAVE_STOCK}>
                      {mutation => (
                        <button
                          onClick={() => mutation({ variables: { input: state } })}
                        >
                          Buy
                        </button>
                      )}
                    </Mutation>
                    <Button className="text-center">Sell</Button>
                  </>) : (
                  <p className="text-center">Login to buy stocks </p>
                )}
              </Card.Body>
            </Card>
            <Card bg={"dark"} text={"white"} className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  <MDBIcon fab icon="paypal" size="2x" />
                </Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">Ticker: PYPL</ListGroup.Item>
                    <ListGroup.Item variant="success">Price: 10</ListGroup.Item>
                    <ListGroup.Item action href="/charts" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                {Auth.loggedIn() ? (
                  <>
                    <Button className="text-center">Buy</Button>
                    <Button className="text-center">Sell</Button>
                  </>) : (
                  <p className="text-center">Login to buy stocks </p>
                )}
              </Card.Body>
            </Card>
            <Card bg={"dark"} text={"white"} className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  <MDBIcon fab icon="amazon" size="2x" />
                </Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">Ticker: AMZN</ListGroup.Item>
                    <ListGroup.Item variant="success">Price: 40</ListGroup.Item>
                    <ListGroup.Item action href="/charts" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                {Auth.loggedIn() ? (
                  <>
                    <Button className="text-center">Buy</Button>
                    <Button className="text-center">Sell</Button>
                  </>) : (
                  <p className="text-center">Login to buy stocks </p>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg={"dark"} text={"white"} className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  <MDBIcon fab icon="facebook" size="2x" />
                </Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">Ticker: FB</ListGroup.Item>
                    <ListGroup.Item variant="success">Price: 20</ListGroup.Item>
                    <ListGroup.Item action href="/charts" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                {Auth.loggedIn() ? (
                  <>
                    <Button className="text-center">Buy</Button>
                    <Button className="text-center">Sell</Button>
                  </>) : (
                  <p className="text-center">Login to buy stocks </p>
                )}
              </Card.Body>
            </Card>
            <Card bg={"dark"} text={"white"} className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  <MDBIcon fab icon="twitter" size="2x" />
                </Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">Ticker: TWTR</ListGroup.Item>
                    <ListGroup.Item variant="success">Price: 30</ListGroup.Item>
                    <ListGroup.Item action href="/charts" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                {Auth.loggedIn() ? (
                  <>
                    <Button className="text-center">Buy</Button>
                    <Button className="text-center">Sell</Button>
                  </>) : (
                  <p className="text-center">Login to buy stocks </p>
                )}
              </Card.Body>
            </Card>
            <Card bg={"dark"} text={"white"} className="mb-3">
              <Card.Body>
                <Card.Title className="text-center">
                  <MDBIcon fab icon="google" size="2x" />
                </Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">
                      Ticker: GOOGL
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">Price: 50</ListGroup.Item>
                    <ListGroup.Item action href="/charts" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                {Auth.loggedIn() ? (
                  <>
                    <Button className="text-center">Buy</Button>
                  </>) : (
                  <p className="text-center">Login to buy stocks </p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </main>
  );
};
// Export the footer
export default Home;
