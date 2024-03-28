import { Skeleton } from "../ui/skeleton";

export default function NewsCardSkeleton() {
    return <div className="">
        <Skeleton className="w-full h-200 md:h-[110px] bg-foreground rounded-xl" />
        <div className="px-1 flex flex-col gap-2 mt-3">
            <Skeleton className="w-full h-6 bg-foreground rounded-xl" />
            <Skeleton className="w-full h-6 bg-foreground rounded-xl " />
        </div>
    </div>
}