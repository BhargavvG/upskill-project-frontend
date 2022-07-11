
import React from 'react'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };

   const images = [
    'https://freerangestock.com/thumbnail/137610/lonely-man-under-night-sky--starry-sky-over-the-horizon--conte.jpg',
    'https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Mountain-Landscape-Simple-Nature-Background-Image.jpg',
    'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    'https://cdnb.artstation.com/p/marketplace/printed_product_covers/000/072/333/art_print_big/file.jpg?1616419070',
    'https://freerangestock.com/thumbnail/137610/lonely-man-under-night-sky--starry-sky-over-the-horizon--conte.jpg',
    'https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Mountain-Landscape-Simple-Nature-Background-Image.jpg',
    'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    'https://cdnb.artstation.com/p/marketplace/printed_product_covers/000/072/333/art_print_big/file.jpg?1616419070',
  ]

  return (
    <div className="w-full max-w-[800px] mx-auto my-6 text-slate-700">
        <Slider {...settings}>
        {images.map((item, index) => (
          <div className="w-full h-[600px]">
              <img
                key={index}
                src={item}
                className={`!min-w-[inherit] !max-w-[inherit] !w-[inherit] h-full object-cover object-center`}
                alt=""
                loading="lazy"
              />
              </div>
            ))}
        </Slider>
    </div>
  )
}
