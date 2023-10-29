import Image from "next/image";

import Facebook from "@/assests/images/icon-social-fb.svg";
import Twitter from "@/assests/images/icon-social-twitter.svg";
import Instagram from "@/assests/images/icon-social-instagram.svg";

type styles = {
  readonly [key: string]: string;
};

type fc = {
  styles: styles;
};

const socialLinks = [
  {
    href: "https://twitter.com/Elavon",
    alt: "twitter",
    src: Twitter,
  },
  {
    href: "https://facebook.com/Elavon",
    alt: "facebook",
    src: Facebook,
  },

  {
    href: "https://instagram.com/Elavon",
    alt: "instagram",
    src: Instagram,
  },
];

const SocialLinks: React.FC<fc> = ({ styles }) => {
  return (
    <div className={styles.brand_row} data-testid="navigation.footer.row">
      <div className={styles.brand_row_social}>
        {socialLinks.map((socialLink) => {
          return (
            <a
              className={styles.brand_row_social_Link}
              href={socialLink.href}
              key={socialLink.alt}
            >
              <Image
                src={socialLink.src}
                alt={socialLink.alt}
                className={styles.brand_row_social_Link_Image}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
