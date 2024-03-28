import Image from "next/image";

export default function NewsCard({ data }: { data: any }) {
    return <div className="max-w-full mx-auto bg-white rounded-xl border overflow-hidden">
        <div className="flex flex-col">
            <div className="md:flex-shrink-0 rounded-lg  relative w-full h-28 ">
                {data?.banner_image && <Image className="w-full h-full" src={data.banner_image} alt="News Image" fill />}
            </div>
            <div className="px-2 py-4 border-t">
                <h4 className="block mt-1 text-lg leading-tight font-medium text-clepher hover:underline line-clamp-3">{data.title}</h4>
                <p className="mt-2 text-gray-500 text-sm line-clamp-3">{data.summary}</p>
            </div>
        </div>
    </div>

}