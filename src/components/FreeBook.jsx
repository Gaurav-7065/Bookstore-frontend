import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderLib from "react-slick";
const Slider = SliderLib.default;
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const FreeBook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://book-store-backend-sigma.vercel.app/book");
      const data = res.data.filter((list) => list.price === 0);
      setBook(data);
    }
    getData();

  }, [])
  var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
      }
    }
  ]
};
  return <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div>
        <h1 className="font-medium text-xl pb-2">FreeBook</h1>
        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae eos pariatur ducimus temporibus labore? Corrupti.</p>
      </div>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {book.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </Slider>
      </div>
    </div>
  </>

}
export default FreeBook;