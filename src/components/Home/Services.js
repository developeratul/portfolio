import SectionTitle from "../SectionTitle";
import services from "../../data/services";

const Services = () => {
  return (
    <section className="services_section" id="services">
      <div className="container">
        <SectionTitle title="Services" desc="Some of my Services I provide" />

        <div className="services_wrapper">
          {services.map((service, index) => {
            return (
              <div
                className="single_service"
                key={index}
                data-aos={service.animation}
              >
                <div className="service_img">
                  <img
                    width="200px"
                    height="200px"
                    src={service.img}
                    alt={service.desc}
                  />
                </div>
                <div className="service_desc">
                  <h2>{service.title}</h2>
                  <p>{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
