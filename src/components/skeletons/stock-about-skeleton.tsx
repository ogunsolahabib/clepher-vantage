import { Skeleton } from "../ui/skeleton";

export default function StockAboutSkeleton() {
    return <div className="flex flex-col gap-2 mt-14">
        <Skeleton className="w-60 h-6 bg-foreground rounded-xl" />
        <Skeleton className="w-full h-4 bg-foreground rounded-xl" />
        <Skeleton className="w-full h-4 bg-foreground rounded-xl" />
    </div>

}