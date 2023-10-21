import { useEffect, useState } from "react";


const Slider = ({car}) => {

    // console.log(car.brandName);
    
    const [sliderImage, setSliderImage] = useState([]);

    useEffect( () => {
        fetch('https://cars-ye-server-mktm605dq-tania-akters-projects.vercel.app/sliderImage')
        .then(res => res.json())
        .then(data => {
            const filteredImages = data.find(img => img.brandName === car.brandName)
            setSliderImage(filteredImages)
            console.log(data)
        })
    }, [])
    console.log(sliderImage);

    

    return (
        <div>
            <div className="carousel w-full h-[80vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={sliderImage.image1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={sliderImage.image2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={sliderImage.image3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Slider;