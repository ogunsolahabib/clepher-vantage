import { useReactQueryFetch } from "@/lib/queryHooks"
import StockTrendGraph from "./stock-trend-graph"
import StockTrendTable from "./stock-trend-table"

export default function StockTrendSection({ symbol }: { symbol: string }) {
    const { data: dataObject, isLoading } = useReactQueryFetch({
        function: 'TIME_SERIES_DAILY',
        // symbol
        symbol: 'IBM', //demo
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    const data = dataObject['Time Series (Daily)'];


    return <section className="mt-14">
        <StockTrendGraph chartData={data} />
        <StockTrendTable tableData={data} />
    </section>
}