

const SingleUserCar = ({ aCar }) => {

    const { _id, Image } = aCar;
    console.log(_id);
    

    const deletedCar = id => {
        console.log(id);
        console.log('car deleted successfully');

        fetch(`http://localhost:5001/myCart/${id}`, {
            method: 'DELETE'
        })
        .then(result => result.json())
        .then(data => console.log(data))
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button onClick={() => deletedCar(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleUserCar;