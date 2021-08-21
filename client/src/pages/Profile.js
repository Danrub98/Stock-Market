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

// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_SAVE } from '../utils/queries';
// import { SAVE_STOCK} from '../utils/mutations';

const Profile = () => {
  // Display saved stocks (orders)
 

    return (
      <main>
        <section className="card-first-profile container-fluid" style={{ backgroundImage: `url(${World})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <Table responsive="sm">
            <thead>
              <tr>
                <th><MDBIcon icon="user-astronaut" size="2x" /></th>
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
              <Card bg={"dark"} text={"white"} className="mb-3">
                <Card.Body>
                  <Card.Title className="text-center">
                    <MDBIcon fab icon="apple" size="2x" />
                  </Card.Title>
                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item variant="info">Ticker: APPL</ListGroup.Item>
                      <ListGroup.Item variant="danger">Price: </ListGroup.Item>
                      <ListGroup.Item action href="#link1" variant="primary">
                        Chart
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Button className="text-center">Sell</Button>
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
                      <ListGroup.Item variant="danger">Price: </ListGroup.Item>
                      <ListGroup.Item action href="#link1" variant="primary">
                        Chart
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Button variant="primary">Sell</Button>
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
                      <ListGroup.Item variant="danger">Price: </ListGroup.Item>
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
              <Card bg={"dark"} text={"white"} className="mb-3">
                <Card.Body>
                  <Card.Title className="text-center">
                    <MDBIcon fab icon="facebook" size="2x" />
                  </Card.Title>
                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item variant="info">Ticker: FB</ListGroup.Item>
                      <ListGroup.Item variant="danger">Price: </ListGroup.Item>
                      <ListGroup.Item action href="#link1" variant="primary">
                        Chart
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Button variant="primary">Sell</Button>
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
                      <ListGroup.Item variant="danger">Price: </ListGroup.Item>
                      <ListGroup.Item action href="#link1" variant="primary">
                        Chart
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Button variant="primary">Sell</Button>
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
                      <ListGroup.Item variant="danger">Price: </ListGroup.Item>
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

  // Export Profile 
  export default Profile;
