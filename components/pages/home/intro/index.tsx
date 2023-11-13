import Home_Image from "@/assests/images/home-page-secutiy-banner.jpg";
import Image from "next/image";
import styles from "./intro.module.scss";
import { TFunction } from "i18next";

type fc = {
  t: TFunction<any, string>;
};
const Intro: React.FC<fc> = async ({ t }) => {
  return (
    <section className={styles.Intro_Home} data-testid={"pages.home.intro"}>
      <div className={styles.Intro_Home__Box}>
        <div className={styles.Intro_Home__Box__Card}>
          <p
            className={styles.Intro_Home__Box__Card__Text}
            data-testid={"pages.home.intro.title"}
          >
            {t("page.intro.title")}
            <br />
            <span className="Heading" aria-label="Royal Security services">
              {t("page.intro.description")}
            </span>
          </p>
          <Image
            src={Home_Image}
            alt="home"
            className="Intro_Home__Box__Card__Image"
            aria-label="Security Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
