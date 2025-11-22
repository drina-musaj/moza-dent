import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import background3 from '../../assets/bg3.png';


const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "I’ve been visiting Moza for over 10 years now. I wouldn’t trust anyone else with my dental care. Their expertise and warmth make every visit a pleasant experience.",
      author: '— Enes B',
    },
    {
      quote:
        "From routine cleanings to more complex procedures, Moza Dent has always been there for my entire family. The staff is friendly, and the location is super convenient.",
      author: '— Erion T.',
    },
    {
      quote:
        "I was terrified of dentists, but Dr. Moza changed that for me. They made sure I was comfortable every step of the way. I’m so happy with my smile now!",
      author: '— Arber B.',
    },
    {
      quote:
        "Dr. Moza’s clinic is truly amazing. They use the latest technology, and the whole team is so kind and professional. I recommend them wholeheartedly.",
      author: '— Ana K.',
    },
  ];

  // React Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 min-h-screen flex-col items-center justify-center"
      style={{ backgroundImage: `url(${background3})` }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-peachi font-bold mb-40 text-[#074a65]">
          Real Smiles. Real Stories.
        </h1>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="p-10 bg-[#eff6f7] rounded-xl shadow-lg max-w-lg mx-auto text-[#074a65]">
                <p className="text-lg font-poppins">{testimonial.quote}</p>
                <h3 className="text-xl font-bold mt-4 text-[#2374AB]">
                  {testimonial.author}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;