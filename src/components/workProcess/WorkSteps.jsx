import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 ease-out duration-1000 ${
        style && style
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {/* ICON BACKGROUND */}
      <div
        className={`w-11 h-11 sm:w-18 sm:h-18 text-center center rounded-md ${
          hover ? "bg-[#000080]" : "bg-[#1E96FC33]"
        }`}
      >
        {/* ICON */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-sm:p-2 sm:w-8 sm:h-8"
        >
          <path
            d={data?.svgPath}
            fill={hover ? "#FFFFFF" : "#1E96FC"}
          />
        </svg>
      </div>

      {/* TITLE & TEXT */}
      <div className="mt-3 xs:mt-4 sm:mt-8">
        <p className="font-semibold sm:text-xl">{`${data?.id}. ${data?.title}`}</p>
        <p className="mt-3 text-[13px] sm:text-[16px] text-[#697482]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
