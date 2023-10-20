

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SingleUserCar = ({ aCar, carId }) => {
    console.log(carId);
    const [selectedId, setSelectedId] = useState('');




    const { _id, Image } = aCar;
    // console.log(_id);

    // const obj = [{_id: '2345'}]
    // const obj2 = JSON.stringify(obj[0]._id)
    // const num = JSON.parse(obj2)
    // console.log(typeof(num));

    // const filteredCarObj = data.filter(car => {
    //     const carObj = car._id;
    //     const carArr = carObj.toArray();
    //     const carString = JSON.stringify(carArr[0]._id)
    //     const carResult = JSON.parse(carString);
    //     console.log(carResult);

    //     carResult === _id;
    // })


    const deletedCar = id => {
        // console.log('car deleted successfully');
        // console.log(id);

        fetch(`http://localhost:5001/myCart`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // const filterId = data(data => typeof(data._id))
            // console.log(filterId);
            // const filterId = data(car => car._id === _id)
            // console.log(filterId);
        })

        // const filterCar = carLoader.filter(car => console.log(car._id))
        // console.log(filterCar);




        // fetch(`http://localhost:5001/myCart/${id}`)
        // .then(res => res.json())
        // .then(data => {
        //     const dataId = data.filter(dat => dat._id === _id)
        //     console.log(dataId);
            // console.log(dataId);
            // const filterData = data.forEach()
            // const filteredCarObj = data.find(car => {
            //     const carObj = car._id;
            //     const carArr = carObj.toArray();
            //     const carString = JSON.stringify(carArr[0]._id)
            //     const carResult = JSON.parse(carString);
            //     console.log(carResult);

            //     carResult === _id;
            // })
            // console.log(filteredCarObj);
        // })



        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         fetch(`http://localhost:5001/myCart`)
        //             .then(result => result.json())
        //             .then(data => {
        //                 console.log(data)
        //                 if (data?.deletedCount > 0) {
        //                     Swal.fire(
        //                         'Deleted!',
        //                         'Your file has been deleted.',
        //                         'success'
        //                     )
        //                     //   const remainig =  cars.filter(car => car._id === _id)
        //                     // //   setCars(remainig);
        //                     // console.log(remainig);

        //                 }
        //             })


        //     }
        // })



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
                    {/* {console.log(_id)} */}
                    <button onClick={() => deletedCar(_id)} className="btn btn-primary">Delete</button>
                    

                </div>
            </div>
        </div>
    );
};

export default SingleUserCar;