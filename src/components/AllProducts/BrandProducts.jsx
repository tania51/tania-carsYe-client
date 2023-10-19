import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import SingleBrandCars from "./SingleBrandCars";


const BrandProducts = () => {
    // const carLoader = useLoaderData();
    const carBrandName = useParams();
    // console.log(carBrandName);
    // console.log(carLoader);
    const [cars, setCars] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:5001/brandProducts')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const filterCars =  data.filter(car => car.brandName === carBrandName.brandName && car.Name);
            // console.log(filterCars);
            setCars(filterCars);
        })
    }, [carBrandName.brandName])


    return (
        <div>
            <Navbar></Navbar>

            {/* single brand all cars */}
            <div className="grid md:grid-cols-2 gap-6">
                {
                    cars.map(car => <SingleBrandCars key={car?._id} car={car}></SingleBrandCars>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default BrandProducts;