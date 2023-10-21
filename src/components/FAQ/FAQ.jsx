import Title from "../Title/Title";


const FAQ = () => {
    return (
        <div className="px-10 md:px-20 pt-9 md:pt-0">
            <Title>Fequently Asked Questions</Title>
            <div className="space-y-4 mb-20 mt-6 md:mt-0">

                {/* question: 01 */}
            <details className="collapse bg-[#0c1222] collapse-plus -mt-5 rounded-md">
                <summary className="collapse-title text-xl font-medium hover:text-orange-400">What is the brand personality of Ford?</summary>
                <div className="collapse-content">
                    <p>Ford's brand personality is based on the more value for money and build quality values. Where BMW's brand personality is sophistication, Ford's is accessible. Ford Motor Co (Ford) is an automotive company, which designs, manufactures, markets and services a full line of cars, trucks, sport utility vehicles and electrified vehicles. The company provides vehicle-related financing and leasing services. Ford markets its products under Ford and Lincoln brand names.</p>
                </div>
            </details>

                {/* question: 02 */}
            <details className="collapse  bg-[#0c1222] collapse-plus -mt-5 rounded-md">
                <summary className="collapse-title text-xl font-medium hover:text-orange-400">What is Toyota car famous for?</summary>
                <div className="collapse-content">
                    <p>Toyota is world-famous as the manufacturer of high-quality, high-value cars, vans and trucks that set the standard for long-term resale value and durability. Toyota Motor Corp (Toyota) is an automobile manufacturer. The company designs, manufactures and sells passenger cars, buses, minivans, trucks, specialty cars, recreational and sport-utility vehicles. It provides financing to dealers and customers for the purchase or lease of vehicles.</p>
                </div>
            </details>

                {/* question: 03 */}
            <details className="collapse  bg-[#0c1222] collapse-plus -mt-5 rounded-md">
                <summary className="collapse-title text-xl font-medium hover:text-orange-400">What is special about Honda car?</summary>
                <div className="collapse-content">
                    <p>Most Hondas have energetic powertrains competitive fuel economy, and an engaging driving experience. Standout models in our tests are the Accord, Odyssey, and Ridgeline. The Honda Civic shines in handling, braking, and fuel economy, but it has a noisy cabin and an uncomfortable ride.</p>
                </div>
            </details>

                {/* question: 04 */}
            <details className="collapse  bg-[#0c1222] collapse-plus -mt-5 rounded-md">
                <summary className="collapse-title text-xl font-medium hover:text-orange-400">What kind of good is a Mercedes-Benz?</summary>
                <div className="collapse-content">
                    <p>These luxury vehicles typically offer a plush ride, an impeccable interior, quiet cabin, advanced safety systems, and crisp handling. Mercedes continues to offer a variety of sedans and SUVS in a plethora of sizes and price tags. Most have performed very well in our tests.</p>
                </div>
            </details>

                {/* question: 05 */}
            <details className="collapse  bg-[#0c1222] collapse-plus -mt-5 rounded-md">
                <summary className="collapse-title text-xl font-medium hover:text-orange-400">What is the best thing about BMW?</summary>
                <div className="collapse-content">
                    <p>Luxury. This goes without saying really: a BMW car is always one of the most luxurious cars in its segment. The thought, design and craftsmanship which go into each BMW cabin are simply on another level. The materials are top-notch, even on the base models, and the overall feel is that you're driving a premium car.</p>
                </div>
            </details>

                {/* question: 06 */}
            <details className="collapse  bg-[#0c1222] collapse-plus -mt-5 rounded-md">
                <summary className="collapse-title text-xl font-medium hover:text-orange-400">Why do people admire Tesla?</summary>
                <div className="collapse-content">
                    <p>Innovative Tech. Many tech enthusiasts love Teslas because they come with cutting-edge tech features that are unique to this type of cars. Tesla Inc (Tesla) is an automotive and energy company. It designs, develops, manufactures, sells, and leases electric vehicles, energy generation, and storage systems.</p>
                </div>
            </details>


            </div>
        </div>
    );
};

export default FAQ;