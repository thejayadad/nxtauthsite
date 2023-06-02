import React from 'react'

const CreatePost = () => {
  return (
    <section className='flex border-b py-20'>
      <h2>Create Post</h2>
      <div class="mt-8 md:flex gap-6">
      <label
      class="
      md:mx-0
      mx-auto
      mt-4
      mb-6
      flex 
      flex-col 
      items-center 
      justify-center 
      w-full 
      max-w-[260px] 
      h-[470px] 
      text-center 
      p-3 
      border-2 
      border-dashed 
      border-gray-300 
      rounded-lg 
      hover:bg-gray-100 
      cursor-pointer
  "
      >
   <div class="px-2 py-1.5 mt-8 text-white text-[15px] w-[80%] bg-[#F02C56] rounded-sm">
                        Select file
    </div>
    <input 
    type="file" 
    hidden 
                    />
      </label>
    </div>
    </section>
  )
}

export default CreatePost