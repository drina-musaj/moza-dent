
import { motion } from 'framer-motion';
import background5Dark from '../../assets/bg5-d.png';
import icon1 from '../../assets/icon1-whitening.png';
import icon2 from '../../assets/icon2-extraction.png';
import icon3 from '../../assets/icon3-invisalign.png';
import icon4 from '../../assets/icon4-filling.png';
import icon5 from '../../assets/icon5-zirconia.png';
import icon6 from '../../assets/icon6-more.png';

const services = [
  { id: 1, icon: icon1, title: 'Teeth Whitening' },
  { id: 2, icon: icon2, title: 'Tooth Extraction' },
  { id: 3, icon: icon3, title: 'Clear Aligners' },
  { id: 4, icon: icon4, title: 'Dental Filling' },
  { id: 5, icon: icon5, title: 'Zirconia Crown' },
  { id: 6, icon: icon6, title: 'More' },
];

const H_Services = () => (
  <section
    className="px-4 relative bg-cover bg-center bg-no-repeat text-white py-20 min-h-screen flex flex-col items-center"
    style={{ backgroundImage: `url(${background5Dark})` }}
  >
    <h1 className="text-6xl font-peachi font-bold mb-24 mt-14">Services</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className="group p-6 bg-white text-[#074a65] rounded-lg shadow-lg flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
        >
          <img
            src={service.icon}
            alt={service.title}
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-xl font-poppins font-semibold">{service.title}</h2>
        </motion.div>
      ))}
    </div>
  </section>
);

export default H_Services;
