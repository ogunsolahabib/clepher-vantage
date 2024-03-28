'use client';

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useReactQueryFetch } from "@/lib/queryHooks";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import SearchResultItem from "../ui/search-result-item";


export default function Search(props: { initialSearch?: string }): JSX.Element {
    const [search, setSearch] = useState<string>(props.initialSearch || '');

    const [popoverOpen, setPopoverOpen] = useState(false);

    const [results, setResults] = useState<any[]>([]);

    const { data } = useReactQueryFetch({
        function: 'SYMBOL_SEARCH',
        keywords: search
        // keywords: 'tesco' //demo
    }, search, {

        enabled: search.length > 0
    });

    useEffect(() => {
        if (data) {
            setResults(data.bestMatches);
        }
    }, [data]);

    useEffect(() => {
        if (search.length === 0) {
            setResults([]);
        }
    }, [search]);

    useEffect(() => {
        if (results.length > 0) {
            setPopoverOpen(true);
        } else {
            setPopoverOpen(false);
        }
    }, [results]);



    return <div className="flex w-full md:w-[480px]" role="search"><Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
            <Input role="combobox"
                type='search' value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for stocks..."
            />
        </PopoverTrigger>

        {results.length > 0 && <PopoverContent onOpenAutoFocus={e => e.preventDefault()} onCloseAutoFocus={e => {
            e.preventDefault();
            setResults([]);
        }}

            className="md:w-[480px]" >
            <div className="mt-1 w-full flex flex-col overflow-y-auto">

                {results.map((stock: any) => <SearchResultItem key={stock['1. symbol']} stock={stock} />)}
            </div>
        </PopoverContent>}
    </Popover>
    </div>

}
