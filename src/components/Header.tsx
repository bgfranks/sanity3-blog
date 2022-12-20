import Image from 'next/image'
import Link from 'next/link'

// images
import logo from '../public/assets/logo.svg'

export default function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-3'>
        <Link href='/'>
          <Image src={logo} alt='logo' width={100} height={100} />
        </Link>
      </div>
    </header>
  )
}
