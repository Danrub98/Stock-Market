// Lets start with Link basic header
// We have to import react
import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

import { MDBIcon } from "mdbreact";

import World from "../images/worlds.jpg";
import Apple from "../images/apples.png";
import Amazon from "../images/amazons.png";
import Tesla from "../images/tesla.png";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Google from "../images/google.png";

const Profile = () => {
  return (
    <main>
      <section className="card-first-profile container-fluid" style={{ backgroundImage:  `url(${World})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Table responsive="sm">
          <thead>
            <tr>
              <th><MDBIcon icon="user-astronaut" size="2x"/></th>
              <th style={{ paddingLeft: 85, fontSize: "larger" }}>User</th>
              <th style={{ paddingLeft: 85, fontSize: "larger" }}>Portfolio</th>
              <th style={{ fontSize: "larger" }}>Balance: $</th>
            </tr>
          </thead>
        </Table>
      </section>

      <section className="widgets" style={{ backgroundColor: "black" }}>
        <h2 className="text-center">OPEN TRADES</h2>

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
                <Button className="text-center">Sell</Button>
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
                <Button variant="primary">Sell</Button>
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
                <Button variant="primary">Sell</Button>
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
                <Button variant="primary">Sell</Button>
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
                <Button variant="primary">Sell</Button>
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
                <Button variant="primary">Sell</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </section>
    </main>
  );
};

// Export the footer
export default Profile;
