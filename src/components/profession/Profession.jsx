import Roles from "./Roles";
import { Link } from "react-scroll";

const rolesData = [
  {
    id: 1,
    title: "Data Analysis & Forecasting",
    description:
      "I analyze complex datasets to uncover patterns, trends, and opportunities. Through statistical modeling and exploratory analysis, I deliver clear insights that guide strategic decisions.",
  },
  {
    id: 2,
    title: "Data Engineering",
    description:
      "I build scalable ETL pipelines, automated workflows, and clean data structures. This ensures that insights are reliable, up-to-date, and ready for reporting or machine learning.",
  },
  {
    id: 3,
    title: "Machine Learning & Modeling",
    description:
      "I develop predictive models—from forecasting to classification—that help businesses anticipate outcomes, optimize performance, and reduce uncertainty.",
  },
  {
    id: 4,
    title: "Data Visualization & Dashboards",
    description:
      "I create intuitive, decision-focused dashboards that transform complex data into clarity. My visuals prioritize usability, transparency, and practical action.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My work combines statistical rigor with practical implementation, delivering solutions that are scalable, reliable, and aligned with real business objectives—built with software engineering best practices.
          </p>
        </div>

        <Link
          to="contact"
          smooth={true}
          duration={900}
          offset={-140}
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Get in touch!
        </Link>
      </div>

      <div>
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
