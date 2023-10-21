import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";


const Registration = () => {

    const { createUser, googleSignIn } = useContext(AuthContext);

    const googleHandeler = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user);
        })
        .catch(error => {
            console.error(error)
        })
    }



    

    const registerHandeler = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        if(! /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{6,}$/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Password Should be atleast 6 charecters, one capital letter and one special charecter',
                color: 'red',
                fontSize: '14px',
                padding: '4px'
              })
        } else {
            createUser(email, password)
            .then(res => {
                console.log(res);
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Created User!!'
                  })

                form.reset();
            })
            .catch(err => {
                console.error(err);
            })
        }

        // google authentication


        

    }

    return (
        <div>
            <Navbar></Navbar>

            {/* login form */}
            <div className="hero min-h-screen pt-40 pb-13 bg-base-200">
                <div className="hero-content w-full">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={registerHandeler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter Password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <span className="text-base">Already have an account? Please <Link to="/login" className="ml-2 hover:underline text-blue-500">Login</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <button onClick={googleHandeler} className="btn glass text-orange-500">Sign In With Google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration;