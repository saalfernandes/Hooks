// import React, {useState,useEffect} from "react";

// function Table() {
//     const [characters, setCharacter] = useState ([])

//     useEffect(() => {
//         async function fetchCharacter(params) {
//             const response = await fetch("https://rickandmortyapi.com/api/character")
//             const data = await response.json()
//             setCharacter(data.results)
//         }
//         fetchCharacter()

//     }, []);
//     console.log(characters)
//     return (
//         <>
//         <table>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Status</th>
//                     <th>Species</th>
//                 </tr>
//             </thead>
//             <tbody>
//              {
//                        characters.map((character) => (
//                         <tr key={character.id}>
//                         <td>{character.id}</td>
//                         <td>{character.name}</td>
//                         <td>{character.status}</td>
//                         <td>{character.species}</td>
//                     </tr>
//                 )
//                     )
//              }   
             
                       
                       
                    
               
//             </tbody>
//         </table>
//         </>
//     )
// }

// export default Table