import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const LinksComponent = ({ name, url, description, image, textColor }) => {
  return (
    <Link
      to={url}
      className="no-underline flex flex-col items-center cursor-pointer text-center flex-[1_1_0px] min-h-[25rem]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 3,
          delay: 0.3,
        }}
        className="flex flex-col justify-center items-center lg:h-64 xl:h-80 lg:justify-around"
      >
        <h2
          className={`text-lg md:text-xl xl:text-2xl md:mb-2 uppercase ${textColor} font-semibold`}
        >
          {name}
        </h2>
        <div className="h-52 w-52 xl:h-60 xl:w-60 my-2 rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-52 w-52 xl:h-60 xl:w-60 object-cover rounded-full hover:scale-125 hover:brightness-50 transition-all duration-300"
          />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 3,
          delay: 0.3,
        }}
        className={`text-sm text-secondary-color font-extralight leading-6 font-serif mx-16 lg:mx-8 md:max-w-sm md:text-lg xl:mt-4 h-[7.5rem] md:h-[8rem] lg:h-[12rem] flex justify-center items-center lg:items-start lg:mt-3`}
      >
        {description}
      </motion.p>
    </Link>
  )
}

export default LinksComponent
