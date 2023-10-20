import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import SingleUserCar from "./SingleUserCar";


const MyCart = () => {
    

    const carLoader = useLoaderData();
    // console.log(carLoader);

    const { user } = useContext(AuthContext);
    // console.log(user.email);

    const usersCar = carLoader.filter(car => car.email === user.email);
    // console.log(usersCar);

    return (
        <div>
            <Navbar></Navbar>

            {/* users all cars are here using card */}
        {
            usersCar.length === 0 ? <div className="h-[70vh] flex justify-center items-center"><h2 className="text-5xl text-white text-center">No Car Found.. <br /> Please First Add Some Car !!</h2></div>
            :
            <div className="grid md:grid-cols-2 gap-6 px-20">
                {
                    usersCar.map((aCar, index) => <SingleUserCar key={index} aCar={aCar}></SingleUserCar>)
                }
            </div>

        }
            

            

            <Footer></Footer>
        </div>
    );
};

export default MyCart;