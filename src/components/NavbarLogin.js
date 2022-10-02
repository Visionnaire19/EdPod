import "./NavbarLogin.css";

const NavBar = () => {
  return (
    <div className="navbar">
    <header className="pageTitle">
      EdPod
    </header>

    <div className="buttons">
    <a href="src/pages/SignupPage">
      <button type="button" className="signUpButton">
        Sign Up
      </button>
      </a>
      <a href="src/pages/LoginPage">
      <button type="button" className="loginButton">
        Log In
      </button>
      </a>
    </div>

    </div>
  );
};

export default NavBar;