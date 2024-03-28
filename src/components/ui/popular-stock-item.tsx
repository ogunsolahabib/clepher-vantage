import { Star } from "lucide-react";
import Heading3 from "./heading3";

export default function PopularStockItem({ stock }: { stock: any }) {
    return <a href={`/${stock.symbol}`}>
        <div key={stock.symbol} className="flex flex-col gap-1">
            <div className="flex gap-4 items-center">

                <Heading3 className="truncate">{stock.companyName}</Heading3>
                <Star size={16} />
            </div>
            <div className="flex gap-2 max-w-full text-sm text-gray-400">
                <div className="truncate">
                    {stock.symbol}, {stock.primaryExchange}
                </div>
            </div>
        </div>
    </a>
}