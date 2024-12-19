import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import paymentPlan1Img from "../../public/paymentPlan1.png";
import paymentPlan2Img from "../../public/paymentPlan2.png";
import paymentPlan3Img from "../../public/paymentPlan3.png";
import check from "../../public/Check.png";
import MeetingButton from "./MeetingButton";

const PaymentPlans = () => {
  return (
    <section
      id="plans"
      className=" font-DM_Sans text-white mx-auto flex flex-col my-40"
    >
      <div className="text-center pb-14 mt:pb-28  ">
        <h1 className="md:text-5xl text-3xl font-semibold text-center">
          Payment <span className="italic text-secondaryColor">Plans</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <Card className=" group py-3 px-1 w-[310px] h-[550px] rounded-2xl hover:bg-[#4A3AFF] transition-all duration-300 hover:translate-y-[-16px] ">
          <CardHeader className="flex flex-row gap-4 justify-start pl-10 items-center ">
            <div className="h-16 w-16 flex justify-center items-center bg-[#ECEBFF] rounded-lg ">
              <Image
                className=" h-[42px] w-[42px]  "
                src={paymentPlan1Img}
                alt="payment plan 1 image"
              />
            </div>
            <div className="flex flex-col p-0 text-lg  ">
              <p className=" duration-300 group-hover:text-white/70 p-0 text-[#6F6C90] font-medium ">
                For individuals
              </p>

              <p className=" p-0 text-xl text-mainColor font-bold  duration-300  group-hover:text-white ">
                Silver
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div>
              <p className="text-[#6F6C90] duration-300 group-hover:text-white/70  ">
                Affordable solutions for getting your business online.
              </p>
            </div>
            <div className="flex  items-baseline">
              <p className="font-bold text-5xl text-[#170F49] duration-300  group-hover:text-white mb-2 ">
                $99
              </p>

              <p className="text-[#6F6C90] duration-300 group-hover:text-white/70 font-medium text-lg">
                /monthly
              </p>
            </div>
            <div>
              <h1 className="text-[#170F49] duration-300  group-hover:text-white font-bold">
                What’s included
              </h1>
            </div>
            <div className="flex gap-3 flex-col">
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF]  duration-300  group-hover:bg-white">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  Fully responsive website
                </p>
              </div>
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF]  duration-300  group-hover:bg-white">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  Basic SEO optimization
                </p>
              </div>
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF]  duration-300  group-hover:bg-white">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  2 weeks of post-launch support
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=" group py-3 px-1 w-[310px] h-[550px] rounded-2xl hover:bg-[#4A3AFF] transition-all duration-300 hover:translate-y-[-16px] ">
          <div className="absolute">
            <div className=" bg-[#4A3AFF] text-white text-[11px] rounded-lg py-2 px-3 relative left-[230px] top-2 transition group-hover:bg-white/30 duration-300  ">
              Popular
            </div>
          </div>
          <CardHeader className="flex flex-row gap-4 justify-start pl-10 items-center ">
            <div className=" flex justify-center items-center h-16 w-16 bg-[#ECEBFF] rounded-lg ">
              <Image
                width={42}
                height={42}
                src={paymentPlan2Img}
                alt="payment plan 2 image"
              />
            </div>
            <div className="flex flex-col p-0  ">
              <p className=" duration-300 group-hover:text-white/70  p-0 text-[#6F6C90] font-medium text-lg ">
                For startups
              </p>

              <p className=" p-0 text-xl group-hover:text-white duration-300 text-mainColor font-bold ">
                Gold
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div>
              <p className="text-[#6F6C90] duration-300 group-hover:text-white/70 ">
                Advanced tools for growing businesses.
              </p>
            </div>
            <div className="flex gap-2 items-baseline">
              <p className="font-bold text-5xl text-[#170F49] duration-300 group-hover:text-white ">
                $199
              </p>
              <p className="text-[#6F6C90] font-medium text-lg duration-300 group-hover:text-white/70 ">
                /monthly
              </p>
            </div>
            <div>
              <h1 className="text-[#170F49] duration-300 group-hover:text-white/70 font-bold">
                What’s included
              </h1>
            </div>
            <div className="flex gap-3 flex-col">
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full duration-300  group-hover:bg-white bg-[#4A3AFF]">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  Fully responsive website
                </p>
              </div>
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF] duration-300  group-hover:bg-white ">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49]  duration-300 group-hover:text-white/70 ">
                  Advanced SEO Optimization
                </p>
              </div>
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF] duration-300  group-hover:bg-white">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  Customized design templates
                </p>
              </div>
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF] duration-300  group-hover:bg-white">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  Website analytics
                </p>
              </div>
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF] duration-300  group-hover:bg-white">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  1 month of post-launch support
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=" group py-3 px-1 w-[315px] h-[550px] rounded-2xl hover:bg-[#4A3AFF] transition-all duration-300 hover:translate-y-[-16px] ">
          <CardHeader className="flex flex-row gap-4 justify-start pl-10 items-center ">
            <div className=" flex justify-center items-center h-16 w-16 bg-[#ECEBFF] rounded-lg ">
              <Image
                width={42}
                height={42}
                src={paymentPlan3Img}
                alt="payment plan 3 image"
              />
            </div>
            <div className="flex flex-col p-0  ">
              <p className=" duration-300 group-hover:text-white/70 p-0 text-[#6F6C90] font-medium text-lg ">
                For startups
              </p>

              <p className=" p-0 text-xl text-mainColor font-bold  duration-300  group-hover:text-white ">
                Diamond
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 ">
            <div>
              <p className="text-[#6F6C90] duration-300 group-hover:text-white/70  ">
                Comprehensive solutions for scaling your business with the power
                of Ai.
              </p>
            </div>
            <div className="flex gap-2 items-baseline">
              <p className="font-bold text-5xl duration-300  group-hover:text-white text-[#170F49]">
                $499
              </p>
              <p className="text-[#6F6C90] duration-300 group-hover:text-white/70 font-medium text-lg ">
                /monthly
              </p>
            </div>
            <div>
              <h1 className="text-[#170F49] duration-300  group-hover:text-white font-bold">
                What’s included
              </h1>
            </div>
            <div className="flex gap-3 flex-col">
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full duration-300  group-hover:bg-white bg-[#4A3AFF]">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  Fully responsive website
                </p>
              </div>
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF] duration-300  group-hover:bg-white ">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49]  duration-300 group-hover:text-white/70 ">
                  Premium SEO Optimization
                </p>
              </div>
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF] duration-300  group-hover:bg-white">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  Customized design templates
                </p>
              </div>
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF] duration-300  group-hover:bg-white">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  Website analytics
                </p>
              </div>
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF] duration-300  group-hover:bg-white">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  3 months of post-launch support
                </p>
              </div>
              <div className="flex gap-3">
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF] duration-300  group-hover:bg-white">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 w-full ">
                  Any AI integration feature you choose from what we offer
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center items-center mt-20">
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

export default PaymentPlans;
