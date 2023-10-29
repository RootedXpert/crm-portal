import Link from "next/link";
import Image from "next/image";
import Image_404 from "@/assests/images/404.png";
import style from "./notFound.module.scss";

const NotFound = () => {
  return (
    <section data-testid="componenet.notfound">
      <div className={style.container}>
        <div className={style.container__Box}>
          <p className={style.container__Box__Text}>We couldnt find the page</p>
          <p className={style.container__Box__Title}>
            Maybe you can find what you need here?
          </p>
          <Link href="/" className="btn-primary">
            Home
          </Link>
        </div>
        <div className={style.container__Box__Image}>
          <Image src={Image_404} alt="not found" aria-label="not found" />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
