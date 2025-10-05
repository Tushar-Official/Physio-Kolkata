import Image from 'next/image';
import { ServicesCard } from '../ServicesCard/ServicesCard';
import AppointmentCard from '../Card/appointment-card';
export default function ServicesCardSection(){
    return(<>
  <div className="pb-12 px-4 flex flex-col items-center gap-8">
  {/* Heading */}
  <div className="pt-12 pb-8 flex justify-center">
    <p className="text-3xl sm:text-4xl text-black font-bold text-center">
      Services...
    </p>
  </div>

  {/* Services Cards */}
  <div className="flex flex-wrap justify-center gap-6 w-full">
    <ServicesCard />
    {/* Add more cards if needed */}
  </div>

  {/* Appointment Card below */}
  <div className="w-full max-w-md mt-6">
    <AppointmentCard title="Make your Appointment for Tele - Rehabilitation" />
  </div>
</div>

    </>)
}