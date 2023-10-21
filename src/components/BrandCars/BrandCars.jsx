import { useEffect, useState } from "react";
import SingleCar from "./SingleCar";
import Title from "../Title/Title";



const BrandCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://cars-ye-server-mktm605dq-tania-akters-projects.vercel.app/brandName')
            .then(result => result.json())
            .then(data => {
                // console.log(data);
                setCars(data)
            })
    }, [])

    return (
        <div className="py-3 md:py-10 px-10 md:px-20">
            <Title>Latest Brand Cars</Title>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 md:gap-14">
                {
                    cars && cars.map(car => <SingleCar key={car.id} car={car}></SingleCar>)
                }
            </div>
        </div>
    );
};

export default BrandCars;