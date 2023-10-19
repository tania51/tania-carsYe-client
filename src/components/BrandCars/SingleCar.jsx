import { Link } from "react-router-dom";


const SingleCar = ({ car }) => {

    const { brandImage, brandName } = car;

    return (
        <Link to={`/brandProducts/${brandName}`}>
            <div className="card bg-[#0d1525] shadow-xl">
                <figure><img className="h-56 object-cover" src={brandImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brandName}</h2>
                </div>
            </div>
        </Link>


        // <div className="card glass">
        //     <figure><img src={brandImage} alt="car!" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{brandName}</h2>
        //     </div>
        // </div>
    );
};

export default SingleCar;