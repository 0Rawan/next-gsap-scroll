import React from "react";
import { FaGithub, FaFile  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="work-container">
        <p className="work-title">What&apos;s next?</p>
        <p className="work-description">//Let&apos;s contact, for the next step</p>
      </div>
      <div class="footer-container">
        <a
          href="https://www.linkedin.com/in/rawan-mustafa-087725140/"
          class="btn-1"
        >
          <FaLinkedin /> linkedin
        </a>
        <a href="https://github.com/0Rawan" class="btn-2">
        <FaGithub /> Github
        </a>
        <a href="mailto:00rawan.kamal@gmail.com" class="btn-3">
        <MdEmail /> Email
        </a>
        <a href="assets/RawanMustafaResume.pdf" download class="btn-4">
        <FaFile />  Resume
        </a>
      </div>
    </footer>
  );
}

export default Footer;
