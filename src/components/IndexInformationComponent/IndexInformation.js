import React from "react"
import TextComponent from "../TextComponent/TextComponent"
import { Link } from "gatsby"

const IndexInformation = ({ indexInformation }) => {
  return (
    <div className=" bg-primary-color py-5 md:py-20 md:px-32">
      {indexInformation && (
        <>
          <h1 className="text-lg mb-2 mx-2 text-center font-extralight uppercase">
            {indexInformation.title2}
          </h1>
          <TextComponent
            title={indexInformation.title3}
            paragraph={indexInformation.paragraph1.paragraph1}
            className="uppercase"
          />
          <TextComponent
            paragraph={indexInformation.paragraph2.paragraph2}
            className=""
          />
          <TextComponent
            paragraph={indexInformation.paragraph3.paragraph3}
            className=""
          />
          <div className="flex justify-center items-center">
            <button className="w-32 lg:w-36 text-xs bg-black hover:opacity-75 text-white py-4 px-3 lg:py-5 lg:px-4 rounded-sm mt-10 md:mt-12 uppercase font-bold">
              <Link to="/contact">{indexInformation.button}</Link>
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default IndexInformation
