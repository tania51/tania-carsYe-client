import Swal from "sweetalert2";
import Button from "./Button/Button";
import Title from "./Title/Title";



const AddProductForm = () => {

    
    const addCarHandeler = e => {
        e.preventDefault();
        console.log('add car works perfectly');
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.carType.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortDes = form.shortDes.value;
        const addCarInfo = { name, brand, type, photo, price, rating, shortDes }

        console.log(addCarInfo);

        fetch('https://cars-ye-server-mktm605dq-tania-akters-projects.vercel.app/addCar', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addCarInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Car Added Successfully!!'
                  })
            }
            form.reset();
        })

    }

    return (
        <div>
            {/* add products form */}
            <div className="hero bg-base-200 md:px-32">
                <div className="hero-content p-0 md:gap-4 md:p-4 mb-20 mt-40">
                    <div className="card md:flex-shrink-0 w-full shadow-2xl bg-base-100 py-6 md:px-4">
                        <form onSubmit={addCarHandeler}>
                            <div className="card-body grid md:grid-cols-2 md:gap-x-5 mb-2 pb-0">
                                {/* car name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter Name" name="name" className="input input-bordered" required />
                                </div>

                                {/* brand name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter Brand Name" name="brand" className="input input-bordered" required />
                                </div>


                                {/* type */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type of Cars</span>
                                    </label>
                                    <select className="input input-bordered" name="carType" id="car-type">
                                        <option value="">Select Car</option>
                                        <option value="toyota">Toyota</option>
                                        <option value="ford">Ford</option>
                                        <option value="BMW">BMW</option>
                                        <option value="mercedes">Mercedes Benze</option>
                                        <option value="honda">Honda</option>
                                        <option value="tesla">Tesla</option>
                                    </select>
                                </div>

                                {/* photo url */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered" required />
                                </div>

                                {/* Price */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Enter Price" name="price" className="input input-bordered" required />
                                </div>

                                {/* Rating */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>

                                    <input type="text" placeholder="Give Rating" name="rating" className="input input-bordered" required />
                                </div>

                                

                            </div>

                            <div className="card-body mt-0 pt-0 pb-10">

                                {/* Short Description */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea className="input input-bordered h-32" name="shortDes" id="" cols="30" rows="5"></textarea>
                                </div>

                                <div className="form-control mt-3">
                                    <Button>Add Car</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;