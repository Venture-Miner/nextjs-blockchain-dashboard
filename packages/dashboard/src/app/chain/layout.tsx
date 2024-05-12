import SearchInput from '@/components/SearchInput'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex w-full flex-col">
      <SearchInput />
      {children}
    </div>
  )
}
