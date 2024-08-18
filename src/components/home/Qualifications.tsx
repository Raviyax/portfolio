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
              description="Currently reading for my Bachelors’ Honours Degree in Information Systems at University of Colombo School of Computing (UCSC)"
            />

            <QualificationItem
              url="/images/bc.png"
              institute="Bandaranayake College Gampaha"
              Qualification="GCE Advanced Level"
              startDate="2018"
              endDate="2020"
              description="Passed General Certificate of Advanced Level with 2 B pass and 1C passes in Mathematical Stream."
            />

            <QualificationItem
              url="/images/gc.png"
              institute="Gurukula College Kelaniya"
              Qualification="GCE Ordinary Level"
              startDate="2013"
              endDate="2017"
              description="Passed General Certificate of Ordinary Level with 8A 1B"
            />
          </GridBox>
        </Fade>
      </ConstraintedBox>
    </ResponsiveBox>
  );
}

export default Qualifications;
