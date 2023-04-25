import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

export const ErrorPage = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <h1 className="text-primary">404</h1>
        <p>Page Not Found</p>
        <NavLink to="/">
          <Button>Go to Homepage</Button>
        </NavLink>
      </div>
    </>
  );
};