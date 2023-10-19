
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Details = () => {

    const { user } = useContext(AuthContext)
    console.log(user.email);
    // const [email, setEmail] = useState('');

    // if (typeof(user) !== null) {
    //     const userEmail = user.email;
    //     setEmail(userEmail)
    // }
    // console.log(email);


    const carId = useParams();
    // console.log(carId);

    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:5001/brandProducts')
            .then(res => res.json())
            .then(data => {
                setCars(data)
                // console.log(data)
            })
    }, [])

    const singleCar = cars.find(car => car._id === carId.id)
    // console.log(singleCar);

    if (typeof (singleCar) === 'undefined') {
        return <div className="w-full flex justify-center h-screen items-center">
            <span className="loading loading-spinner text-error"></span>
        </div>
    }

    const emailAdd = { email: user?.email };
    const newCarInfoWithEmail = { ...singleCar, ...emailAdd }
    console.log(newCarInfoWithEmail);

    console.log(emailAdd);
    // add to cart car using post method
    const addToCartHandeler = () => {
        console.log('cart is clicked');

        fetch('http://localhost:5001/brandProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCarInfoWithEmail)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Car Added Successfully!!'
                })
                console.log(data)
            })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Car Already Added'
              })              
            return;
            // console.error(err)
        })
    }



    return (
        <div>
            <Navbar></Navbar>

            {/* details main content */}
            <div className="mx-20">
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={singleCar && singleCar.Image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button onClick={addToCartHandeler} className="btn btn-primary">Add to Cart</button>
                        {/* <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div> */}
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Details;