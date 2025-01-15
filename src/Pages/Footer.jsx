import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div id="footer" className="bg-dark1 pt-4 sm:pt-10 lg:pt-12">
        <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-b border-gray-900 py-6 md:flex-row">
            <div>
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
                <li>
                  <Link>Privacy Policy</Link>
                </li>
                <li>
                  <Link>Support</Link>
                </li>
                <li>
                  <Link>Terms of service</Link>
                </li>
                <li>
                  <Link>Cancellation and Refund</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaGithub />
                </li>
              </ul>
            </div>
          </div>

          <div className="py-8 text-center text-sm text-gray-400">
          © 2024 - Present QuickBuy. All rights reserved.
          </div>

        </footer>
      </div>
    </>
  );
}

export default Footer;
