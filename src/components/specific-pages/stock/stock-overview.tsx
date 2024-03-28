'use client';

import DeltaColor from "@/components/ui/delta-color";

export default function StockOverview({ stock }: { stock: any }) {

    return <section className="mt-14">
        <div className="flex flex-col gap-2">
            <div className="flex gap-x-4 items-center">
                <h1 className="text-3xl font-bold">{stock.Name} ({stock.Symbol})</h1>
            </div>
            <span className="font-semibold">${stock.BookValue}</span>
            <span className="flex gap-x-1 mt-1 text-sm">
                <DeltaColor direction="up">${(+stock.Beta).toFixed(2)}
                    (4.93%)</DeltaColor>

                Today
            </span>
        </div>
    </section>
}