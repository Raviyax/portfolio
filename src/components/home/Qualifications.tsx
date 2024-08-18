import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import QualificationItem from "./ui/QualificationItem";
import Fade from "./ui/transition/fade";

function Qualifications({ id }: { id: string }) {
  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="p-4 py-16">
        <SectionTitle>Educational Qualifications</SectionTitle>

        <Fade opacity={0.8}>
          <GridBox classNames="justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16">
            <QualificationItem
              url="/images/ucsc.png"
              institute="University of Colombo School of Computing"
              Qualification="BSc (Hons) in Information Systems"
              startDate="2022"
              endDate="Present"
              description="I have a proven track record of success, having developed more than 5 web applications  that seamlessly integrate backend APIs."
            />

            <QualificationItem
              url="/images/bc.png"
              institute="Bandaranayake College Gampaha"
              Qualification="GCE Advanced Level"
              startDate="2018"
              endDate="2020"
              description="I had the invaluable opportunity to make a significant impact by revamping and enhancing more than three mobile apps using Flutter."
            />

            <QualificationItem
              url="/images/gc.png"
              institute="Gurukula College Kelaniya"
              Qualification="GCE Ordinary Level"
              startDate="2013"
              endDate="2017"
              description="I had the privilege of spearheading the development of the company's website and made needful changes into look and feel."
            />
          </GridBox>
        </Fade>
      </ConstraintedBox>
    </ResponsiveBox>
  );
}

export default Qualifications;
