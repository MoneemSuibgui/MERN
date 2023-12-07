const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//  create a list of pokémon that have names that start with the letter "B" by using the following code.

const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
console.log(bListPkmn)

//  we wanted to return an array of just the ids, we could use something like this.
const pokemonIds=pokémon.map(p =>p.id);
console.log(pokemonIds)




// Solution :

// (1) an array of pokémon objects where the id is evenly divisible by 3
const divisibleIdsBy3=pokémon.map(p=> p.id).filter(p =>p % 3 ==0)
console.log(divisibleIdsBy3)
console.log("*****************")

// (2) an array of pokémon objects that are "fire" type
const ArrayTypeFire=pokémon.filter(p => p.types="fire")
console.log(ArrayTypeFire)
console.log("*****************")
console.log("*****************")

// (3) an array of pokémon objects that have more than one type
const pokemonTypes=pokémon.filter(pok => pok.types.length>1)
console.log(pokemonTypes)
console.log("*****************")
console.log("*****************")

// (4) an array with just the names of the pokémon
const namePokemon=pokémon.map(pok => pok.name)
console.log(namePokemon)
console.log("*****************")

// (5) an array with just the names of pokémon with an id greater than 99
const pokemonGreaterIds=pokémon.filter(pok => pok.id > 99).map(p => p.name)
console.log(pokemonGreaterIds)
console.log("*****************")

// (6) an array with just the names of the pokémon whose only type is poison
const pokemonTypePoison=pokémon.filter(pok => pok.types.includes("poison")).map(p => p.name)
console.log(pokemonTypePoison)
console.log("*****************")

// (7) an array containing just the first type of all the pokémon whose second type is "flying"
const pokemonFirstTypeFlying=pokémon.filter(pok => pok.types[1]=="flying").map(p =>p.types[0])
console.log(pokemonFirstTypeFlying)
console.log("*****************")

// (8) count the number of pokémon that are "normal" type
const countPokemonType=pokémon.filter(p => p.types.includes("normal")).map(function(element,index,arr){
    console.log(`the elemnt is ${element}`);
    console.log(`the index is ${index}`);
    console.log(`array  ${arr}`);
    var sum=1;
    return sum + index
})
console.log("*****************")
console.log(countPokemonType.length)









