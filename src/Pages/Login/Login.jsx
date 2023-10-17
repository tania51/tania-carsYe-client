import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const {signIn, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();

    // login with google
    const googleHandeler = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user);
        })
        .catch(error => {
            console.error(error)
        })
    }

    const loginHandeler = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(res => {
            console.log(res);
            form.reset();
            navigate('/')
        })
        .catch(err => {
            Swal.fire({
                text: err,
                color: 'red',
                fontSize: '14px',
                paddingTop: '10px',
                paddingBottom: '10px'
              })
        })

    }

    return (
        <div>
            <Navbar></Navbar>

            {/* login form */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={loginHandeler} className="card-body">
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
                                    <span className="text-base">Do not have an account? Please <Link to="/register" className="ml-2 hover:underline text-blue-500">Register</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <button onClick={googleHandeler} className="btn glass text-orange-500">Sign In With Google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;