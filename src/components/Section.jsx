import { forwardRef } from "react";
import "./Section.css";

const Project = forwardRef(function project({ data }, ref) {
  const getGHIcon = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "light"
      : "dark";
  };

  return (
    <section className="project-section border-bottom border-2" ref={ref}>
      <div
        className="pf-bg"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      ></div>
      <h2 className="pf-title">{data.title}</h2>
      <p className="pf-desc">{data.description}</p>
      <div className="pf-link d-flex flex-row justify-content-center gap-3">
        {data.link ? (
          <a className="btn btn-primary" href={data.link} target="_blank">
            See this project in action
          </a>
        ) : (
          ""
        )}
        {data.repo ? (
          <a
            className="btn btn-secondary"
            href={data.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out the source here! &nbsp;
            <img src={`/img/github-mark-${getGHIcon()}.png`} alt="" />
          </a>
        ) : (
          ""
        )}
      </div>
    </section>
  );
});

export default Project;
