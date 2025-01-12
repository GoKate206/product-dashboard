import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/actions";
import Loader from "../../components/Loader/Loader";
import './SpendChart.css';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useSalesByMonth } from "../../data/useSalesByMonth";

const SpendChart = () => {
    const label = 'Retail Sales';
    const { loading, data } = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch<AppDispatch>();
    const monthlySales = useSalesByMonth({data});

    const formatTooltip = (value: number, name: string): string => {
        return `$${value.toLocaleString()}`;
    }
    
    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    return (
        <div className="spendChartContainer">
            {loading && <Loader />}
            {data && (
                <>
                <p className="chartLabel">{label}</p>
                <ResponsiveContainer width="90%" height={450}>
                    <LineChart data={monthlySales}>
                        <XAxis dataKey="month" />
                        <Tooltip formatter={formatTooltip} />
                        <Line type="monotone" dataKey="retailSales" stroke="#59A3EF" activeDot={{ r: 6 }} />
                        <Line type="monotone" dataKey="wholesaleSales" stroke="#9DA6BD" activeDot={{ r: 6 }} />
                    </LineChart>
                </ResponsiveContainer>
                </>
            )}
        </div>
    )
}

export default SpendChart;