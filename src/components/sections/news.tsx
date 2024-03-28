'use client';
import { useReactQueryFetch } from "@/lib/queryHooks";
import NewsCard from "../ui/news-card";
import Heading2 from "../ui/heading2";
import NewsCardSkeleton from "../skeletons/news-card-skeleton";
import NewsListingSkeleton from "../skeletons/news-lislting-skeleton";

export default function News({ ticker }: { ticker?: string }) {
    const { data, isLoading } = useReactQueryFetch({
        function: 'NEWS_SENTIMENT',
        // tickers: ticker,
        tickers: 'AAPL', //demo
        // limit: 5
    }, ticker);

    return <div className="bg-background px-6 py-4">

        <Heading2 className="mb-4">{ticker ? `"${ticker}" in the news` : 'Top Stories'}</Heading2>
        {isLoading ? <NewsListingSkeleton /> : <div className="flex flex-col gap-3">
            {data?.feed?.slice(0, 5).map((news: any) => {
                return <NewsCard key={news.url} data={news} />
            })}
        </div>}
    </div>
}