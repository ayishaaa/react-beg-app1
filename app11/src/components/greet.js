import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Greet = () => {
  return (
    <>
    
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/03/fb/2b/03fb2bcc52a3c6453273c918d18f1cde.jpg"
            alt="First slide"
            style={{ height: "500px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/236x/a9/be/82/a9be82519ac50cf04eb65899bd2d1cc5.jpg"
            alt="Second slide"
            style={{ height: "500px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/236x/6c/71/ec/6c71ecc0dce17cc8f059d4b8335fbf2f.jpg"
            alt="Third slide"
            style={{ height: "500px" }}
          />
        </Carousel.Item>
        
          
      </Carousel>
    
      <Container fluid>
        <Row>
          <Col
            className="col-6"
            style={{
              marginLeft: "50px",
              marginTop: "100px",
              textAlign: "justify",
            }}
          >
            <h4
              style={{
                fontStyle: "oblique",
                fontFamily: "sans-serif",
                color: "#346c88",
                fontWeight: "500",
              }}
            >
              About Food
            </h4>
            <br />
            <h2
              style={{
                fontFamily: "serif",
                color: "#346c88",
                fontWeight: "bold",
              }}
            >
              INNOVATIONS IN FOOD
            </h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Numquam, natus. Unde neque accusamus fuga, consectetur ad veniam
              mollitia asperiores voluptates dolore quo corporis molestiae modi
              sint obcaecati aliquid repellat illo. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda esse dolores accusantium modi, fuga quod aut, explicabo
              sunt illum sed officiis necessitatibus ipsum perferendis deserunt
              officia delectus velit harum incidunt
            </p>
          </Col>

          <Col
            className="col-4" 
                style={{
                    marginTop: "100px", 
                    width: "600px",
                    marginLeft: "50px"
                }}>
                <img 
                    className="d-block w-100"
                    src="https://i.pinimg.com/236x/d9/d1/1c/d9d11ca4593aade9ae4c0818cfeb11a1.jpg"
                    class="d-block w-100" 
                    alt="..." 
                    style={{"height": "330px"}}/>
            </Col>
            
            </Row>
        </Container>
      </>
    )
}

export default Greet;