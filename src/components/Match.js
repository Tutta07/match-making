import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const MatchCard = (props) => (
     <div className="col-12 col-sm-4">
         <div className="card">
          <Card style={{ width: '18rem' }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
    </div>
);

export default MatchCard;