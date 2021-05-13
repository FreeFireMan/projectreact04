import {useEffect, useState} from "react";
import Inventory from "./inventory";

export default function Characters(props) {
    let [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch("https://api.sampleapis.com/futurama/inventory")
            .then(value => value.json())
            .then(value => {
                setInventory([...value]);
            });
    }, []);

    return (
        <div>
            {
                inventory.map(value => <Inventory key={value.id} item={value}/>)
            }
        </div>
    );
}
