import "./NavbarLogin.css";
import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="navbar">
    <header className="pageTitle">
      EdPod
    </header>

    <div className="buttons">
      <Button>
        Sign Up
      </Button>
      <Button>
        Log In
      </Button>
    </div>

    </div>
  );
};

export default NavBar;