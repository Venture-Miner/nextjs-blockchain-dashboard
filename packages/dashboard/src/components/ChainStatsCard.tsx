import { Card } from './ui/card'

export function ChainStatsCard({
  title,
  value,
  children,
}: {
  title: string
  value: string
  children?: React.ReactNode
}) {
  return (
    <Card className="ml-1 flex min-w-52 items-center p-4">
      <div className="w-10">{children}</div>
      <div className="flex flex-col">
        <p className="text-sm text-slate-400">{title}</p>
        <p className="text-xl font-medium text-slate-700">{value}</p>
      </div>
    </Card>
  )
}
