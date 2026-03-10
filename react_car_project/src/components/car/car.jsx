import './car.css'


function Cars(props){
    return (
    <>
    <div className="car-box">
        <p>{props.id}</p>
        <h3>Car Name : {props.Name}</h3>
        <h4>Price : {props.carPrice} </h4>
        <button className="button" onClick={()=>{props.incrementprice(props.id)}}> + </button>
    </div>
    </>
    )
}

export default Cars;