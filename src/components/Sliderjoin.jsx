import React from "react";
import Slider from "react-slick";
import image from "../images/Ellipse 45.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliderjoin() {
  const items = [
    {
      id: 1,
      image: image,
      name: "Steffenina Seth",
      subname: "pankaj pankaj",
      rating: 3.8,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, atque?",
    },
    {
      id: 1,
      image: image,
      name: "Steffenina Seth",
      subname: "pankaj pankaj",
      rating: 3.8,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, atque?",
    },
    {
      id: 1,
      image: image,
      name: "Steffenina Seth",
      subname: "pankaj pankaj",
      rating: 3.8,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, atque?",
    },
    {
      id: 1,
      image: image,
      name: "Steffenina Seth",
      subname: "pankaj pankaj",
      rating: 3.8,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, atque?",
    },
    {
      id: 1,
      image: image,
      name: "Steffenina Seth",
      subname: "pankaj pankaj",
      rating: 3.8,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, atque?",
    },
    {
      id: 1,
      image: image,
      name: "Steffenina Seth",
      subname: "pankaj pankaj",
      rating: 3.8,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, atque?",
    },
    {
      id: 1,
      image: image,
      name: "Steffenina Seth",
      subname: "pankaj pankaj",
      rating: 3.8,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, atque?",
    },
    {
      id: 1,
      image: image,
      name: "Steffenina Seth",
      subname: "pankaj pankaj",
      rating: 3.8,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, atque?",
    },
    {
      id: 1,
      image: image,
      name: "Steffenina Seth",
      subname: "pankaj pankaj",
      rating: 3.8,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, atque?",
    },
    {
      id: 1,
      image: image,
      name: "Steffenina Seth",
      subname: "pankaj pankaj",
      rating: 3.8,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, atque?",
    },

    // ... (other items)
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mt-20">
        <div className="content">
          <p className="text-3xl flex items-center justify-center font-medium">Check Out</p>
          <h1 className="text-4xl flex items-center justify-center font-semibold">Recent Review</h1>
        </div>
        <div className="slider-container mt-10 h-full">
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.id} className="px-2">
                <div className="card w-full h-[157.92px] p-5 border shadow-2xl transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="img flex justify-between">
                    <div className="flex">
                      <img src={item.image} alt={item.name} className="w-[42.64px] h-[42.64px] mr-2" />
                      <p className="text-lg font-medium mt-2">{item.name}</p>
                    </div>
                    <div className="mt-2">{item.rating}</div>
                  </div>
                  <div className="lorem mt-5">
                    <p className="text-sm font-light">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Sliderjoin;
