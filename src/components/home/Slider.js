import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const items = [
    { title: "Wedding Reception", description: "Make your dream wedding a reality with our elegant and customizable reception packages. From intimate gatherings to grand celebrations, we ensure a memorable experience for you and your guests." },
    { title: "Birthday Parties", description: "Celebrate your special day with us! Whether it's a milestone birthday or a themed bash, our versatile venues and expert event planners will make your birthday party unforgettable." },
    { title: "Anniversary Events", description: "Toast to love and commitment with an anniversary event that reflects your journey together. Our dedicated team will help you create an atmosphere of romance and nostalgia." },
    { title: "Conferences & Workshops", description: "Host productive and engaging conferences and workshops in our modern facilities. With state-of-the-art technology and customizable setups, we ensure a seamless experience for presenters and attendees alike." },
    { title: "Puberty Ceremony", description: "Mark this important milestone with a traditional puberty ceremony that honors cultural customs and family traditions. Our team will assist you in planning a meaningful and respectful event." },
    { title: "Get-Together", description: "Gather friends, family, and colleagues for a casual get-together filled with laughter and camaraderie. Our versatile spaces and customizable menus ensure a fun and relaxed atmosphere for all." },
    { title: "Exhibitions", description: "Showcase your products or services in style with our spacious exhibition venues. Whether it's a trade show, art exhibition, or product launch, we provide the perfect platform for your event to shine." },
  ];

  return (
    <div className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="owl-carousel testimonial-carousel py-5">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className="text-center">
                <h1 className="text-white">{item.title}</h1>
                <p className="text-white">{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
