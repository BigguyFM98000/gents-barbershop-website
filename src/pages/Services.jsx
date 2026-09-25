import { Fragment } from "react";
import beardtrim from "../assets/allef-vinicius-unsplash.webp";
import beardcut from "../assets/antonio-reynoso-unsplash.webp";
import classichaircut from "../assets/michael-demoya-unsplash.webp";
import kidscut from "../assets/sinval-carvalh-unsplash.webp";
import premiumhaircut from "../assets/andrea-donato-unsplash.webp";
import chiskop from "../assets/stefan-schauberger-unsplash.webp";
import { motion } from "motion/react";

function ServicesPage() {
  return (
    <Fragment>
        <h2 className="py-6 text-center text-3xl text-bold sm:text-4xl">Our Services.</h2>
    <section className="flex flex-row flex-wrap items-center justify-around gap-6 py-6">
      <motion.div whileHover={{y: -10}} className="card w-full max-w-96 bg-base-900 shadow-sm border-solid border-2 border-gray-100">
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
      <motion.div whileHover={{y: -10}} className="card w-full max-w-96 bg-base-100 shadow-sm border-solid border-2 border-gray-100">
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
      <motion.div whileHover={{y: -10}} className="card w-full max-w-96 bg-base-100 shadow-sm border-solid border border-gray-100">
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
      <motion.div whileHover={{y: -10}} className="card w-full max-w-96 bg-base-100 shadow-sm border-solid border border-gray-100">
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
      <motion.div whileHover={{y: -10}} className="card w-full max-w-96 bg-base-100 shadow-sm border-solid border border-gray-100">
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
      <motion.div whileHover={{y: -10}} className="card w-full max-w-96 bg-base-100 shadow-sm border-solid border border-gray-100">
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
