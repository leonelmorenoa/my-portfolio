import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Leonel turned our scattered data into a clear decision-making system.",
    quote: `We were struggling with disconnected reports and manual Excel files. Leonel designed a unified data model, automated our pipelines, and built dashboards that our non-technical team actually uses. His mix of business thinking and technical skills made a real difference in how we plan and forecast.`,
    name: "Maria Gonzalez",
    designation: "Head of Operations, E-commerce Brand",
  },
  {
    message:
      "His forecasting and analytics work helped us plan with confidence.",
    quote: `Leonel built demand forecasting models and pricing analyses that gave us a much clearer view of our revenue and risk. He explained every step in plain language, documented everything clearly, and always connected the numbers back to business impact. It felt like working with a partner, not just a developer.`,
    name: "James Miller",
    designation: "CEO, Real Estate Investment Firm",
  },
  {
    message:
      "Leonel built data products that our team trusts and uses every day.",
    quote: `From data cleaning and modeling to dashboards and documentation, Leonel followed solid software engineering practices and kept everything maintainable. The systems he delivered reduced manual work, improved our reporting accuracy, and gave leadership real-time visibility into the business.`,
    name: "Daniel Carter",
    designation: "Product Manager, SaaS Startup",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
