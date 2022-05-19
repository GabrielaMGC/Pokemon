import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components'
import pokebola from './images/pokebola.png'
import {WiCloudRefresh} from 'react-icons/wi'
import {CgReorder} from 'react-icons/cg'
import CartaPokemon from './components/cartaPokemon';

function App() {
  const [allPokemons,setAllPokemons]= useState([]);
  const [carregar,setCarregar]=useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  
  const getAllPokemons = async () => {
    const res = await fetch(carregar)
    const data = await res.json()

    setCarregar(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
        console.log(data)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  return(
    <div className="App-content">
      <div className='container'>
        <p>P</p> <Pokebola src={pokebola}/> <p>kemon</p>
      </div>
      <div className='pokemon-container'>
      <div className='all-container'>
      </div>
      <p className=''></p>
      {allPokemons.map(pokemon=>
        <CartaPokemon
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
        />
        )}
      <Button id="carregar" onClick={()=>getAllPokemons()}><WiCloudRefresh size={75}/></Button>
      <Button id="organizar"><CgReorder size={75}/></Button>
      </div>
    </div>
  );
}

export default App;


const Pokebola = styled.img`
    width:40px;
    height:40px;
`;

const Button = styled.button`
  font-size: 20px;
  color: #A0D9D9;
  background-color: rgb(#A0D9D9);
  border-radius: 20px;
`;