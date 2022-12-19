import React from "react";
import { Form, Button, Col } from "react-bootstrap";



function Menu() {

  return (
    
    <div className="col-5 mt-5 pb-5 pt-4" id="menu-container">
      <h2 id="white-text">Tic Tac Toe in React.js</h2>
      <h4 className="pb-5" id="white-text">Pick a Weapon</h4>
        <Form className="m-5 p-5" id="menu-form">
          <Form.Label id="white-text"><h4><strong>CHOOSE YOUR WEAPON</strong></h4></Form.Label>
          <Form.Group>
            <div style={{ display: "flex" }}>
              <Form.Control type="text" placeholder="Player1 username" id="form-control1" />
              <Form.Control type="text" placeholder="Player2 username" id="form-control2" />
            </div>
          </Form.Group >
          <Button className="btn btn-sm mx-1 mt-2" type="submit" id="buttonX">
            X
          </Button>
          <Button className="mx-1 mt-2" type="submit" id="buttonY">
            O
        </Button>
        </Form>
    </div>
  );
}


export default Menu;
