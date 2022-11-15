// Write your Character component here
import React, { useState, useEffect } from "react"
import {data} from "../mocks/handlers"
import axios from 'axios';

function Character({ props }) {
    const [starWars, setStarWars] = useState ([]);


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
        //const element- document.querySelector()
            console.log(res.data);
            setStarWars(res.data);
        }).catch(err => console.error(err))
    }, [])

    return (
        <div className='character container'>
            {starWars.map(char => 
                <div className="character" key={char.name}>
                    {char.name} Birth Year: {char.birth_year}
                </div>
                    )}
        </div>
        )
    }

export default Character; 