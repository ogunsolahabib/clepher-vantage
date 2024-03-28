import { cn } from "@/lib/utils";

export default function Heading2({ children, className, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) {
    return <h2 className={cn(className, "text-2xl font-bold")} {...props}>{children}</h2>
}