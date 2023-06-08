import { ImageCard } from "./ImageCard"
import './Type.css'
export const Type = ({ data, title, types }) => <div className='my-4 flex flex-col'>
  <div className='font-bold text-2xl text-white font-inter ml-7'>{title}</div>
  <div className='flex overflow-x-scroll scroll py-6'>
    {data.filter(d => types.includes(d.type)).map((d, index) => {
      return <div
      key={d.id} 
      className={`flex-none transition-transform duration-300 transform-gpu hover:-translate-y-1 hover:scale-110 hover:z-50
      ${index === 0 ? 'ml-6' : ''}
      `}>
        <ImageCard url={d.cardImg} />
      </div>
    })}
  </div>

</div>