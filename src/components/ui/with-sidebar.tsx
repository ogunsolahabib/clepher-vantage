export default function WithSidebar({
    children,
    sidebarContent: SidebarContent
}: {
    children: React.ReactNode
    sidebarContent: () => JSX.Element
}) {
    return (
        <div className="container flex-1 items-start md:grid md:grid-cols-[minmax(0,1fr)_300px] md:gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
            {children}
            <aside className="static top-14 z-30 -mr-2 md:min-h-screen w-full shrink-0 md:sticky md:block">
                <div className="h-full py-8 md:p-6">
                    <SidebarContent />
                </div>
            </aside>
        </div>
    )
}


