import { createContext, useEffect, useState } from "react";

export const FetchCars = createContext();

const FetchAllCars = ({children}) => {
    const [cars, setCars] = useState([])

    useEffect( () => {
        fetch('https://cars-ye-server-mktm605dq-tania-akters-projects.vercel.app/brandProducts')
        .then(res => res.json())
        .then(data => {
            setCars(data);
        })
    }, [])

    const allCars = {
        cars
    }
    

    return (
        <FetchCars.Provider value={allCars}>
            {children}
        </FetchCars.Provider>
    );
};

export default FetchAllCars;