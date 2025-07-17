import { MdTrendingDown, MdTrendingUp } from "react-icons/md";
function SummaryCard({
  label,
  count,
  percentageChange,
  changeType,
  prefix = "",
  suffix = "",
  bgColor,
}) {
  return (
    <>
      <div
        className="summaryCard flex flex-col gap-2 p-6 rounded-2xl text-[#1C1C1C] min-w-[202px]"
        style={{ backgroundColor: bgColor }}
      >
        <div className="text-sm/5 font-semibold rounded-xl hover:bg-[#0000000b]">
          {label}
        </div>
        <div className="flex gap-7 items-center justify-between rounded-xl hover:flex-row-reverse hover:bg-[#0000000b]">
          <span className="text-2xl/9 font-semibold">{`${prefix}${count}${suffix}`}</span>
          <span className="flex items-center text-xs/4.5">
            {`${changeType === "positive" ? "+" : "-"}${percentageChange}%`}
            {changeType === "positive" ? <MdTrendingUp /> : <MdTrendingDown />}
          </span>
        </div>
      </div>
    </>
  );
}

export default SummaryCard;
