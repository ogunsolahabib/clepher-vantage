import NewsCardSkeleton from "./news-card-skeleton";

export default function NewsListingSkeleton() {
    return <div>
        <div className="flex flex-col gap-3">{Array.from({ length: 5 }).map((_, index) => <NewsCardSkeleton key={index} />)}</div>
    </div>
}