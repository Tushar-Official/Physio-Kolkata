"use client"
import { useState } from "react";
import AppointmentCard from "../Card/appointment-card";

export default function TopSectionCard(){
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You could call an API route here
  };
    return (<>
    <div className=" p-12">
  <div className="flex justify-center pt-12 items-center">
    <p className="text-4xl font-bold">Visit our centers in Kolkata...</p>
  </div>
  <div className="flex justify-evenly  ">
        <AppointmentCard title="Make an Appointment for Ballygunge" />
        <AppointmentCard title="Make an Appointment for SaltLake" />
    </div>
  </div>
    </>)
}