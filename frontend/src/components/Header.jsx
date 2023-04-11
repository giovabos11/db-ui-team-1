import React, { useState } from "react";

export const Header = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
        <div className="bg-light fixed-top" >
            <div className="d-flex justify-content-between py-1">
                <h5 className="d-inline-block m-1 p-1 mx-3">Workout App</h5>
                <div className="d-inline-block mx-4">
                    <a className="d-inline-block mx-5 " style={{textDecoration: 'none', color: '#003F7D', fontWeight: 'bold'}}>Login</a>
                    <a className="d-inline-block my-1 py-2 px-4 text-white rounded" style={{backgroundColor: 'orange', textDecoration: 'none', fontWeight:"bold"    }}>SIGN UP</a>
                </div>
            </div>
            </div>
        </>
    );
};