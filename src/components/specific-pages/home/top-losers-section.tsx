import CategoryHeading from "@/components/ui/category-heading";
import StockItemCard from "@/components/ui/stock-item-card";

export default function TopLosersSection({ data }: { data: any[] }) {

    return <section className="w-full">
        <CategoryHeading name="Top Losers" pathname="/top-losers" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 md:gap-3">
            {data.slice(0, 12).map((stock: any) => {
                return <StockItemCard key={stock.ticker} stock={stock} />
            })}
        </div>

    </section>


}