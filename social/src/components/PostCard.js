import React from 'react'

const PostCard = () => {
  return (

    <div className='flex border-b py-20'>
        <div className='cursor-pointer'>
            <img 
            class="rounded-full max-h-[60px]" width="60"
            src="https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avatar" />
        </div>
        <div class="pl-3 w-full px-4">
        <div class="flex items-center justify-between pb-0.5">
            <span class="font-bold hover:underline cursor-pointer">User Name</span>
            <span class="text-[13px] text-light text-gray-500 pl-1 cursor-pointer">
                        Posted Time
            </span>
    </div>
    <div class="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">Post Description</div>
    <div class="mt-2.5 flex">
    <div class="relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer">
    <img 
            class="rounded-xl object-cover mx-auto h-full" 
            src="https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avatar" />
        </div>
   
    <div class="relative mr-[75px]">
    <div class="absolute bottom-0 pl-2">
    <div class="pb-4 text-center">
    <span class="text-xs text-gray-800 font-semibold">1</span>
        <button class="rounded-full bg-gray-200 p-2 cursor-pointer">Like</button>

        <span class="text-xs text-gray-800 font-semibold">1</span>
        <button class="rounded-full bg-gray-200 p-2 cursor-pointer">Like</button>
    </div>
    </div>
    </div>
    </div>        
    </div>
    </div>


  
  )
}

export default PostCard