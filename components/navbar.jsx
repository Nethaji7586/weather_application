import { WiDaySunny } from "react-icons/wi";

function Navbar() {
  return (
    <nav className="navbar p-3 mb-2 bg-transparent text-dark navbar-dark bg-success">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Left side - Logo */}
        <a
          className="navbar-brand heading d-flex align-items-center gap-2 fs-2 mb-0"
          href="#"
        >
          <WiDaySunny size={40} /> Weather
        </a>

        {/* Right side - Quote */}
        <p className="mb-0 quote  fs-6 text-end">
          A day without sunshine is like, you know, night
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
