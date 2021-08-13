// Lets start with Link basic header
// We have to import react
import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { MDBCol, MDBIcon } from "mdbreact";

import TradingViewWidget, { Themes } from "react-tradingview-widget";

import Mountain from "../images/mountain.jpg";
import Apple from "../images/apples.png";
import Amazon from "../images/amazons.png";
import Tesla from "../images/tesla.png";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Google from "../images/google.png";

const Home = () => {
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
            <Card className="mb-3">
              <Card.Img variant="top" src={Apple} />
              <Card.Body>
                <Card.Title className="text-center">Apple</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">Ticker: APPL</ListGroup.Item>
                    <ListGroup.Item variant="danger">Bid: </ListGroup.Item>
                    <ListGroup.Item variant="success">Ask: </ListGroup.Item>
                    <ListGroup.Item action href="#link1" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Button className="text-center">Buy</Button>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Img variant="top" src={Amazon} />
              <Card.Body>
                <Card.Title className="text-center">Amazon</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">Ticker: AMZN</ListGroup.Item>
                    <ListGroup.Item variant="danger">Bid: </ListGroup.Item>
                    <ListGroup.Item variant="success">Ask: </ListGroup.Item>
                    <ListGroup.Item action href="#link1" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Img variant="top" src={Tesla} />
              <Card.Body>
                <Card.Title className="text-center">Tesla</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">Ticker: TSLA</ListGroup.Item>
                    <ListGroup.Item variant="danger">Bid: </ListGroup.Item>
                    <ListGroup.Item variant="success">Ask: </ListGroup.Item>
                    <ListGroup.Item action href="#link1" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="mb-3">
              <Card.Img variant="top" src={Facebook} />
              <Card.Body>
                <Card.Title className="text-center">Facebook</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">Ticker: FB</ListGroup.Item>
                    <ListGroup.Item variant="danger">Bid: </ListGroup.Item>
                    <ListGroup.Item variant="success">Ask: </ListGroup.Item>
                    <ListGroup.Item action href="#link1" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Img variant="top" src={Twitter} />
              <Card.Body>
                <Card.Title className="text-center">Twitter</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">Ticker: TWTR</ListGroup.Item>
                    <ListGroup.Item variant="danger"> Bid: </ListGroup.Item>
                    <ListGroup.Item variant="success">Ask: </ListGroup.Item>
                    <ListGroup.Item action href="#link1" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Img variant="top" src={Google} />
              <Card.Body>
                <Card.Title className="text-center">Google</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item variant="info">Ticker: GOOGL</ListGroup.Item>
                    <ListGroup.Item variant="danger">Bid: </ListGroup.Item>
                    <ListGroup.Item variant="success">Ask: </ListGroup.Item>
                    <ListGroup.Item action href="#link1" variant="primary">
                      Chart
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <TradingViewWidget
          symbol="NASDAQ:AAPL"
          theme={Themes.DARK}
          locale="fr"
          autosize
        />
        <TradingViewWidget
          symbol="NASDAQ:TSLA"
          theme={Themes.DARK}
          locale="fr"
          autosize
        />
        <TradingViewWidget
          symbol="BTC/USD"
          theme={Themes.DARK}
          locale="fr"
          autosize
        /> */}
      </section>
    </main>
  );
};

// Export the footer
export default Home;
