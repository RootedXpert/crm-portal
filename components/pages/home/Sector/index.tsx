import Image from "next/image";
import sector1 from "@/assests/images/SECTORS-1.jpg";
import sector2 from "@/assests/images/SECTORS-2.jpg";
import sector3 from "@/assests/images/SECTORS-3.jpg";
import sector4 from "@/assests/images/SECTORS-4.jpg";
import sector5 from "@/assests/images/SECTORS-5.jpg";
import sector6 from "@/assests/images/SECTORS-6.jpg";
import sector7 from "@/assests/images/SECTORS-7.jpg";
import sector8 from "@/assests/images/SECTORS-8.jpg";
import styles from "./sector.module.scss";
import sector from "@/assests/images/sector-BG.jpg";

const Sector = () => {
  const Sect = [
    {
      id: 1,
      text: "Information Technology & BPO",
      image: sector1,
    },
    {
      id: 2,
      text: "Banking & Financial Institutions",
      image: sector2,
    },
    {
      id: 3,
      text: "Residential Gated Communities",
      image: sector3,
    },
    {
      id: 4,
      text: "Hotels & Hospitals",
      image: sector4,
    },
    {
      id: 5,
      text: "Malls & Office Establishments",
      image: sector5,
    },
    {
      id: 6,
      text: "Institutions & Clubs",
      image: sector6,
    },
    {
      id: 7,
      text: "Manufacturing Units",
      image: sector7,
    },
    {
      id: 8,
      text: "Retail & Logistics,",
      image: sector8,
    },
  ];
  return (
    <div className={styles.Sector}>
      <Image src={sector} alt="sector" />
      <div className={styles.Sector_Title}>SECTORS</div>
      <div className={styles.Sector_Card}>
        {Sect.map((value) => {
          return (
            <div className={styles.Sector_Card_Item} key={value.id}>
              <Image
                className={styles.Sector_Card_image}
                src={value.image}
                alt={value.text}
              />
              <p
                className={`${styles.Sector_Card_Item_Text} ${styles.Sector__card__Text}`}
                aria-label={value.text}
                title={value.text}
              >
                {value.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sector;
