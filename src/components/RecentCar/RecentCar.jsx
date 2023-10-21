import { useEffect, useState } from "react";
import RecentSingleCar from "./RecentSingleCar";
import Title from "../Title/Title";


const RecentCar = () => {

    const [addCars, setAddCars] = useState([])

    useEffect(() => {
        fetch('https://cars-ye-server-mktm605dq-tania-akters-projects.vercel.app/addCar')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAddCars(data);
            })
    }, [])

    return (
        <div className="px-10 md:px-20">
            <Title>Recently Added Car</Title>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                {
                    addCars.map(car => <RecentSingleCar key={car._id} car={car}></RecentSingleCar>)
                }
            </div>
        </div>
    );
};

export default RecentCar;