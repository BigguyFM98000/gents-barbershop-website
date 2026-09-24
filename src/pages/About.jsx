import aboutimage from "../assets/nathon-oski-unsplash.jpg";
import barberone from "../assets/jeppe-monster-unsplash.jpg";
import barbertwo from "../assets/delfina-pan-unsplash.jpg";
import barberthree from "../assets/nate-johnston-unsplash.jpg";
import { motion } from "motion/react";

function AboutPage() {
  return (
    <section>
      <div className="hero min-w-0 bg-base-200 py-8">
        <div className="hero-content min-w-0 flex-col lg:flex-row">
          <motion.img
          whileHover={{y: -10}}
            alt="A row of three barbershop chairs"
            src={aboutimage}
            width="4288"
            height="2848"
            loading="lazy"
            className="h-auto w-full max-w-sm rounded-lg object-cover shadow-2xl"
          />
          <div className="min-w-0">
            <h1 className="text-3xl font-bold sm:text-5xl">About Our Business.</h1>
            <p className="py-6 text-md">
              Gent’s Barbershop was founded in 2021 with a simple goal: to
              provide men with reliable, affordable, and professional grooming
              services in a welcoming environment. The barbershop was created to
              solve common problems such as inconsistent haircuts, long waiting
              times, limited barber choices, and inconvenient booking processes.
              Customers can enjoy quality haircuts, beard grooming, styling, and
              personalized grooming advice from experienced barbers. Today,
              Gent’s Barbershop is a thriving local business with a loyal and
              growing customer base. Through excellent service, attention to
              detail, and a friendly atmosphere, the barbershop continues to
              attract new customers while building lasting relationships with
              returning clients.
            </p>
          </div>
        </div>
      </div>
      <h2 className="py-6 text-center text-3xl font-bold sm:text-5xl">Barber Profiles</h2>
      <section className="flex flex-row justify-around items-center gap-6 flex-wrap py-6">
        <motion.div whileHover={{y: -10}} className="card w-full max-w-96 bg-base-100 shadow-sm border-solid border-2 border-gray-100">
          <figure className="px-10 pt-10">
            <img
              src={barberone}
              alt="Barber spraying hair lotion"
              width="4000"
              height="6000"
              loading="lazy"
              className="rounded-xl h-[40vh]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Simon</h2>
            <p className="text-md">
              Simon is an experienced barber known for classic cuts, beard shaping, and traditional grooming techniques. His strong communication skills help him understand each client’s preferences. Calm, professional, and meticulous, Simon takes pride in delivering consistent results while creating a relaxed and welcoming barbershop experience.
            </p>
            
          </div>
        </motion.div>
        <motion.div whileHover={{y: -10}} className="card w-full max-w-96 bg-base-100 shadow-sm border-solid border-2 border-gray-100">
          <figure className="px-10 pt-10">
            <img
              src={barbertwo}
              alt="Barber cutting hair"
              width="2240"
              height="3360"
              loading="lazy"
              className="rounded-xl h-[40vh]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">David</h2>
            <p className="text-md">
              David specializes in sharp fades, beard designs, and contemporary men’s hairstyles. His creativity and knowledge of modern barbering techniques allow him to create personalized looks. Energetic, confident, and passionate about grooming, David enjoys helping clients discover styles that match their personality and lifestyle.
            </p>
            
          </div>
        </motion.div>
        <motion.div whileHover={{y: -10}} className="card w-full max-w-96 bg-base-100 shadow-sm border-solid border-2 border-gray-100">
          <figure className="px-10 pt-10">
            <img
              src={barberthree}
              alt="Barber cutting hair"
              width="4141"
              height="5176"
              loading="lazy"
              className="rounded-xl h-[40vh]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Steven</h2>
            <p className="text-md">
              Steven is a skilled barber specializing in modern fades, textured cuts, and precision styling. With strong knowledge of current grooming trends, he combines technical expertise with creativity. His friendly personality, attention to detail, and patience make every client feel comfortable and confident.
            </p>
            
          </div>
        </motion.div>
      </section>
    </section>
  );
}

export default AboutPage;
