import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../ServiceList/serviceList.css";
import "../../App.css";
import ServiceDetails from "../ServiceDetails/serviceDetails";
import Footer from "../Footer/Footer";
const services = [
  {
    id: 1,
    image:
      "https://kohaclinics.com/wp-content/uploads/2020/10/Anti-Wrinkle-Injections-Anti-Wrinkle-Treatment-for-Wrinkles-Can-Make-You-Happier-Blog-Image.jpg",
    name: "Anti Wrinkle Treatment",
  },
  {
    id: 2,
    name: "Dermal Fillers",
    image: "https://www.pressensa.com/modules/ph_simpleblog/featured/3.jpg",
  },
  {
    id: 3,
    name: "Secret RF",
    image:
      "https://cdn.shopify.com/s/files/1/0300/6785/products/secret_rf_microneedling_d364b748-227a-49ba-b7bf-8bbaeb8a0a98.jpg?v=1631123745",
  },
  {
    id: 4,
    name: "HarmonyCA",
    image:
      "https://skinrenewal-f38c.kxcdn.com/uploads/media/f62c0ce3-434e-4810-9e17-02a14f8daa45/skin-renewal-harmonyca.jpg",
  },
  {
    id: 5,
    name: "Profhilo",
    image:
      "https://dermaaestheticslondon.com/wp-content/uploads/2023/02/before-after-portrait-mature-woman-retouched.jpg",
  },
  {
    id: 6,
    name: "Facials",
    image:
      "https://media.allure.com/photos/5c2e8ec54325fe2d62c0943a/1:1/w_1999,h_1999,c_limit/how-often-should-you-get-a-facial-lede.jpg",
  },
  {
    id: 7,
    name: "Sclerotherapy",
    image:
      "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/6763-sclerotherapy",
  },
  {
    id: 8,
    name: "Led",
    image:
      "https://www.realsimple.com/thmb/UOd1M0jnkDx-19hQLHar72DnU70=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/are-LED-masks-worth-cost-2000-df7f95aac7c140419b57587291e56eea.jpg",
  },
  {
    id: 9,
    name: "Fat Dissolve",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c803cdf65019fdec3abdc2f/1586781129063-V37VLVBT5P81YEE92BQ7/hourglass%2Baesthetics%2Baberdeen%2Bfat%2Bdissolving%2Bdeso%2Bface%2Bbody%2Baqualyx.jpeg",
  },
  {
    id: 10,
    name: "Growth Factors",
    image: "https://qkine.com/wp-content/uploads/2022/05/autocrine.jpg",
  },
  {
    id: 11,
    name: "Specials Package for Time clinic",
    image:
      "https://www.denverplasticsurgery.com/wp-content/uploads/2023/05/Website-Filler-Special-1024x652.jpg",
  },
  {
    id: 12,
    name: "Consulation",
    image:
      "https://img.freepik.com/premium-photo/prenatal-care-concept-happy-young-pregnant-lady-sitting-clinic-having-consulation-with-male-gynecologist_116547-52610.jpg?w=2000",
  },
];

const ServiceList = ({ onServiceClick, setPageNumber }) => {
  useEffect(() => {
    setPageNumber(1);
  }, []);
  return (
    <>
      <div className="servicesList">
        <li className="list">
          {services.map((service) => (
            <div key={service.id}>
              <Link
                to={`/service/${service.id}`}
                state={service.name}
                onClick={() => onServiceClick(service)}
              >
                <div className="service">
                  <div className="mainRow">
                    <img className="serviceImages" src={service.image} />
                    {service.name}
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </li>
      </div>
      <div className="info">
        <p className="phoneNumber">
          Not sure about consulation type?Please, call
          <span className="number"> 0203 7959063</span>
        </p>
      </div>
    </>
  );
};

export default ServiceList;
