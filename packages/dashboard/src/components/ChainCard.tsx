import { Card } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'

export function ChainCard({
  icon,
  chainName,
  targetLink,
}: {
  icon: string
  chainName: string
  targetLink: string
}) {
  return (
    <Link href={targetLink}>
      <Card className="ml-1 flex w-40 flex-col items-center px-2 py-3">
        <Image src={icon} height={40} width={40} alt={''} />
        <p className="mt-2 text-xl font-medium">{chainName}</p>
      </Card>
    </Link>
  )
}
