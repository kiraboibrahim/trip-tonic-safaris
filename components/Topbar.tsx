import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Topbar = () => (
    <div className="w-full bg-white pt-3 hidden lg:block">
        <div className="max-w-[1140px] mx-auto px-[15px]">
            <div className="flex flex-wrap -mx-[15px]">
                <div className="lg:w-1/2 w-full px-[15px] text-center lg:text-left mb-2 lg:mb-0">
                    <div className="inline-flex items-center">
                        <p className="m-0">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            triptonicsafaris1999@gmail.com
                        </p>
                        <p className="text-[#656565] px-3 m-0">|</p>
                        <p className="m-0">
                            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> +256 781 306 607
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full px-[15px] text-center lg:text-right">
                    <div className="inline-flex items-center">
                        {[faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube].map((icon, i) => (
                            <Link key={i} className="text-[#7AB730] px-3 hover:text-[#527a20] hover:underline" href="#">
                                <FontAwesomeIcon icon={icon} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Topbar;