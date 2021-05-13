import {useEffect} from "react";
import {useState} from "react";
import Character from "./character";

export default function Characters(props) {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch("https://api.sampleapis.com/futurama/characters")
            .then(value => value.json())
            .then(value => normalizationData(value))
            .then(value => setCharacters([...value])
        );
    }, []);

    const normalizationData = (data) => {
        const normalizeData = [];
        data.map(character => {
            Array.isArray(character)
                ? normalizeData.push(character[0])
                : normalizeData.push(character)
        })
        return normalizeData;
    }

    return (
        <div>
            {
                characters.map((value, i) => <Character key={i} item={value}/>)
            }
        </div>
    );
}
