import StockPage from "@/components/specific-pages/stock/stock-page";

export const meta = {
    title: 'Stock',
    description: 'Stock',
}

export default function Stock({ params }: { params: { symbol: string } }) {
    return <div>
        <StockPage symbol={params.symbol} />
    </div>
}