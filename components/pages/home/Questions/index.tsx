import Link from "next/link";

const Question = () => {
  return (
    <div className="Question">
      <div className="Question__Block">
        <p className="Question__Block__Text Title">
          ANY QUESTIONS ABOUT OUR SERVICES?
        </p>
        <Link href="/contact" className="btn-primary Text">
          ASK OUR EXPERT
        </Link>
      </div>
    </div>
  );
};

export default Question;
