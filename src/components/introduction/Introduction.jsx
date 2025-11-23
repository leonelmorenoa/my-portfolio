import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Data Experience",
    description: "3 Y.",
  },
  {
    id: 2,
    title: "Successful Projects",
    description: "30+",
  },
  {
    id: 3,
    title: "Fully Global Remote Work",
    description: "7 Y.",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          
          {/* 🔥 Nuevo Título */}
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            <span className="text-nowrap shrink-0 inline-block w-full">
              Actionable Insights
            </span>
            <span className="text-nowrap shrink-0 inline-block w-full">
              for Real Business Impact
            </span>
          </p>

          {/* 🔥 Puedes personalizar este párrafo luego */}
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
          I turn raw, scattered data into<span className="bg-[#1E96FC33] text-[#000080] px-2 py-0.5 rounded-lg"> Data Systems</span>
          that empower <span className="bg-[#16ed48] text-[#000080] px-2 py-0.5 rounded-lg">better decisions </span> — helping organizations act faster, <span className="bg-[#FFBF00] text-[#000080] px-2 py-0.5 rounded-lg"> reduce uncertainty</span>, 
          and unlock measurable business outcomes.
          </p>

          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:example@gmail.com"
            >
              Get in Touch
            </a>
          </p>
        </div>

        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative"
      >
        <img
          className="shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl"
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};


export default Introduction;
