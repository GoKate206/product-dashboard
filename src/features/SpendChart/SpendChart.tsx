import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/actions";
import Loader from "../../components/Loader/Loader";
import './SpendChart.css';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useSalesByMonth } from "../../data/useSalesByMonth";
import CustomTooltip from "../../components/CustomTooltip/CustomTooltip";

const SpendChart = () => {
    const label = 'Retail Sales';
    const { loading, data } = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch<AppDispatch>();
    const monthlySales = useSalesByMonth({data});
    
    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    return (
        <div className="spendChartContainer">
            {loading && <Loader />}
            {data && (
                <>
                <p className="chartLabel">{label}</p>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={monthlySales} margin={{ left: 20, right: 20}}>
                        <XAxis dataKey="month" tickLine={false} style={{ textTransform: 'uppercase', opacity: 0.4, fontSize: '12px' }} />
                        <Tooltip content={<CustomTooltip payload={monthlySales} />} />
                        <Line type="monotone" dataKey="retailSales" stroke="#59A3EF" strokeWidth={3} activeDot={{ r: 3 }} dot={false} />
                        <Line type="monotone" dataKey="wholesaleSales" stroke="#9DA6BD" strokeWidth={3} activeDot={{ r: 3 }} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
                </>
            )}
        </div>
    )
}

export default SpendChart;