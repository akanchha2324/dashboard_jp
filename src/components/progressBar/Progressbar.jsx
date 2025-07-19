function ProgressBar({ label, value, percentage }) {
  return (
    <div>
      <div className="flex justify-between items-center text-[#1C1C1C] text-xs/4.5">
        <span className="label ">{label}</span>
        <span className="value">{value}</span>
      </div>
      <div className="progress_bar mt-1 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className="progress h-full bg-[#A8C5DA] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
