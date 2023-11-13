import Security from "@/assests/images/icons8-security-aes-64.png";
import Managmanet from "@/assests/images/icons8-hospital-facility-64.png";
import Housekeeping from "@/assests/images/icons8-housekeeping-66.png";
import Image from "next/image";
const Vertical = () => {
  return (
    <div className="Vertical">
      <p className="Vertical_Title Title">TYPE OF SERVICES WE HANDLE</p>
      <div className="Vertical_card">
        <Image
          src={Security}
          className="Vertical_card__Image"
          alt="Security Services"
        />
        <p className="Vertical_card__Text Text">Security Services</p>
      </div>
      <div className="Vertical_card">
        <Image
          src={Managmanet}
          className="Vertical_card__Image"
          alt="Facility Management Services"
        />
        <p className="Vertical_card__Text Text">Facility Management Services</p>
      </div>
      <div className="Vertical_card">
        <Image
          src={Housekeeping}
          className="Vertical_card__Image"
          alt="Housekeeping Services"
        />
        <p className="Vertical_card__Text Text">Housekeeping Services</p>
      </div>
    </div>
  );
};

export default Vertical;
