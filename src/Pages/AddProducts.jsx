import AddProductForm from "../components/AddProductForm";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const AddProducts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AddProductForm></AddProductForm>
            <Footer></Footer>
        </div>
    );
};

export default AddProducts;