

const Button = ({children}) => {
    return (
            <button className="btn bg-transparent hover:bg-transparent hover:text-orange-500 border border-t-[#0b1220] border-t-0 shadow-2xl w-full mb-2 text-orange-200 mt-5">{children}</button>
    );
};

export default Button;