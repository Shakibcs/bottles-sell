import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'
const Bottles = () => {
    const [bottles,setBottles] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])
    return (
        
        <div className="bottlesContainer">
           
           {
            bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle}></Bottle>)
           } 
        </div>
    );
};

export default Bottles;