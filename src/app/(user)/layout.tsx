import Banner from '../../components/Banner'
import Header from '../../components/Header'

// styles
import '../../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='bg-gray-900 text-white max-w-7xl mx-auto'>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  )
}
