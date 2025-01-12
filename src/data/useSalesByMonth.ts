import { useMemo } from "react"
import { Product, Sale } from "./types"
import dayjs from "dayjs";

export interface useSalesByMonthProps {
    data: Product | undefined;
}

export const useSalesByMonth = ({ data }: useSalesByMonthProps) => {
    return useMemo(() => {
        if (!data?.sales) return [];

        const formatted = (data.sales).reduce((acc: { [key: string]: any}, sale: Sale) => {
            const month = dayjs(dayjs(sale.weekEnding)).format('MMM');

            if (!acc[month]) {
                acc[month] = {
                    retailSales: 0,
                    wholesaleSales: 0,
                    unitsSold: 0,
                    retailerMargin: 0
                };
            }

            acc[month].retailSales += sale.retailSales;
            acc[month].wholesaleSales += sale.wholesaleSales;
            acc[month].unitsSold += sale.unitsSold;
            acc[month].retailerMargin += sale.retailerMargin;

            return acc;

        }, {});

        const test = Object.keys(formatted).map((month) => ({ month, ...formatted[month]}));
        return test;
    }, [data]);
}

