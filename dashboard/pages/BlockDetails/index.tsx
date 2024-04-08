interface IProps {
  blockNumber: string;
}
export default function BlockDetails({ blockNumber }: IProps) {
  return <div>{blockNumber}</div>;
}
