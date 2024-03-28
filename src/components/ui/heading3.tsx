import { cn } from "@/lib/utils"

export default function Heading3({ children, className, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) {
    return <h3 className={cn(className, "text-md font-bold")} {...props}>{children}</h3>
}