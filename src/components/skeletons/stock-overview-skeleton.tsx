import { Skeleton } from "../ui/skeleton";

export default function StockOverviewSkeleton() {
    return <div className="py-4 flex flex-col gap-2">
        <Skeleton className="w-full h-10 md:w-80 bg-foreground rounded-xl" />
        <Skeleton className="h-4 w-10 bg-foreground rounded-xl" />
        <Skeleton className="h-4 w-20 bg-foreground rounded-xl" />
    </div>
}