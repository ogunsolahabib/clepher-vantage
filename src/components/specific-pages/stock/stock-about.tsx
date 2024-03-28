export default function StockAbout({ about }: { about: string }) {
    return <section className="mt-14">
        <h2 className="font-semibold text-2xl">About</h2>
        <p className="text-gray-500">{about}</p>
    </section>
}