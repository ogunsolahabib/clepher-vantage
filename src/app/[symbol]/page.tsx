import StockPage from "@/components/specific-pages/stock/stock-page";

export default function Stock({ params }: { params: { symbol: string } }) {
    return <div>
        <StockPage symbol={params.symbol} />
    </div>
}