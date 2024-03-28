'use client';
import { ArrowLeft } from "lucide-react";
import StockOverview from "./stock-overview";
import StockAbout from "./stock-about";
import WithSidebar from "@/components/ui/with-sidebar";
import News from "@/components/sections/news";
import { useReactQueryFetch } from "@/lib/queryHooks";
import StockTrendSection from "./stock-trend-section";

export default function StockPage({ symbol }: { symbol: string }) {
    const { data, isLoading } = useReactQueryFetch({
        function: 'OVERVIEW',
        // symbol
        symbol: 'IBM' //demo

    })


    return <WithSidebar sidebarContent={() => <News ticker={symbol} />}>
        <div className="container bg-background mt-6">
            <div className="flex items-center gap-x-2 mt-10">
                <ArrowLeft size={18} />
                <a href={'/'}>Back</a>
            </div>

            {isLoading ? <div>Loading...</div> : <>
                <StockOverview stock={data} />

            </>}
            <StockTrendSection symbol={symbol} />

            {isLoading ? <div>Loading...</div> : <StockAbout about={data.Description} />}
        </div>
    </WithSidebar>
}