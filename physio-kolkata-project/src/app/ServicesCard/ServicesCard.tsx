import Image from 'next/image';
import {servicesData} from '../utils/contentJsonFiles/content'
export const ServicesCard=()=>{
    return(<>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {servicesData.items.map((item) => (
    <div
      key={item.id}
      className="w-56 h-60 rounded border-1 bg-gray-100  border-gray-300 shadow-lg flex flex-col justify-center items-center p-2"
    >
      <Image
        className="w-16 h-16 mb-4"
        src={item.image}
        alt={item.title}
        width={64}
        height={64}
      />
      <div className="px-2 py-1 ">
        <div className="font-bold text-md mb-2">{item.title}</div>
        <p className="text-gray-700 text-base text-sm">{item.description}</p>
      </div>
    </div>
  ))}
</div>

    </>)
}