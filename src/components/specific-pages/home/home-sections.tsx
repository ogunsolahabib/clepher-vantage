'use client';

import { useReactQueryFetch } from "@/lib/queryHooks";
import PopularStocks from "./popular-stocks";
import TopGainersSection from "./top-gainers-section";
import TopLosersSection from "./top-losers-section";

export default function HomeSections() {

    const { data, isLoading } = useReactQueryFetch({
        function: 'TOP_GAINERS_LOSERS',
    })
    return <section className="w-full flex flex-col gap-y-10">
        <PopularStocks />
        {isLoading ? <div>Loading...</div> : <> <TopGainersSection data={data.top_gainers} />
            <TopLosersSection data={data.top_losers} />
        </>}

    </section>
}