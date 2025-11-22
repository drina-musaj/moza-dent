import React from 'react';
import background4 from '../../assets/bg4.png'

const Location = () => (
  <section
    className="relative bg-cover bg-center bg-no-repeat text-white py-20 min-h-screen flex items-center justify-center"
    style={{ backgroundImage: `url(${background4})` }}
  >
    <div className="max-w-8xl mx-auto px-4 md:flex md:items-center md:space-x-12">
      <div
        className="md:w-1/2 w-full h-[50vh] md:h-screen"
        style={{ minHeight: '400px' }}
      >
        <iframe
          title="Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2090.168912349862!2d19.825638762831044!3d41.322322454120915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1737318185639!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="md:w-1/2 w-full mt-8 md:mt-0 flex flex-col justify-center">
        <h2 className="text-5xl md:text-6xl font-peachi font-bold text-[#074a65] mb-6">
          In the Heart of Tirana,
        </h2>
        <h2 className="text-5xl md:text-6xl font-peachi font-bold text-[#074a65] mb-6">
          Close to You
        </h2>
        <p className="text-lg font-poppins text-[#074a65] mb-4 w-2/3">
          Our clinic is nestled in a prime spot in the heart of Tirana, easily accessible from all major areas. Whether you’re driving, walking, or taking public transportation, getting to us is always a breeze.
        </p>
        <p className="text-lg font-poppins text-[#074a65] w-2/3">
          Surrounded by cafes, shops, and beautiful sights, your trip to Moza Dent can be more than just a dental appointment—it can be part of a delightful day out.
        </p>
      </div>
    </div>
  </section>
);

export default Location;
