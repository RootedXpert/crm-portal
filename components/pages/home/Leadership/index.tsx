import Sankar from "@/assests/images/sankar.jpg";
import Basha from "@/assests/images/basha.jpg";
import Naga from "@/assests/images/nagarjuna.jpg";
import Image from "next/image";
const Leadership = () => {
  const leaders = [
    {
      name: "Sankar V",
      image: Sankar,
      id: "1",
      post: "Genaral manager",
      description:
        "Accomplishes department objectives by supervising staff and organizing and monitoring work processes. Maintains staff by recruiting, selecting, orienting, and training employees and developing personal growth opportunities. Accomplishes staff job results by coaching, counseling, and disciplining employees.",
    },
    {
      name: "Nagarjuna P",
      image: Naga,
      id: "2",
      post: "Managing director",
      description:
        "Accomplishes department objectives by supervising staff and organizing and monitoring work processes. Maintains staff by recruiting, selecting, orienting, and training employees and developing personal growth opportunities. Accomplishes staff job results by coaching, counseling, and disciplining employees.",
    },
    {
      name: "Basha M",
      image: Basha,
      id: "3",
      post: "Supervisor",
      description:
        "Accomplishes department objectives by supervising staff and organizing and monitoring work processes. Maintains staff by recruiting, selecting, orienting, and training employees and developing personal growth opportunities. Accomplishes staff job results by coaching, counseling, and disciplining employees.",
    },
  ];
  return (
    <div className="leadership">
      <div className="leadership_Title Heading">LEADERSHIP PROFILE</div>
      <div className="leadership_Card">
        {leaders.map((lead) => {
          return (
            <div key={lead.id} className="leadership__Card">
              <Image
                src={lead.image}
                alt={lead.name}
                className="leadership__Card_Image"
              />
              <p className="primary-color Title">{lead.name}</p>
              <p className="primary-color Title">{lead.post}</p>
              <p className="Text">{lead.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leadership;
