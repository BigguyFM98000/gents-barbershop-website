import barbercut from "../assets/salah-regouane-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react"

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.img
        whileHover={{y: -10}}
          alt="A man getting haircut"
          src={barbercut}
          width="3853"
          height="5780"
          loading="lazy"
          className="h-[70vh] max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to Gent's Barbershop</h1>
          <p className="text-lg py-2"><i>Premium cuts, fades and beard grooming in the heart of Thohoyandou.</i></p>

          <h2 className="py-6 text-2xl font-bold">Open Hours</h2>
          <ul className="text-md">
            <li>Monday - Friday: 09:00 - 16:00</li>
            <li>Saturday: 09:00 - 14:00</li>
            <li>Sunday: Closed</li>
            <li>Public Holiday: 09:00 - 13:00</li>
          </ul>

          <p className="py-6">
            New here? Enjoy R50 off your first appointment.
          </p>
          <motion.button whileHover={{y: -10}} className="btn btn-primary text-lg" onClick={() => navigate("contact")}>Book Appointment</motion.button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
