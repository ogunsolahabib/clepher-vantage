import Search from "./search";

export default function Header() {

    return (
        <header className="sticky top-0 left-0 right-0 bg-background z-50 shadow-sm">
            <div className="container py-4 flex flex-col md:flex-row gap-4 justify-between items-center">
                <a href="/">

                    <span className="text-xl md:text-2xl font-bold text-clepher whitespace-nowrap">Clepher Vantage</span>
                </a>
                <Search />
            </div>
        </header>
    )
}