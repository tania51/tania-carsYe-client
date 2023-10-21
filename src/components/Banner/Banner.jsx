

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/4VKPR1W/pexels-photo-1335077.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="w-full flex justify-start pl-20">
                    <div className="text-left">
                        <h1 className="mb-5 text-left text-4xl md:text-5xl font-bold text-orange-50">Offer 10% OFF!!</h1> 
                        <div className="btn bg-[#0f1729] border-none hover:bg-[#0f1729] hover:text-orange-400 day-btn">Pursace Code: 7853</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;