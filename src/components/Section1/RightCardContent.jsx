import React from 'react'
import {MoveRight} from 'lucide-react'
const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-xs leading-relaxed text-white mb-15'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ad quisquam eveniet veniam tenetur sed voluptatem in mollitia, dolorem ea.howf fwijfvw nveorjv wrggivev hivrojv nviehrvojerv nvkwnisvng 
            </p>
            <div className='flex justify-between'>
                <button style ={{backgroundColor:props.color} } className='  text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor:props.color} } className='text-white font-medium px-4 py-2 rounded-full' ><MoveRight size={20}/></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
