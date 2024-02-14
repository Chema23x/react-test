import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PokeCard } from "./PokeCard";
import { Details } from "./Details";
import { PokeButton } from "./PokeButton";
import { Row, Col, Container } from "react-bootstrap";

export const ShowContent = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null);
    const [randomIndex, setRandomIndex] = useState(0); // Estado para el índice aleatorio

    const pokemons = ["charmander", "kyogre", "charizard", "pikachu", "lapras", "kyogre", "lugia", "mew", "treecko", "vulpix", "latias"];

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemons[randomIndex]}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchPokemonData();
    }, [randomIndex]); // Llamar useEffect cuando cambie el índice aleatorio

    const handleRandomPokemon = () => {
        const newIndex = Math.floor(Math.random() * pokemons.length); // Generar un nuevo índice aleatorio
        setRandomIndex(newIndex); // Actualizar el estado del índice aleatorio
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            {pokemonData && (
                <Container>
                    <Row>
                        <Col className="col-3">
                            <PokeCard 
                                pokeName={pokemonData.name}
                                pokeId={pokemonData.id}
                                pokeImgUrl={pokemonData.sprites.front_shiny}
                                pokeWeight={pokemonData.weight}
                            />
                        </Col>
                        <Col className="col-9">
                            <Details 
                                experience={pokemonData.base_experience} 
                                ability={pokemonData.abilities[0].ability.name} 
                                order={pokemonData.order}
                            />
                        </Col>
                    </Row>
                    <Row className="pt-4">
                        <PokeButton onClick={handleRandomPokemon} /> {/* Asignar el manejador de eventos al botón */}
                    </Row>
                </Container>
            )}
        </div>
    );
};