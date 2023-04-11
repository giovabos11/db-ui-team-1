import { Header } from "./Header";

export const Homepage = () => {
    return (
        <>
            <Header />
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <h1 className="text-center">The Best Workout App Ever Created</h1>
                <p className="text-center">Created in part by: Ashley Cardot, Chandler Casteel, Giovanni Boscan, Jack Carroll, Joshua Ayodele, Will Epperly</p>
            </div>
        </>
    );
};