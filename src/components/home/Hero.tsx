import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";

import ResumeButton from "./ui/ResumeButton";
import TalkButton from "./ui/TalkButton";
import { FlipWords } from "../common/FlipWords";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Hero = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstraintedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          <div className="inline-flex items-center">
            <p className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi there, I am Ravishan
            </p>
          </div>
          <FlipWords
            words={[
              "Software Engineer",
              "Web Developer",
              "Information Systems Undergraduate",
            ]}
            className="text-lg/normal sm:text-xl/normal md:text-2xl/normal lg:text-3xl/normal xl:text-4xl/normal dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-medium text-center"
          />
          <img
            className="rounded-full w-96 h-96"
            src="/images/me.png"
            alt="Ravishan"
          />

          <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row">
            <TalkButton />
            <ResumeButton />
          </div>
        </Column>

        <div className="mt-12 lg:mt-16 w-full flex flex-col items-center">
          <p className="text-base/6 font-medium">Follow me here</p>

          <Row classNames="mt-2 gap-2">
            <Link
              href="https://www.linkedin.com/in/ravishan-jayathilake-1404651a9/"
              target="_blank"
              className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
              aria-label="LinkedIn"
            >
              <span className="text-base/6 text-[var(--whiteColor)]">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </Link>

            <Link
              href="https://github.com/Raviyax"
              target="_blank"
              className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
              aria-label="GitHub"
            >
              <span className="text-base/6 text-[var(--whiteColor)]">
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </Link>

            <Link
              href="https://www.facebook.com/ravishan.jayathilake"
              target="_blank"
              className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
              aria-label="Facebook"
            >
              <span className="text-base/6 text-[var(--whiteColor)]">
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </Link>
          </Row>
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default Hero;
