import { useEffect, useState } from "react";
import RecentSingleCar from "./RecentSingleCar";
import Title from "../Title/Title";


const RecentCar = () => {

    const [addCars, setAddCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:5001/addCar')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAddCars(data);
            })
    }, [])

    return (
        <div className="px-20">
            <Title>Recently Added Car</Title>
            <div className="grid grid-cols-3 gap-6 mb-24">
                {
                    addCars.map(car => <RecentSingleCar key={car._id} car={car}></RecentSingleCar>)
                }
            </div>
        </div>
    );
};

export default RecentCar;