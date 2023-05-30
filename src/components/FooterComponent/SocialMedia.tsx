import React from "react"

import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { GrMail } from "react-icons/gr"

const SocialMedia = ({ classes }) => {
  return (
    <div className={`${classes}`}>
      <div className="mx-8 flex justify-around py-4 md:mx-auto md:max-w-md">
        <a
          href="https://www.facebook.com/profile.php?id=100092903240260"
          target="_blank"
          aria-label="Facebook"
          rel="noreferrer"
        >
          <FaFacebookF className="footerIcons" />
        </a>
        <a
          href="https://instagram.com/greeceeventspc"
          target="_blank"
          aria-label="Instagram"
          rel="noreferrer"
        >
          <FaInstagram className="footerIcons" />
        </a>
        <a
          href="mailto:adventurefuntours.dr@gmail.com"
          aria-label="Gmail"
          rel="noreferrer"
        >
          <GrMail className="footerIcons" />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
