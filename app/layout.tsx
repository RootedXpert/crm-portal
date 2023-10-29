import "@/app/globals.scss";
import { Metadata } from "next";

type layout = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "RootedXpert CRM",
  description: "CRM created by RootedXpert",
};

const RootLayout = ({ children }: layout) => {
  return <>{children}</>;
};

export default RootLayout;
