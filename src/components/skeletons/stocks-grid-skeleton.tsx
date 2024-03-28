import { Skeleton } from "../ui/skeleton";
import StockItemSkeleton from "./stock-item-skeleton";

export default function StocksGridSkeleton() {
    return <div>
        <Skeleton className="w-36 h-4 bg-foreground rounded-xl" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 md:gap-3">{Array.from({ length: 5 }).map((_, index) => <StockItemSkeleton key={index} />)}</div></div>
}