import React from 'react';
import Button from 'react-bootstrap/Button';

export const PokeButton = ({ onClick }) => {
    return (
        <Button variant="outline-success" onClick={onClick}>Get your random Pokemon!</Button>
    );
};