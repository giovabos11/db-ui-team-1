import { Link } from "react-router-dom";

export const ProfileCard = ({firstName}) => {
    return (
        <div className="d-flex align-items-center ">
            <div className="text-center">
                <p className="mb-0">{firstName}</p>
                <Link to={'../profile'}>My Profile
                </Link>
            </div>
            <img
                src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                alt="noimg"
                className="rounded-circle ml-2"
                style={{ maxWidth: "3rem", maxHeight: "3rem" }}
            />
        </div>
    );
};
