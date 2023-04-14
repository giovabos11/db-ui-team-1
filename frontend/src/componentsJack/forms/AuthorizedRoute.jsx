import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const AuthorizedRoute = () => {
    const appContext = useContext(AppContext);
    const location = useLocation();

    if (!appContext.userName) {
        return <Navigate to="/login" state={{ from: location.pathname }} />
    } else {
        return <div className="container">
            <header className="text-end pt-3 pb-3">
                <span>{ appContext.userName }</span>&nbsp;
                <button onClick={() => appContext.setUserName(undefined) }>Logout</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    }

};