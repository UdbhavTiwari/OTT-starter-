import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsiveBreakpoints } from "./config";
import { CarouselItem } from "./CarouselItem";

export const ContentCarousel = ({ items, renderItem }) => {
  return (
    <Carousel responsive={responsiveBreakpoints}>
      {items.map((item) => {
        return <CarouselItem item={item} render={renderItem} />;
      })}
    </Carousel>
  );
};
