import Card from 'react-bootstrap/Card';

export const Details = ({experience, ability, order}) => {
    return (
        <Card style={{ height: "100%"}}>
        <Card.Body className="d-flex align-items-center justify-content-center">
          <Card.Text className="details">
          Pokemon details: <br/ >
          Base experience: {experience} <br />
          Ability: {ability} <br />
          Order: {order} <br />
          </Card.Text>
        </Card.Body>
      </Card>
    )
}