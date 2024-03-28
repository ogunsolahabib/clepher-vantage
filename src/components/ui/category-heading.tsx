import { buttonVariants } from "./button";
import Heading2 from "./heading2";

export default function CategoryHeading({ name, pathname }: { name: string, pathname: string }) {
    return <div className="flex justify-between border-b w-full">
        <Heading2>{name}</Heading2>
    </div>
}