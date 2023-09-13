import './Bottle.css'
const Bottle = ({bottle}) => {
    console.log(bottle);
    const {name,price,img} = bottle;
    return (
        <div className="Bottle">
           <h2>Bottle Name: {name}</h2> 
           <p>price: {price}</p>
           <img src={img} alt="" />
        </div>
       
    );
};

export default Bottle;