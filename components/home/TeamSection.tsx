import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faFacebookF,
    faInstagram,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TeamMember } from '@/models/TeamMember';

const teamMembers: TeamMember[] = [
    {
        name: "Mrs. nanyombi Rehema Golooba",
        socials: {
            facebook: "",
            linkedin: "",
            twitter: "",
            instagram: "",

        },
        picture: "/img/team/mrs-rehema.jpeg",
        designation: "Chief Executive Officer"
    },
    {
        name: "Mr. Golooba Haruna",
        socials: {
            facebook: "",
            linkedin: "",
            twitter: "",
            instagram: "",

        },
        picture: "/img/team/mr-haruna.jpeg",
        designation: "Director"
    },
    {
        name: "Mr. Kalitwe Abdu",
        socials: {
            facebook: "",
            linkedin: "",
            twitter: "",
            instagram: "",

        },
        picture: "/img/team/mr-karitwe-abdul.jpeg",
        designation: "Tour Officer"
    }
]
const TeamSection = () => {
    const socialIcons: Record<string, IconDefinition> = {
        twitter: faTwitter,
        facebook: faFacebookF,
        instagram: faInstagram,
        linkedin: faLinkedinIn,
    };

    return (
        <div className="w-full py-5" id="team">
            <div className="max-w-[1140px] mx-auto px-[15px] pt-5 pb-3 text-center">
                <h6
                    className="text-[#7AB730] uppercase mb-2 text-base font-medium leading-[1.2]"
                    style={{ letterSpacing: 5 }}
                >
                    Guides
                </h6>
                <h1 className="mb-2 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-medium leading-[1.2] text-[#212121]">
                    Our Team
                </h1>
                <div className="flex flex-wrap -mx-[15px]">
                    {teamMembers.map((teamMember) => (
                        <div key={teamMember.name} className="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full px-[15px] pb-2">
                            <div className="group bg-white mb-4 transition-[box-shadow_0.5s] shadow-[0_0_30px_#CCCCCC]">
                                <div className="relative overflow-hidden">
                                    <img
                                        className="max-w-full w-full h-auto transition-transform duration-500 group-hover:scale-[1.2]"
                                        src={teamMember.picture}
                                        alt={teamMember.name}
                                    />
                                    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center transition-[background-color_0.5s]">
                                        {Object.keys(socialIcons).map((icon, idx) => (
                                            <a key={idx}
                                                className="invisible group-hover:visible inline-flex items-center justify-center w-[36px] h-[36px] text-center border border-[#7AB730] text-[#7AB730] mr-2 transition-all duration-150 hover:bg-[#7AB730] hover:text-white"
                                                href="#"
                                                style={{
                                                    transitionDelay: `${idx * 0.05}s`
                                                }}
                                            >
                                                <FontAwesomeIcon icon={socialIcons[icon]} />
                                            </a>

                                        ))}
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="mb-2 text-[1.25rem] font-medium leading-[1.2] text-[#212121] overflow-hidden text-ellipsis whitespace-nowrap">
                                        {teamMember.name}
                                    </h5>
                                    <p className="m-0 text-[#6c757d]">{teamMember.designation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;