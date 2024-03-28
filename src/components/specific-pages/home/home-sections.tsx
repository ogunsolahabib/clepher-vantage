'use client';

import { useReactQueryFetch } from "@/lib/queryHooks";
import PopularStocks from "./popular-stocks";
import TopGainersSection from "./top-gainers-section";
import TopLosersSection from "./top-losers-section";
import StockItemSkeleton from "@/components/skeletons/stock-item-skeleton";
import StocksGridSkeleton from "@/components/skeletons/stocks-grid-skeleton";

export default function HomeSections() {

    const { data, isLoading } = useReactQueryFetch({
        function: 'TOP_GAINERS_LOSERS',
    })
    return <section className="w-full flex flex-col gap-y-10">
        <PopularStocks />
        {isLoading ? <StocksGridSkeleton /> : <> <TopGainersSection data={data.top_gainers} />
            <TopLosersSection data={data.top_losers} />
        </>}

    </section>
}