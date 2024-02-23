import { useRef } from "react";
import "./App.css";
import { PortfolioButton, PortfolioCard } from "./components/PortfolioItem";

function App() {
  const projects = useRef([
    {
      title: "Super awesome project",
      description:
        "This is the approximately 30 second elevator pitch for your project.",
      image: "https://placekitten.com/750",
      url: "https://someproject.com",
      repo: "https://github.com/dotfortun/coolproject",
      ref: useRef(null),
    },
    {
      title: "Another awesome project",
      description:
        "This is the approximately 30 second elevator pitch for your project.",
      image: "https://placekitten.com/751",
      url: "https://someproject.com",
      repo: null,
      ref: useRef(null),
    },
    {
      title: "The coolest project",
      description:
        "This is the approximately 30 second elevator pitch for your project.",
      image: "https://placekitten.com/752",
      url: null,
      repo: "https://github.com/dotfortun/coolproject",
      ref: useRef(null),
    },
  ]);

  const handleClick = (item) => {
    item.ref.current.scrollIntoView();
  };

  return (
    <>
      <div className="fluid-container">
        <nav class="navbar navbar-expand-sm bg-body-tertiary fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" onClick={() => window.scroll(0, 0)}>
              Portfolio
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                {projects.current.map((item, idx) => (
                  <PortfolioButton
                    title={item.title}
                    onClick={() => handleClick(item)}
                    key={idx}
                  />
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="container d-flex flex-column gap-3"
          style={{ paddingTop: "7.5rem" }}
        >
          {projects.current.map((item, idx) => (
            <PortfolioCard
              maxWidth="100%"
              item={item}
              key={idx}
              ref={item.ref}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
