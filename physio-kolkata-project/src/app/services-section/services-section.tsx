import Image from 'next/image';
import { ServicesCard } from '../ServicesCard/ServicesCard';
export default function ServicesCardSection(){
    return(<>
    <div className='pb-12'>
      <div className=' pt-12 pb-12 flex justify-center items center '>
        <p className='text-4xl text-black font-bold'>Services...</p>
      </div>
        <div className='flex justify-around '>
          <ServicesCard/>
           
        </div>

    </div>
    </>)
}