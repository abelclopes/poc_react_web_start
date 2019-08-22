

import React from "react";
import { Card, Col, Row, Button} from "react-bootstrap";

export default function HomeCard(props) {
    console.log(props)
return (
            <Col md={{ span: 4}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{props.post.titulo}</Card.Title>
                        <Card.Text>
                            {props.post.descricao}
                        </Card.Text>
                        <Button variant="primary">Leia Mais</Button>
                    </Card.Body>
                </Card>
            </Col>
    );
}