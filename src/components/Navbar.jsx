import React from "react";

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Chat Machine</span>
            <div className='user'>
                <img
                    src='https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343_960_720.jpg'
                    alt=''
                />
                <span>Kos</span>
                <button>Log Out</button>
            </div>
        </div>
    );
};
export default Navbar;
