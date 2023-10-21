import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import SingleBrandCars from "./SingleBrandCars";
import Slider from "../Slider/Slider";
import Title from "../Title/Title";


const BrandProducts = () => {
    // const carLoader = useLoaderData();
    const carBrandName = useParams();
    // console.log(carBrandName);
    // console.log(carLoader);
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        fetch('https://cars-ye-server-mktm605dq-tania-akters-projects.vercel.app/brandProducts')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const filterCars = data.filter(car => car.brandName === carBrandName.brandName && car.Name);
                // console.log(filterCars);
                setCars(filterCars);
                setLoading(false);
            })
    }, [carBrandName.brandName])

    if (loading) {
        return <div className="w-full flex justify-center h-screen items-center">
            <span className="loading loading-spinner text-error"></span>
        </div>
    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="mb-16 md:mb-32">
                    {
                        cars.slice(0, 1).map(car =>
                            <Slider key={car._id} car={car}></Slider>) 
                    }
                </div>

                <div>

                    {
                        cars.length === 0 ? <div className="h-[70vh] -mt-32 pt-0 flex justify-center items-center"><h2 className="text-5xl text-orange-500 text-center mt-20 md:mt-0">No Car Found.. <br /></h2></div>
                            :
                            <div className="px-10 md:px-20 pb-32">
                                <div>
                                    {
                                        cars.slice(0, 1).map(car =>
                                            <>
                                                <Title>{car.brandName} Latest Cars</Title>
                                            </>
                                        )
                                    }
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {
                                        cars.map(car =>
                                            <SingleBrandCars key={car?._id} car={car}></SingleBrandCars>
                                        )
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default BrandProducts;