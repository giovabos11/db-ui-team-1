import { Header } from "./Header";

export const Homepage = () => {
  return (
    <>
      <Header />

      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-primary position-relative">
        <img
          src="https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Workout"
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="text-center">The Best Workout App Ever Created</h1>
          <p className="text-center">Create your perfect workout today.</p>
        </div>
      </div>
    </>
  );
};
