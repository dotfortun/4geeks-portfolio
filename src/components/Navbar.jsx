import "./Navbar.css";

const ProjectButton = ({ children, onClick, active }) => {
  return (
    <>
      <span
        className={`nav-link rounded-2${active ? " active bg-secondary" : ""}`}
        onClick={onClick}
        aria-current="page"
      >
        {children}
      </span>
    </>
  );
};

const Navbar = ({ children, onClick }) => {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top bg-body-secondary pf-navbar">
        <div className="container-fluid">
          <div className="navbar-brand" onClick={onClick}>
            Portfolio
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-nav"
            aria-controls="navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbar-nav" className="collapse navbar-collapse">
            <div className="navbar-nav me-auto mb-2 mb-md-0">{children}</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
export { ProjectButton };
