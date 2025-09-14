import doctor from '../images/doctor.png'
import service from '../images/service.webp'
import emergency from '../images/emergency.png'
import physiotherapist from '../images/homevisit.jpg'

export const servicesData = {
  section: "Servicescard",
  items: [
    {
      id: 1,
      title: "Qualified Doctors",
      description:
        "Experienced, licensed doctors providing expert care for your health and well-being.",
      image: doctor
    },
    {
      id: 2,
      title: "24 Hours Service",
      description:
        "Providing reliable service 24/7, anytime you need assistance, day or night.",
      image: service
    },
    {
      id: 3,
      title: "Need Emergency",
      description:
        "Facing an emergency? Get fast, reliable assistance whenever you need it.",
      image: emergency
    },
    {
      id: 4,
      title: "Qualified Physiotherapist",
      description:
        "More than 30+ qualified physiotherapist in & around Kolkata.",
      image: physiotherapist
    }
  ]
};
