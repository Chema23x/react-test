import Card from 'react-bootstrap/Card';

export const PokeCard = ({pokeName, pokeImgUrl, pokeId, pokeWeight}) => {

    return (
        <Card >
        <Card.Img variant="top" src={pokeImgUrl} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">Name: {pokeName}</Card.Title>
          <Card.Text className="d-flex justify-content-center">
            Pokemon Id: {pokeId} <br></br>
            Weight: {pokeWeight}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}