import React, { useEffect, useState } from 'react';
import './App.css';

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
      <h1>Pokemon Evolution</h1>
      <div className='pokemon-container'>
      <div className='all-container'>
      </div>
      <button className='load-more'>Load More</button>
      </div>
    </div>
  );
}

export default App;
