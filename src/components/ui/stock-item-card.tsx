import { getDeltaDirection } from "@/lib/utils";
import DeltaColor from "./delta-color";

export default function StockItemCard({ stock }: { stock: any }) {
    return <a href={`/${stock.ticker}`} className="w-100 h-100 bg-foreground rounded-xl px-4 py-2">
        <div className="flex w-full h-full flex-col justify-between gap-3">
            <h3 className="truncate text-3xl text-background font-semibold">{stock.ticker}</h3>
            <div className="flex flex-col items-end">
                <span className="text-2xl text-gray-400 font-semibold">{(+stock.price).toFixed(2)}</span>
                <DeltaColor direction={getDeltaDirection(stock.change_percentage)} className="text-xl font-semibold text-gray-400">{(+stock.change_percentage?.replace('%', '')).toFixed(2)}%</DeltaColor>
            </div>
        </div>
    </a>
}