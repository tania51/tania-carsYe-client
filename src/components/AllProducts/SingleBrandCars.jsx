import { Link } from "react-router-dom";
import "./SingleCard.css"



const SingleBrandCars = ({ car }) => {
    console.log(car);

    const { _id, Image, Name, brandName, type, Price, Rating } = car;

    return (
        <div>
            <div className="card bg-[#0f1729] shadow-xl shadow-gray-800">
                <figure><img className="h-72 w-full" src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title text-xl"><span className="text-bold">Car Name :</span> <span className="text-orange-500">{Name}</span></h2>
                        <p className="text-lg"><span className="text-bold">BrandName :</span> {brandName}</p>
                        <p className="text-lg"><span className="text-bold">Type Of Car :</span> {type}</p>
                        <p className="text-lg"><span className="text-bold">Price :</span>  {Price}</p>
                        <p className="text-lg"><span className="text-bold">Rating :</span> <span className="text-orange-500">{Rating}</span></p>
                    </div>
                    <Link to={`/details/${_id}`}><button className="btn bg-transparent hover:bg-transparent hover:text-orange-500 border border-t-[#0b1220] border-t-0 shadow-2xl w-full mb-2">Details</button></Link>
                    <Link to={`/update`}><button className="btn bg-transparent border border-t-[#0b1220] hover:text-orange-500 hover:bg-transparent border-t-0 shadow-2xl w-full">Update</button></Link>
                </div>
            </div>
        </div>






        // <div>
        //     <div className="card bg-base-100 shadow-xl">
        //         <figure><img src={Image} alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">Shoes!</h2>
        //             <p>If a dog chews shoes whose shoes does he choose?</p>
        //             <div className="card-actions justify-end">
        //                 <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
        //                 <Link to={`/update`}><button className="btn btn-primary">Update</button></Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default SingleBrandCars;