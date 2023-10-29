import { dir } from "i18next";
import dynamic from "next/dynamic";
import { Roboto } from "next/font/google";

const NotFound = dynamic(() => import("@/components/not-found"));

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: true,
});

const NotFoundPage = () => {
  return (
    <html lang={"en-IN"} dir={dir("EN-iN")}>
      <body className={`${roboto.className} flex flex-col justify-center`}>
        <section data-testid="rootlayout.wrapper" className="p-2">
          <NotFound />
        </section>
      </body>
    </html>
  );
};

export default NotFoundPage;
