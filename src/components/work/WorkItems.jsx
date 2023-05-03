import React from 'react'

const WorkItems = ({item:{img,title}}) => {
  return (
    <div className='relative overflow-hidden bg-cover bg-no-repeat h-[280px] rounded-lg shadow-primaryShadow group' style={{backgroundImage:`url(${img})`}}>
          <div className='absolute flex flex-col gap-6 left-0 -top-full w-full h-full items-center justify-center bg-gradient-to-t from-primaryColor/90 to-blue-800/95 duration-300 group-hover:top-0'>
             <h3 className='text-whiteColor uppercase font-semibold text-xl'>{title}</h3>
             <div className='flex items-center gap-4'>
                <a className='bg-whiteColor w-24 h-12 flex items-center justify-center font-medium rounded-md capitalize hover:text-blueColor' href="/">Demo</a>
                <a className='bg-whiteColor w-24 h-12 flex items-center justify-center font-medium rounded-md capitalize hover:text-blueColor' href="/">Code</a>
             </div>
          </div>
     </div>
  )
}

export default WorkItems