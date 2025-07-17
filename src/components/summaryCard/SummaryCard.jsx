function SummaryCard({
    label,
    count,
    percentageChange,
    changeType,
    type,
    bgColor = '#dddddd',
}) {
    return <>
        <div className="summaryCard flex flex-col" style={{backgroundColor: bgColor}}>
            <div>{label}</div>
            <div className="flex">
                <span>{count}</span>
                <span>{percentageChange + `%`}</span>
            </div>
        </div>
    </>
}

export default SummaryCard;