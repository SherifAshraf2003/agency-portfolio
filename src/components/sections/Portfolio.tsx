"use client";
import MeetingButton from "../MeetingButton";
import HoverCard from "../HoverCard";
import data from "../../lib/PortfolioData";

const Portfolio = () => {
  return (
    <section
      id="portfolioContainer1"
      className="text-white w-fit mx-auto h-fit flex justify-center items-center flex-col"
    >
      <h1 className="md:text-5xl text-3xl font-semibold text-center">
        Our <span className="text-secondaryColor italic">Portfolio</span>
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap gap-20 justify-center items-center mt-20">
        {data.map((item) => (
          <HoverCard
            key={item.mainText}
            props={{
              src: item.src,
              mainText: item.mainText,
              subText: item.subText,
            }}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-16">
        <MeetingButton
          id="portfolioButton"
          className="bg-secondaryColor mt-5 text-xl md:text-2xl py-7 px-9 rounded-xl hover:bg-white hover:text-secondaryColor w-fit mx-auto "
        >
          Get Started
        </MeetingButton>
      </div>
    </section>
  );
};

export default Portfolio;
