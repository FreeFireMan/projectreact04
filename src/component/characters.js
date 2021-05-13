import {useEffect} from "react";
import {useState} from "react";
import Character from "./character";

export default function Characters (props) {
    let [characters, setCharacters] =useState([]);
    useEffect(() => {
        fetch("https://api.sampleapis.com/futurama/characters")
            .then(value=>value.json())
            .then(value=>{
                setCharacters([...value]);
            });
}, []);

    return(
        <div>
            {
                characters.map(value => <Character name={value.id} item={value}/>)
            }
        </div>
    );
}