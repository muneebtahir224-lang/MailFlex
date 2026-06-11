import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-section">

        <img
          src={logo}
          alt="Smart Email AI"
        />

        <div>
          <h2>MailFlex - Smart Email AI</h2>
          <span>
            Intelligent Email Assistant
          </span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;