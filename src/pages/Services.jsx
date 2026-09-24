import { Fragment } from "react";
import beardtrim from "../assets/allef-vinicius-unsplash.jpg";
import beardcut from "../assets/antonio-reynoso-unsplash.jpg";
import classichaircut from "../assets/michael-demoya-unsplash.jpg";
import kidscut from "../assets/sinval-carvalh-unsplash.jpg";
import premiumhaircut from "../assets/andrea-donato-unsplash.jpg";
import chiskop from "../assets/stefan-schauberger-unsplash.jpg";
import { motion } from "motion/react";

function ServicesPage() {
  return (
    <Fragment>
        <h2 className="text-center text-bold text-4xl py-6">Our Services.</h2>
    <section className="flex flex-row justify-around items-center gap-6 flex-wrap">
      <motion.div whileHover={{y: -10}} className="card bg-base-900 w-96 shadow-sm border-solid border-2 border-gray-100">
        <figure className="px-10 pt-10">
          <img
            src={beardtrim}
            alt="A man getting beard trim"
            width="4858"
            height="3239"
            loading="lazy"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">Beard Trim</h2>
          <p className="text-lg font-bold">Price: R50</p>
          
        </div>
      </motion.div>
      <motion.div whileHover={{y: -10}} className="card bg-base-100 w-96 shadow-sm border-solid border-2 border-gray-100">
        <figure className="px-10 pt-10">
          <img
            src={beardcut}
            alt="A man getting beard cut"
            width="6016"
            height="4000"
            loading="lazy"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">Haircut + Beard</h2>
          <p className="text-lg font-bold"> 
           Price: R90
          </p>
          
        </div>
      </motion.div>
      <motion.div whileHover={{y: -10}} className="card bg-base-100 w-96 shadow-sm border-solid border border-gray-100">
        <figure className="px-10 pt-10">
          <img
            src={classichaircut}
            alt="Man getting haircut"
            width="5184"
            height="3456"
            loading="lazy"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">Classic Haircut</h2>
          <p className="text-lg font-bold"> 
           Price: R75
          </p>
        </div>
      </motion.div>
      <motion.div whileHover={{y: -10}} className="card bg-base-100 w-96 shadow-sm border-solid border border-gray-100">
        <figure className="px-10 pt-10">
          <img
            src={kidscut}
            alt="Man getting buzz cut"
            width="4794"
            height="3835"
            loading="lazy"
            className="rounded-xl h-[30vh]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">Kids Haircut</h2>
          <p className="text-lg font-bold"> 
           Price: R65
          </p>
        </div>
      </motion.div>
      <motion.div whileHover={{y: -10}} className="card bg-base-100 w-96 shadow-sm border-solid border border-gray-100">
        <figure className="px-10 pt-10">
          <img
            src={premiumhaircut}
            alt="Cutting electric scissors"
            width="5760"
            height="3840"
            loading="lazy"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">Premium Haircut</h2>
          <p className="text-lg font-bold"> 
           Price: R100
          </p>
        </div>
      </motion.div>
      <motion.div whileHover={{y: -10}} className="card bg-base-100 w-96 shadow-sm border-solid border border-gray-100">
        <figure className="px-10 pt-10">
          <img
            src={chiskop}
            alt="Chiskop scissors"
            width="6240"
            height="4160"
            loading="lazy"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">Bald Haircut</h2>
          <p className="text-lg font-bold"> 
           Price: R50
          </p>
        </div>
      </motion.div>
    </section>
    </Fragment>
  );
}

export default ServicesPage;
