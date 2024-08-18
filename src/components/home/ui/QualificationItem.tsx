import { Balancer } from "react-wrap-balancer";
import CardBox from "@/components/core/CardBox";
import Column from "@/components/core/Column";

type QualificationItemProps = {
  url: string;
  institute: string;
  Qualification: string;
  startDate: string;
  endDate: string;
  description: string;
};

const QualificationItem = ({
  url,
  institute,
  Qualification,
  startDate,
  endDate,
  description,
}: QualificationItemProps) => {
  return (
    <CardBox classNames="p-4 items-center text-center bg-[var(--textColor10)] group min-h-80">
      <Column classNames="items-center justify-between w-full h-full gap-12">
        <Column classNames="items-center justify-start">
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer  hover:grayscale-0">
            <img className="rounded-lg" src={url} alt={institute} />
          </figure>

          <p className="text-lg/6 font-semibold mt-4">{institute}</p>

          <p className="text-[var(--textColorLight)] text-base/6 font-medium">
            {Qualification}
          </p>
        </Column>

        <div className="flex flex-row relative gap-1 items-center justify-center px-2 py-0.5  text-[var(--textColor)] rounded-[var(--borderRadius)] bg-[var(--primaryColor)]">
          <p className="text-xs/6 font-medium uppercase">{startDate}</p>

          <span>-</span>

          <p className="text-xs/6 font-medium uppercase">{endDate}</p>
        </div>
      </Column>

      <div className="absolute left-0 right-0 top-[-200%] bottom-0 w-full h-auto min-h-full scroll-smooth overflow-hidden overflow-y-auto p-4 bg-zinc-800 hidden invisible opacity-0 transition duration-500 ease-in-out slide_in group-hover:flex group-hover:top-0 group-hover:visible group-hover:opacity-100 group-hover:z-10">
        <p className="text-base/6 font-normal m-auto text-center">
          <Balancer preferNative={false}>{description}</Balancer>
        </p>
      </div>
    </CardBox>
  );
};

export default QualificationItem;
