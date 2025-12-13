import Roles from "./Roles";
import { Link } from "react-scroll";

const rolesData = [
  {
    id: 1,
    title: "Data Science & Forecasting",
    description:
      "I build forecasting and analytical models that help businesses plan demand, manage risk, and make confident decisions.",
  },
  {
    id: 2,
    title: "Data Engineering",
    description:
      "I design reliable data pipelines that eliminate manual work and ensure decision-makers always have up-to-date information.",
  },
  {
    id: 3,
    title: "Machine Learning & Artificial Intelligence",
    description:
      "I develop predictive models that anticipate outcomes, optimize performance, and reduce uncertainty.",
  },
  {
    id: 4,
    title: "Business Intelligence",
    description:
      "I create dashboards that executives and operators actually use—clear, transparent, and focused on action.",
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
