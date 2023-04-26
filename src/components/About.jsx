import { Container, Row, Col } from "react-bootstrap";

export default function About () {

    return (
        <>
        <section>
           <Container className="bg-danger">
            <Row>
                <Col>
                <img src="https://picsum.photos/300/300"
                alt ="profile pict"/>
                </Col>

                <Col>
                <h1>Hi I am Bryan Vargas</h1>
                <p> I am Bryan Vargas and I like coding </p>
                <p>contact me: bryan@gmail.com</p>
                </Col>
            </Row>
           </Container>
        </section>
        
        </>
    )
}