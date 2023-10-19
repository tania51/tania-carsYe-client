
import { useParams } from "react-router-dom";


const Details = () => {

    const carId = useParams();
    console.log(carId);

    return (
        <div>
            Car details are here
        </div>
    );
};

export default Details;