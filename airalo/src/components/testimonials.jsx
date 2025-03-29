import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import "../assets/styles/testimonialsStyle.css";

// Star rating component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg key={i} width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id={`star-gradient-${i}`}>
            <stop stopColor="#FBB034" offset="0%" />
            <stop stopColor="#FFCC00" offset="100%" />
          </linearGradient>
        </defs>
        <path 
          d="M15.9307 18.8545C16.2578 18.6105 16.3289 18.2062 16.1369 17.6556L14.6795 13.3965L18.4119 10.7685C18.8882 10.4339 19.0944 10.0645 18.9594 9.67413C18.8243 9.29074 18.4475 9.10254 17.8574 9.10951L13.2789 9.13739L11.8855 4.85739C11.7077 4.29974 11.4163 4 10.9968 4C10.5845 4 10.293 4.29974 10.1081 4.85739L8.71468 9.13739L4.13622 9.10951C3.54614 9.10254 3.17645 9.29074 3.04137 9.67413C2.9063 10.0645 3.10536 10.4339 3.5888 10.7685L7.32124 13.3965L5.8567 17.6556C5.66475 18.2062 5.73584 18.6105 6.06998 18.8545C6.40412 19.1055 6.81647 19.0218 7.29991 18.6802L10.9968 16.0174L14.6937 18.6802C15.1771 19.0218 15.5966 19.1055 15.9307 18.8545Z" 
          fill={`url(#star-gradient-${i})`} 
        />
      </svg>
    );
  }
  return <div className="rating-stars">{stars}</div>;
};

// Country flag component
const CountryFlag = ({ country, flagUrl }) => {
  return (
    <div className="country-flag">
      <img src={flagUrl} alt={country} width="29" height="21.75" />
      <span>{country}</span>
    </div>
  );
};

// Testimonial card component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="card-header">
        <div className="header-left">
          <StarRating rating={testimonial.rating} />
          <CountryFlag country={testimonial.country} flagUrl={testimonial.flagUrl} />
        </div>
        <div className="header-right">
          <p>by {testimonial.author}</p>
        </div>
      </div>
      <div className="card-body">
        <h3>{testimonial.title}</h3>
        <p>{testimonial.text}</p>
      </div>
    </div>
  );
};

export default function Testimonials() {
    const testimonials = [
        {
          id: 1,
          title: "Great service",
          text: "I have used Airado several times for 2 years and am super satisfied with the service and product. Easy to order and easy to install. Now also easy to get info about data usage and other service elements. It's super practical to have the app to just order when I need it. Bravo!",
          author: "The Best SEN",
          country: "Norway",
          flagUrl: "https://cdn.airalo.com/images/2ff410ea-efe4-4bec-86f5-b68fdca26c97.png",
          rating: 5
        },
        {
          id: 2,
          title: "Excellent Product",
          text: "Another satisfied customer review would go here with similar structure. The carousel will automatically rotate through all the reviews.",
          author: "Happy Customer",
          country: "Germany",
          flagUrl: "https://cdn.airalo.com/images/9ca59255-4cf9-4f8b-8903-4f8ea02707b4.png",
          rating: 5
        },
        {
            id: 3,
            title: "Great Service",
            text: "I had an amazing experience with this product. The customer support was also very helpful and responsive.",
            author: "Satisfied User",
            country: "France",
            flagUrl: "https://cdn.airalo.com/images/9753dedb-d495-47cf-b6e4-82e555564743.png",
            rating: 5
        },
        {
            id: 4,
            title: "Highly Recommend",
            text: "This is by far the best purchase I’ve made this year. The quality is outstanding, and the features are excellent!",
            author: "Tech Enthusiast",
            country: "USA",
            flagUrl: "https://cdn.airalo.com/images/600de234-ec12-4e1f-b793-c70860e4545a.png",
            rating: 5
        },
        {
            id: 5,
            title: "Good Value for Money",
            text: "The price is very reasonable for what you get. I’m happy with my decision and will definitely buy again.",
            author: "Budget Shopper",
            country: "Canada",
            flagUrl: "https://cdn.airalo.com/images/315128d1-0671-4648-b13d-bf9614cd0a15.png",
            rating: 4
        },
        {
            id: 6,
            title: "Exceeded Expectations",
            text: "I wasn’t expecting such great performance, but this product completely exceeded my expectations!",
            author: "Surprised Customer",
            country: "Australia",
            flagUrl: "https://cdn.airalo.com/images/26c25fca-bce9-4709-aae6-67cfb215f015.png",
            rating: 5
        }
        
        // Add more testimonials as needed
      ];

  return (
    <div className="testimonials-container">
      <h3 className="text-center">Here's What Our Customers Have to Say</h3>
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={-100}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="testimonial-slide">
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
        
        <div className="swiper-button-prev">
          <GrFormPrevious className="carousel-control" />
        </div>
        <div className="swiper-button-next">
          <MdNavigateNext className="carousel-control" />
        </div>
      </Swiper>
    </div>
  );
}
