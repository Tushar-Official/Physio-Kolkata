import AppointmentCard from "../Card/appointment-card";
import homevisit from '../utils/images/homevisit.jpg'
import Image from 'next/image';
export default function HomeVistCard(){
    return(<>
    <div className=" p-16 bg-indigo-100 ">
        <div className="flex flex-col justify-center gap-y-4 items-center p-12">
            <h2 className="text-4xl font-bold">We also have HomeVisit Facility</h2>
             <h2 className="text-4xl font-bold">Please fill below form and we will arrange a Physiotherapist at Home for You</h2>
        </div>
        <div className="flex items-center justify-between px-24 gap-12 w-full">
  {/* Left: Image */}
  <div className="flex-shrink-0 px-12">
    <Image
      src={homevisit}
      alt="Home Visit"
      className="w-80 h-80 object-cover rounded-lg shadow-lg"
    />
  </div>

  {/* Right: Form */}
  <div className="">
    <AppointmentCard title="Make an Appointment for HomeVisit in Kolkata" />
  </div>
</div>
        </div>
    </>)
}