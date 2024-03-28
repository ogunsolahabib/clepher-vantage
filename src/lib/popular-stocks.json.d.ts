interface StockData {
    symbol: string;
    companyName: string;
    primaryExchange: string;
}

interface PopularStocks {
    data: StockData[];
}

declare module '*.json' {
    const value: PopularStocks;
    export default value;
}
