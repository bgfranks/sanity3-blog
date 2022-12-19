import Link from 'next/link'

// icons
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div className='flext items-center justify-between p-3 font-semibold'>
        <Link
          href='/'
          className='text-[#32b9fa] flex items-center hover:text-[#10a2eb]'
        >
          <ArrowUturnLeftIcon className='w-6 h-6 text-[#32b9fa] mr-2 hover:text-[#10a2eb]' />
          Back to Blog
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}
