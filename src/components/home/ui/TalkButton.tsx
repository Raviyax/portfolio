import Link from "next/link";

const TalkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[12rem]"
      href="#contact"
      target="_blank"
    >
      Let&apos;s Talk
    </Link>
  );
};

export default TalkButton;
