import { cn } from "@/lib/utils"

interface DeltaColorProps {
    direction: 'up' | 'down'
}
export default function DeltaColor({ children, className, direction, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement> & DeltaColorProps) {

    return <span className={cn(className, "text-sm font-semibold", direction === 'up' ? "text-green-400" : "text-red-500")} {...props}>{children}</span>
}