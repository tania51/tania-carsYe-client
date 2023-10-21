

const Title = ({children}) => {
    return (
        <div>
            <div className="border-t-[5px] mt-10 md:mt-20 w-24 mb-2 border-orange-600"></div>
            <h2 className="text-2xl md:text-4xl uppercase font-semibold pb-7 md:pb-14">{children}</h2>
        </div>
    );
};

export default Title;