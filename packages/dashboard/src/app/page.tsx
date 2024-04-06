import Content from "@/components/Content";
import Navbar from "@/components/Navbar";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen px-24 py-4">
      <Navbar />
      <SearchInput />
      <Content />
    </main>
  );
}
