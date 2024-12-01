import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import paymentPlan1Img from "../../public/paymentPlan1.png";
import paymentPlan2Img from "../../public/paymentPlan2.png";
import paymentPlan3Img from "../../public/paymentPlan3.png";
import check from "../../public/Check.png";
import { Button } from "./ui/button";

const PaymentPlans = () => {
  return (
    <div className=" font-DM_Sans text-white mx-auto flex flex-col my-72">
      <div className="text-center pb-28  ">
        <h1 className="text-5xl font-semibold text-center">
          Payment <span className="italic text-secondaryColor">Plans</span>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-10">
        <Card className=" group py-3 px-1 w-[310px] rounded-2xl hover:bg-[#4A3AFF] transition-all duration-300 hover:translate-y-[-16px] ">
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
                Basic
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div>
              <p className="text-[#6F6C90] duration-300 group-hover:text-white/70  ">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur.
              </p>
            </div>
            <div className="flex gap-2 items-baseline">
              <p className="font-bold text-5xl text-[#170F49] duration-300  group-hover:text-white ">
                $99
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
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF]  duration-300  group-hover:bg-white">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  All analytics features
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
                  Up to 250,000 tracked visits
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
                  Normal support
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
                  Up to 3 team members
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Button className="bg-[#4A3AFF] duration-300 group-hover:bg-white group-hover:text-[#4A3AFF] font-semibold py-6 px-12 text-lg rounded-full active:scale-90 transition-all ">
              Get started
            </Button>
          </CardFooter>
        </Card>
        <Card className=" group py-3 px-1 w-[310px] rounded-2xl hover:bg-[#4A3AFF] transition-all duration-300 hover:translate-y-[-16px] ">
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
                Pro
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div>
              <p className="text-[#6F6C90] duration-300 group-hover:text-white/70 ">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur.
              </p>
            </div>
            <div className="flex gap-2 items-baseline">
              <p className="font-bold text-5xl text-[#170F49] duration-300 group-hover:text-white ">
                $99
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
                  All analytics features
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
                  Up to 1,000,000 tracked visits
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
                  Premium support
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
                  Up to 10 team members
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Button className="bg-[#4A3AFF] duration-300 group-hover:bg-white group-hover:text-[#4A3AFF] font-semibold py-6 px-12 text-lg rounded-full active:scale-90 transition-all ">
              Get started
            </Button>
          </CardFooter>
        </Card>
        <Card className=" group py-3 px-1 w-[310px] rounded-2xl hover:bg-[#4A3AFF] transition-all duration-300 hover:translate-y-[-16px] ">
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
                For big companies
              </p>

              <p className=" p-0 text-xl text-mainColor font-bold  duration-300  group-hover:text-white ">
                Enterprise
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div>
              <p className="text-[#6F6C90] duration-300 group-hover:text-white/70  ">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur.
              </p>
            </div>
            <div className="flex gap-2 items-baseline">
              <p className="font-bold text-5xl duration-300  group-hover:text-white text-[#170F49]">
                $99
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
                <div className="h-[21px] w-[21px] flex justify-center items-center rounded-full bg-[#4A3AFF]  duration-300  group-hover:bg-white">
                  <Image
                    className="filter group-hover:invert duration-300"
                    width={12}
                    src={check}
                    alt="check icon"
                  />
                </div>
                <p className="text-[#170F49] duration-300 group-hover:text-white/70 ">
                  All analytics features
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
                  Up to 5,000,000 tracked visits
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
                  Dedicated support
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
                  Up to 50 team members
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Button className="bg-[#4A3AFF] duration-300 group-hover:bg-white group-hover:text-[#4A3AFF] font-semibold py-6 px-12 text-lg rounded-full active:scale-90 transition-all ">
              Get started
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PaymentPlans;
