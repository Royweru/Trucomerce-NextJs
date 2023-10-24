import Navbar from "@/components/Navbar"
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="  w-full h-full">
        <Navbar />
       {children}
      </div>
     
    )
  }