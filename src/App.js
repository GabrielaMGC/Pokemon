import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components'
import pokebola from './images/pokebola.png'
import {WiCloudRefresh} from 'react-icons/wi'
import {CgReorder} from 'react-icons/cg'

function App() {
  const [allPokemons,setAllPokemons] = useState([])
  const [loadMore,setLoadMore] =useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async()=>{
    const res =await fetch(loadMore)
    const data = res.json()
    setLoadMore(data.next)
    console.log(data)
    
    function createPokemonObject(result){
        result.array.forEach(async (pokemon) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data = res.json()

          setAllPokemons(currentList =>[...currentList,data])
        });
    }
    createPokemonObject(data.result)
    await console.log(allPokemons)
  }

  useEffect(()=>{
    getAllPokemons()
  },[])

  return(
    <div className="App-content">
      <div className='container'>
        <p>P</p> <Pokebola src={pokebola}/> <p>kemon</p>
      </div>
      <div className='pokemon-container'>
      <div className='all-container'>
      </div>
      <p className=''></p>
      <Button id="carregar"><WiCloudRefresh size={75}/></Button>
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