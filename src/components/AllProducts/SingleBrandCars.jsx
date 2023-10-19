import { Link } from "react-router-dom";



const SingleBrandCars = ({car}) => {
    console.log(car);

    const { _id, Image } = car;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link to={`/brandProducts/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    <button className="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBrandCars;