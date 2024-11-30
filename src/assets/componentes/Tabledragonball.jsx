import React, {useState,useEffect} from "react";

function Tabledragonball() {
    const [characters, setCharacter] = useState ([])

    useEffect(() => {
        async function fetchCharacter(params) {
            const response = await fetch("https://dragonball-api.com/api/characters")
            const data = await response.json()
            
            setCharacter(data.items)
        }
        fetchCharacter()
        
    }, []);
    console.log(characters)
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Ki</th>
                    <th>MaxKI</th>
                </tr>
            </thead>
            <tbody>
                {
                    characters.map((character) => (
                        <tr key={character.id}>
                            <td>{character.id}</td>
                            <td>{character.name}</td>
                            <td>{character.ki}</td>
                            <td>{character.maxKi}</td>
                        </tr>
                    ))
                }  
            </tbody>
        </table>
        </>
    )
}

export default Tabledragonball