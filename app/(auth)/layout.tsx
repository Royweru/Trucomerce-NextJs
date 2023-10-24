export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     <div className=" flex flex-col h-full w-full justify-center items-center mt-38">
       {children}
     </div>
    )
  }