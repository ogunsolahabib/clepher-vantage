export default function SearchResultItem({ stock }: { stock: any }) {
    return <a className="py-1 px-1 hover:bg-gray-100" href={`/${stock['1. symbol']}`}>{stock['2. name']} ({stock['1. symbol']})</a>

}