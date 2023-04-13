export const ProfileCard = () => {
    return (
        <div className="d-flex align-items-center">
            <div className="text-center">
                <p className="mb-0">Name</p>
                <a>My Profile</a>
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
