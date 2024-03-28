import { Skeleton } from "../ui/skeleton";

export default function StockTrendSkeleton() {
    return <>
        <section className="py-4">
            <div className="flex flex-col justify-center gap-4">
                <Skeleton className="w-60 h-6 bg-foreground rounded-xl" />
                <Skeleton className="w-full h-40 bg-foreground rounded-xl" />
            </div>
        </section>

        {/* table skeleton */}
        <section className="py-4">
            <div className="flex flex-col justify-center gap-4">
                <Skeleton className="w-60 h-6 bg-foreground rounded-xl" />
                {Array.from({ length: 5 }).map((_, index) => <Skeleton key={index} className="w-full h-10 bg-foreground rounded-xl" />)}

            </div>
        </section>
    </>
}