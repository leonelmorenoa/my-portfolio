import Marquee from "react-fast-marquee";

const commonIconClass = "text-3xl sm:text-4xl md:text-5xl";

const techStack = [
  { name: "Python", className: "devicon-python-plain" },
  { name: "PostgreSQL", className: "devicon-postgresql-plain" },
  { name: "GitHub", className: "devicon-github-original" },
  { name: "Docker", className: "devicon-docker-plain" },
  { name: "AWS", className: "devicon-amazonwebservices-plain" },
  {name:"fastAPI", className:"devicon-fastapi-plain-wordmark"},
  {name:"github actions", className:"devicon-githubactions-plain"},
  {name:"Jupyter", className:"devicon-jupyter-plain"},
  {name:"kaggle", className:"devicon-kaggle-plain"},
  {name:"pltotly", className:"devicon-plotly-plain"},
  {name:"pytest", className:"devicon-pytest-plain"},
  {name:"r language", className:"devicon-r-plain"},,
  {name:"streamlit", className:"devicon-streamlit-plain"},
  {name:"vscode", className:"devicon-vscode-plain"},
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        {/* Puedes cambiar el título si quieres */}
        <p className="section-title mb-6">Tools & Technologies</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
        My work is supported by a modern and powerful set of technologies. These are some of the tools behind the results:
        </p>
      </div>

      <Marquee pauseOnHover={true} speed={80} className="">
        <div className="flex items-center pt-4 md:pt-10">
          {techStack.map((tool, index) => (
            <span
              className="ps-6 sm:ps-10 md:ps-16 flex flex-col items-center"
              key={index}
            >
              <i
                className={`${tool.className} ${commonIconClass}`}
                aria-label={tool.name}
                title={tool.name}
              ></i>
              <span className="mt-2 text-xs sm:text-sm text-soft-dark">
                {tool.name}
              </span>
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClients;
