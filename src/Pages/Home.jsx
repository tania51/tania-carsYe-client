import Banner from "../components/Banner/Banner";
import BrandCars from "../components/BrandCars/BrandCars";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <BrandCars></BrandCars>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;