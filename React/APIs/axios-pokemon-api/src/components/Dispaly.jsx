import React from 'react'

const Dispaly = (props) => {
    // destructuring state passed into props
    const {pokemonList} = props
    return (
        <div>
            <ul>
            {
                // mapping through the list to display the names of pokeom
                pokemonList.map((pokemon,index)=>(
                        <li key={index} className='pokemon'>{pokemon.name}</li>
                ))
            }
            </ul>
            
        </div>
    )
    }

export default Dispaly