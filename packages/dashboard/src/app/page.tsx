import { ChainCard } from '@/components/ChainCard'

const chainData = [
  { id: '1', icon: '/ethereum_img.svg', chainName: 'Ethereum', targetLink: '/chain/eth' },
  { id: '2', icon: '/base_img.svg', chainName: 'Base', targetLink: '/chain/base' },
  { id: '3', icon: '/polygon_img.svg', chainName: 'Polygon', targetLink: '/chain/polygon' },
  {
    id: '4',
    icon: '/immutable_img.svg',
    chainName: 'Immutable',
    targetLink: '/chain/immutable-mainnet',
  },
  { id: '5', icon: '/gnosis_img.svg', chainName: 'Gnosis', targetLink: '/chain/gnosis' },
]

export default function Home() {
  return (
    <div className="mt-24 flex flex-1 flex-col items-center">
      <h2 className="text-3xl font-bold text-slate-700">
        The General Multi-chain Explorer and Blockchain Search Engine!
      </h2>
      <p className="mt-4 text-center text-2xl text-slate-400">
        Universally accessible, and fully customizable, Explorer Portal is your definitive gateway
        to the blockchain world.
      </p>
      <div className="mt-4 flex flex-wrap justify-around p-12">
        {chainData.map((chain) => {
          return (
            <ChainCard
              key={chain.id}
              icon={chain.icon}
              chainName={chain.chainName}
              targetLink={chain.targetLink}
            />
          )
        })}
      </div>
    </div>
  )
}
