import BlockDetails from '@/pages/BlockDetails';

export default function Page({ params }: { params: { number: string } }) {
  const { number } = params;
  return (
    <div>
      <BlockDetails blockNumber={number} />
    </div>
  );
}
