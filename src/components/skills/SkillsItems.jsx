import React from 'react'

export const SkillsItems = ({item:{title,img,alt}}) => {
  return (
    <div className='flex items-center flex-col gap-4 p-6 shadow-primaryShadow duration-300 hover:scale-110'>
      <img className='w-16 h-16 md:w-20 md:h-20' src={img} alt={alt} />
      <h4 className='text-xl text-whiteColor font-semibold capitalize'>{title}</h4>
    </div>
  )
}
