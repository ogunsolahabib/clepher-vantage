import popularStocks from '@/lib/popular-stocks.json'
import PopularStockItem from "./popular-stock-item";



export default function PopularStocksListing() {
    return <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 py-4">
            {popularStocks.data.map((stock: any) => {
                return <PopularStockItem key={stock.symbol} stock={stock} />
            })}
        </div>

    </div>

}