import Swal from "sweetalert2";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Update = () => {

    const updateHandeler = e => {
        e.preventDefault();
        const form = e.target;
        Swal.fire({
            icon: 'success',
            title: 'Car Information Updated Successfully'
          })

        form.reset();

    }


    return (
        <div>
            <Navbar></Navbar>

            {/* add products form */}
            <div className="hero bg-base-200 px-32">
                <div className="hero-content w-full mb-20 mt-40">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-6 px-4">
                        <form onSubmit={updateHandeler}>
                            <div className="card-body grid md:grid-cols-2 mb-2 pb-0">
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
                                    <input type="text" placeholder="Enter Brand Name" name="name" className="input input-bordered" required />
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

                                {/* Type of cars */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>

                                    <input type="text" placeholder="Enter Brand Name" name="name" className="input input-bordered" required />
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

                                    <input type="text" placeholder="Give Rating" name="name" className="input input-bordered" required />
                                </div>

                                {/* Short Description */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea className="input input-bordered" name="short-des" id="" cols="30" rows="5"></textarea>
                                </div>

                            </div>

                            <div className="card-body mt-0 pt-0 pb-10">


                                <div className="form-control mt-3">
                                    <Button>Update</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Update;