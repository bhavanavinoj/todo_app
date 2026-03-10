import { useState } from "react";
import Cars from "../car/car";



function Home(){
    const [cars,setCars]=useState([
        {
            id: 1,
            carName: "Tata Punch",
            price: 20000
        },
        {
            id: 2,
            carName: "Maruti Swift",
            price: 30000
        },
        {
            id: 3,
            carName: "Hyundai Creta",
            price: 40000
        },
        {
            id: 4,
            carName: "Mahindra Thar",
            price: 50000
        }
    ])

    function changePrice(id){
        const newCar=cars.map((car)=>{
            if(car.id==id){
                car.price+=1000
            }
            return car
        })
        setCars(newCar)
    }

    

    return (
    <>
    
        {
            cars.map(car=>
                <Cars  Name={car.carName}    incrementprice={changePrice}   carPrice={car.price}  id={car.id}  />
            )
        }

    </>
    )
}

export default Home;