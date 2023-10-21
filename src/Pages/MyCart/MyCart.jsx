// import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Button from "../../components/Button/Button";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const MyCart = () => {

    const carLoader = useLoaderData();
    const [usersCar, setUsersCar] = useState([]);
    const { user, loading } = useContext(AuthContext);
    if(loading) {
        return <div className="w-full flex justify-center h-screen items-center">
            <span className="loading loading-spinner text-error"></span>
        </div>
    }


    useEffect(() => {
        const usersCar2 = carLoader && carLoader.filter(car => car.email === user.email);
        console.log(usersCar2);
        setUsersCar(usersCar2);
    }, [user.email, carLoader])


    const deletedCar = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://cars-ye-server-mktm605dq-tania-akters-projects.vercel.app/myCart/${id}`, {
                    method: 'DELETE'
                })
                    .then(result => result.json())
                    .then(data => {
                        console.log(data)
                        if (data?.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                              const remainig =  usersCar.filter(car => car._id !== id)
                              setUsersCar(remainig)
                            //   setCars(remainig);
                            console.log(remainig);

                        }
                    })


            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>

            {/* users all cars are here using card */}
            <div className="pt-40 pb-20">
                {
                    usersCar.length === 0 ? <div className="h-[60vh] flex justify-center items-center"><h2 className="text-5xl text-orange-500 text-center">No Car Found.. <br /> Please First Add Some Car !!</h2></div>
                        :
                        <div className="grid md:grid-cols-2 gap-6 px-10 md:px-20">
                            {
                                usersCar.map((aCar) => <div key={aCar._id}>
                                    <div className="card bg-base-100 shadow-xl">
                                        <figure><img className="h-72 w-full" src={aCar.Image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-xl"><span className="text-bold">Car Name :</span> <span className="text-orange-500">{aCar.Name}</span></h2>
                                            <p className="text-lg"><span className="text-bold">Price :</span> {aCar.Price}</p>
                                            <div className="card-actions">
                                                
                                                <Button><span onClick={() => deletedCar(aCar._id)}>Delete</span></Button>
                                            </div>
                                        </div>
                                    </div>

                                </div>)
                            }
                        </div>

                }
            </div>




            <Footer></Footer>
        </div>
    );
};

export default MyCart;