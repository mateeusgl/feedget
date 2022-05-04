import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function App() {
  return (
    <Popover className='absolute bottom-4 right-4'>
      <Popover.Panel className="">Hello</Popover.Panel>
      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group hover:bg-brandHover-400'>
        <ChatTeardropDots className='w-6 h-6'/>

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-1'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}