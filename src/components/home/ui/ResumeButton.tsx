import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[12rem]"
      href="/Ravishan_Jayathilake_Resume.pdf"
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
