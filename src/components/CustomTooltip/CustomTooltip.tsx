import './CustomTooltip.css';

const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active && !payload?.length) {
        return null;
    }

    return (
        <div className="CustomTooltip">
            <p className="label monthLabel">{label}</p>
            {payload.map((label: any, index: number) => (
                <div key={index} className="row">
                    <div className="square" style={{ backgroundColor: label.stroke }} />
                    <p className="label">{label.dataKey.split('Sales').join(' ')}Sales : ${label.value.toLocaleString()}</p>
                </div>
            ))}
        </div>
    )
}

export default CustomTooltip;