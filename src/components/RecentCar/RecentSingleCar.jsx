

const RecentSingleCar = ({car}) => {

    const {photo, name, brand, shortDes} = car;

    return (
        <div>
            <div className="card bg-[#0d1424] h-[430px]">
                <figure><img className="h-60 w-full" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title text-xl"><span className="text-bold">Car Name :</span> <span className="text-orange-500">{name}</span></h2>
                        <p className="text-lg"><span className="text-bold">BrandName :</span> {brand}</p>
                        <p className="text-lg"><span className="text-bold">Description :</span> {shortDes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentSingleCar;