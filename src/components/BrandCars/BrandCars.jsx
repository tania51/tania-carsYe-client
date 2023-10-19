import { useState } from "react";
import SingleCar from "./SingleCar";



const BrandCars = () => {
    const [cars, setCars] = useState([]);

    fetch('/public/automotive.json')
    .then(result => result.json())
    .then(data => {
        console.log(data);
        setCars(data)
    })

    return (
        <div className="py-10 px-10">
            <h2 className="text-5xl uppercase font-semibold">Latest Brand Cars</h2>
            <h2>All brand cars are here {cars.length}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    cars && cars.map(car => <SingleCar key={car.id} car={car}></SingleCar>)
                }
            </div>
        </div>
    );
};

export default BrandCars;