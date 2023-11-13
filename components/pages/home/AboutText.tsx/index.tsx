import Link from "next/link";
import { TFunction } from "i18next";
import About_Img from "@/assests/images/side-1.jpg";
import Image from "next/image";
import { Locale } from "@/i18n/settings";
import styles from "./abouttext.module.scss";

type fc = {
  t: TFunction<any, string>;
  lang: Locale;
};

const About_Text: React.FC<fc> = ({ lang }) => {
  return (
    <div className={styles.About}>
      <div className={styles.About_container}>
        <p className={`${styles.About_container_Text} bg-primary`}>About Us</p>
        <p className="About_container_Text Text">
          Royal Security Servies is one of the best{" "}
          <span>Security Agencies </span>
          in India and one of the leading{" "}
          <span>Integrated Facility Management </span>
          Services companies in India.
        </p>
        <p className={`${styles.About_container_Text}`}>
          RSS Group is an innovative and customer-focused organization that
          provides fully Integrated Facility Management Services by bringing
          together people, place, process, and technology at an optimal cost.
        </p>
        <Link href={`/${lang}/services`} className="btn-primary">
          OUR SERVICES
        </Link>
      </div>
      <div className="About_container">
        <Image
          src={About_Img}
          alt="about"
          aria-label="about image"
          title="About Us"
        />
      </div>
    </div>
  );
};

export default About_Text;
