import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";


const ErrorPage = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/rkgqTRS/pexels-photo-627721.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-9xl text-orange-500 font-extrabold">404</h1>
      <p className="mb-5 text-2xl">Page Not Found!! <br />Do not worry.</p>
      <p className="mb-5 text-xl">Go to Home Page by clicking this button.</p>
      <Link to="/"><Button><span className="text-orange-500 text-xl font-bold"> Go Home</span></Button></Link>
    </div>
  </div>
</div>
    );
};

export default ErrorPage;