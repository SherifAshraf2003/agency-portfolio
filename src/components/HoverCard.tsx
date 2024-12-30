import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const HoverCard = ({
  props,
}: {
  props: {
    src: StaticImageData;
    mainText: string;
    subText: string;
  };
}) => {
  return (
    <CardContainer>
      <CardBody className="bg-gradient-to-t to-secondaryColor from-white relative group/card flex flex-col justify-center items-center  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl text-center font-bold text-mainColor dark:text-white"
        >
          {props.mainText}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-mainColor font-semibold text-center  max-w-sm mt-2 dark:text-neutral-300"
        >
          {props.subText}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={props.src}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default HoverCard;
