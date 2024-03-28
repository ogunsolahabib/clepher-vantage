


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function StockTrendTable({ tableData }: { tableData: any }) {
    const dataSource = Object.keys(tableData).map(date => {
        return {
            date,
            open: Number(tableData[date]['1. open']).toFixed(2),
            high: Number(tableData[date]['2. high']).toFixed(2),
            low: Number(tableData[date]['3. low']).toFixed(2),
            close: Number(tableData[date]['4. close']).toFixed(2),
        }
    })
    return (
        <Table className="w-full mt-14">
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Open</TableHead>
                    <TableHead>High</TableHead>
                    <TableHead>Low</TableHead>
                    <TableHead>Close</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {dataSource.slice(0, 10).map((item, i) => (
                    <TableRow key={i}>
                        <TableCell className="font-medium">{item.date}</TableCell>
                        <TableCell>{item.open}</TableCell>
                        <TableCell>{item.high}</TableCell><TableCell>{item.low}</TableCell><TableCell>{item.close}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
