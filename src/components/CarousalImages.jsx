import { Carousel } from "@material-tailwind/react";

export function CarouselImages({images}) {
  return (
    <Carousel loop={true} autoplay={true} className="rounded-xl">
      {
        images?.map((image, index) => <img
          src={image}
          key={index}
          alt="image 3"
          className="h-96 w-full object-cover object-center"
        />)
      }
    </Carousel>
  );
}