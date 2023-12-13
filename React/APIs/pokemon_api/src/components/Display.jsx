import React from 'react'

const Display = (props) => {
    const {allPokemonNames}=props

    
    return (
        <div>
            <h1><ins style={{marginLeft:"50px"}}>All Pokemons :</ins></h1>
            <ul>
                {
                    allPokemonNames.map((pokemon,index)=>(
                            <li key={index} className='pokemon'><b>{pokemon.name}</b></li>
                    ))
                }
            </ul>

        </div>
    )
    }

export default Display