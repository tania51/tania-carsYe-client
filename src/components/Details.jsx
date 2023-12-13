
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Button from "./Button/Button";


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
        fetch('https://cars-ye-server-mktm605dq-tania-akters-projects.vercel.app/brandProducts')
            .then(res => res.json())
            .then(data => {
                setCars(data)
                // console.log(data)
            })
    }, [])

    const singleCar = cars.find(car => car._id === carId.id)
    // console.log(singleCar);
    // const img = singleCar?.Image;
    // console.log(img);
    // const singleCar = delete singleCar
    

    if (typeof (singleCar) === 'undefined') {
        return <div className="w-full flex justify-center h-screen items-center">
            <span className="loading loading-spinner text-error"></span>
        </div>
    }

    const emailAdd = { email: user?.email };
    console.log(emailAdd);
    // const newCarInfoWithEmail = { SiImage, Name, email: user?.email }
    const newCarInfoWithEmail = { ...singleCar, ...emailAdd }
    delete newCarInfoWithEmail._id;
    console.log(newCarInfoWithEmail);

    // console.log(emailAdd);
    // add to cart car using post method
    const addToCartHandeler = () => {
        console.log('cart is clicked');

        fetch('https://cars-ye-server-mktm605dq-tania-akters-projects.vercel.app/myCart', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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
                console.log(err);
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
            <div className="px-10 md:px-20 pt-36 pb-32">
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={singleCar && singleCar.Image} alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title text-xl"><span className="text-bold">Car Name :</span> <span className="text-orange-500">{singleCar.Name}</span></h2>
                        <p className="text-lg"><span className="text-bold">BrandName :</span> {singleCar.brandName}</p>
                        <p className="text-lg"><span className="text-bold">Price :</span> {singleCar.Price}</p>
                        <p className="text-lg"><span className="text-bold">Description :</span> {singleCar.longDes}</p>
                        <div className="card-actions">
                        <Button><span onClick={addToCartHandeler}>Add to Cart</span></Button>
                        {/* <button onClick={addToCartHandeler} className="btn btn-primary">Add to Cart</button> */}
                        </div>
                    </div>
                </div>
            </div>







            {/* <div className="mx-20">
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={singleCar && singleCar.Image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button onClick={addToCartHandeler} className="btn btn-primary">Add to Cart</button>
                        
                    </div>
                </div>
            </div> */}

            <Footer></Footer>
        </div>
    );
};

export default Details;