import { Link } from "react-router-dom";


const SingleCar = ({ car }) => {

    const { brandImage, brandName } = car;

    return (
        <Link to={`/brandProducts/${brandName}`} className="hover:text-orange-600">
            <div className="card bg-[#0f1729] shadow-xl shadow-gray-800">
                <figure data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="1500"><img className="h-72 w-full" src={brandImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">{brandName}</h2>
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