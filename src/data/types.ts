export interface Product {
    id: string;
    title: string;
    image: string; //url
    subtitle: string;
    brand: string;
    reviews: Review[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: Sale[];
}

export interface Review {
    customer: string;
    review: string;
    score: number;
}

export interface Sale {
    weekEnding: string; // Date in YYYY-MM-DD format
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

export interface MonthlySales {
    month: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}
