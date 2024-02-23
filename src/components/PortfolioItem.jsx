import { forwardRef } from "react";

const PortfolioButton = ({ title, onClick }) => {
  return (
    <li class="nav-item">
      <a class="nav-link" onClick={onClick}>
        {title}
      </a>
    </li>
  );
};

const PortfolioCard = forwardRef(function project(
  { item, maxWidth = "540px" },
  ref
) {
  return (
    <div ref={ref} class="card mb-3" style={{ maxWidth: maxWidth }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={item.image} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.description}</p>
            <div class="d-flex flex-row gap-3 justify-content-start">
              {item.url ? (
                <a
                  href={item.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it in action!
                </a>
              ) : (
                ""
              )}
              {item.repo ? (
                <a
                  href={item.repo}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the code!
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export { PortfolioButton, PortfolioCard };
