import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center 
        items-center mt-5">
          {/* THE COOL DOT!!!! */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          {/* THE COOL LINE!!!!! */}
          <div className="w-1 sm:h-80 h-40
          violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Markus
           </span></h1>
           {/* DESCRIPTION!!!!!!!!!!!!!!!!!!! OF ME!!!!!!!! */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Collaborative and eager-to-learn 
            <br className="sm:block hidden"/> undergraduate student looking 
            <br className="sm:block hidden"/> to utilize my knowledge in 
            <br className="sm:block hidden"/> computer science to gain experience 
            <br className="sm:block hidden"/> through a Web development 
            <br className="sm:block hidden"/> or software development internship.
            </p>
        </div>
      </div>
      
      <ComputersCanvas />
    </section>
  )
}

export default Hero