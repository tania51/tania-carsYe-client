

import { useState } from "react";
import Swal from "sweetalert2";
import Button from "../../components/Button/Button";


const SingleUserCar = ({ aCar}) => {
    console.log(aCar);
    // const [selectedId, setSelectedId] = useState('');

    const { _id, Image } = aCar;
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
                fetch(`http://localhost:5001/myCart/${id}`, {
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
                            //   const remainig =  usersCar.filter(car => car._id === id)
                            //   setSelectedId(remainig)
                            // //   setCars(remainig);
                            // console.log(remainig);

                        }
                    })


            }
        })
    }



    // const carId = carLoader.find(singleId => singleId._id === _id);
    // console.log(carId._id);

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl"><span className="text-bold">Car Name :</span> <span className="text-orange-500">{aCar.Name}</span></h2>
                    <p className="text-lg"><span className="text-bold">Price :</span> {aCar.Price}</p>
                    <div className="card-actions">
                        {/* <Link to={`/myCart/${id}`}>Delete</Link> */}
                        {/* {console.log(_id)} */}
                        <Button><span onClick={() => deletedCar(_id)}>Delete</span></Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleUserCar;