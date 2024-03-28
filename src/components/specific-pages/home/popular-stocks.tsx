import popularStocks from '@/lib/popular-stocks.json'
import Heading2 from '@/components/ui/heading2'
import PopularStockItem from '@/components/ui/popular-stock-item'



export default function PopularStocks() {
    return <section className="w-full">
        <div className="flex justify-between border-b w-full">
            <Heading2>Popular Stocks</Heading2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {popularStocks.data.map((stock: any) => <PopularStockItem key={stock.symbol} stock={stock} />
            )}
        </div>
    </section>
}