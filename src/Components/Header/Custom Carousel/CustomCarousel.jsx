import Carousel from "react-bootstrap/Carousel";

const CustomCarousel = () => {
  const carousleData = [
    {
      CarouselImage:
        "https://wallpaperaccess.com/full/2483952.png",
    },
    {
      CarouselImage:
        "https://visuallightbox.com/content/data/upload/2018/06/ampslider-6.jpg",
    },
    {
      CarouselImage:
        "https://www.freshrelevance.com/og_images/Opengraph_new_feature_banner_carousel-3231-1616691234.png",
    },
    
  ];
  return (
    <Carousel>
      {carousleData.map((item) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.CarouselImage}
              alt=""
              width="100px"
              height="600px"
            />
            
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CustomCarousel;
