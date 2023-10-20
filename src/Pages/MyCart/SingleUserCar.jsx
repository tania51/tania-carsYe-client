
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SingleUserCar = ({ aCar }) => {

    // const [selectedId, setSelectedId] = useState({});




    const { _id, Image } = aCar;
    console.log(_id);


    const deletedCar = _id => {
        // console.log(_id);
        console.log('car deleted successfully');

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
                fetch(`http://localhost:5001/myCart/${_id}`, {
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
                            //   const remainig =  cars.filter(car => car._id === _id)
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
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    {/* <Link to={`/myCart/${id}`}>Delete</Link> */}
                    <Link to={`${_id}`}>
                        <button onClick={() => deletedCar(_id)} className="btn btn-primary">Delete</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default SingleUserCar;