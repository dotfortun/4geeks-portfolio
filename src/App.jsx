import { useRef, useState } from "react";

import "./App.css";
import Navbar, { ProjectButton } from "./components/Navbar";
import Project from "./components/Section";

function App() {
  const [active, setActive] = useState(null);
  const proj = [
    {
      title: "4Geeks Playground APIs",
      description:
        "A series of APIs for students to learn how to use the JS Fetch API to interact with other APIs.  This API is self-documenting, provides complete Swagger docs, as well as custom long-form descriptions to help students understand how to use these APIs.",
      repo: "https://github.com/dotfortun/4geeks-apis-light",
      link: "https://4geeks.dotlag.space",
      image: "/img/playground.png",
      ref: useRef(null),
    },
    {
      title: "Some other project",
      description: "Some extended description",
      repo: "https://github.com/dotfortun/4geeks-apis-light",
      link: null,
      image: "https://placekitten.com/1300",
      ref: useRef(null),
    },
    {
      title: "Some other project",
      description: "Some extended description",
      repo: "https://github.com/dotfortun/4geeks-apis-light",
      link: null,
      image: "https://placekitten.com/1300",
      ref: useRef(null),
    },
    {
      title: "Some other project",
      description: "Some extended description",
      repo: "https://github.com/dotfortun/4geeks-apis-light",
      link: null,
      image: "https://placekitten.com/1300",
      ref: useRef(null),
    },
  ];

  const scrollToItem = (el, idx) => {
    setActive(idx);
    el.current.scrollIntoView({
      block: "start",
    });
  };

  return (
    <>
      <Navbar
        onClick={() => {
          setActive(null);
          window.scroll(0, 0);
        }}
      >
        {proj.map((item, idx) => (
          <ProjectButton
            key={idx}
            onClick={() => scrollToItem(item.ref, idx)}
            active={idx === active}
          >
            {item.title}
          </ProjectButton>
        ))}
      </Navbar>
      <div className="container-md projects">
        <section className="description-section border-bottom border-2 px-5">
          <h1>About Me!</h1>
          <p>
            Some long-winded description, yadda yadda yadda Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Tempore dicta assumenda
            obcaecati placeat impedit corrupti officiis perferendis!
            Voluptatibus, ut maxime quidem omnis quisquam eum odio, assumenda
            soluta, perferendis quos voluptas?
          </p>
        </section>
        {proj.map((item, idx) => (
          <Project key={idx} ref={item.ref} data={item} />
        ))}
      </div>
    </>
  );
}

export default App;
