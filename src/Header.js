import {
    SearchIcon,
    MenuIcon,
} from '@heroicons/react/outline'
import { PhoneIcon } from '@heroicons/react/solid'
import { Menu } from '@headlessui/react'

function Header() {
    return (
        <div>
            <div className="flex justify-between bg-transparent max-w-6xl xl:mx-auto items-center mx-5 pt-3 md:p-0 ">
                {/* left */}
                <div className="relative cursor-pointer">
                    <h1 className="font-bold text-xl text-white md:text-4xl flex-shrink-0">IMAGE CROPPER</h1>
                </div>

                {/* middle- Search on in big screen */}
                <div className="max-w-xs">
                    <div className="hidden lg:inline-grid mt-1 relative p-3 rounded-md ">
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className='w-5 ml-3 text-gray-500' />
                        </div>
                        <input type="text" placeholder="Search" className="pl-10 h-8 bg-gray-50 block w-full sm:text-sm border-gray-300 rounded-full outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div> 
                </div>
                

                {/* right */}
                <div className="flex lg:hidden items-center justify-end space-x-8">
                    <PhoneIcon className="navBtn " />
                    <SearchIcon className="navBtn " />
                    <Menu as='div' className="relative" >
                        <Menu.Button>
                            <MenuIcon className="navBtn " />
                        </Menu.Button>
                        {/* menu list */}
                        <Menu.Items className="absolute font-semibold bg-white p-4 right-1 z-10 mt-3 w-40 rounded-md text-gray-400 shadow-md space-y-3">
                            <p  className="hover:text-pink-400 cursor-pointer">Privacy Policy</p>
                            <p  className="hover:text-pink-400 cursor-pointer">About us</p>
                            <p  className="hover:text-pink-400 cursor-pointer">Contact us</p>
                            <p  className="hover:text-pink-400 cursor-pointer">SignIn</p>
                        </Menu.Items>
                    </Menu>
                    
                </div> 
                <div className="hidden lg:flex justify-between w-96">
                    <h1 className="navBtnLg">Privacy Policy</h1>
                    <h1 className="navBtnLg">About us</h1>
                    <h1 className="navBtnLg">Contact us</h1>
                    <h1 className="navBtnLg">SignIn</h1>
                </div>
            </div>
            
            
        </div>
    )
}

export default Header
