import Image from "next/image";
import { BlogPost } from "@/models/BlogPost";

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Gorilla Tracking",
        author: "Admin",
        category: "Travel Tips",
        date: { day: "12", month: "Nov" },
        image: "/img/blog/gorilla-trekking.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "Gorilla Trekking in Bwindi: What You Need to Know",
        author: "Admin",
        category: "Adventure",
        date: { day: "20", month: "Oct" },
        image: "/img/scenery.jpeg",
        link: "#",
    },
    {
        id: 3,
        title: "Munyaga Waterfalls",
        author: "Admin",
        category: "Culture & Adventure",
        date: { day: "05", month: "Sep" },
        image: "/img/tourist-swimming.jpeg",
        link: "#",
    },
];


const BlogSection = () => (
    <div className="w-full py-12" id="blog">
        <div className="max-w-[1140px] mx-auto px-4 pt-12 pb-4 text-center">
            <h6 className="text-[#7AB730] uppercase tracking-[5px] font-medium text-base mb-2">
                Our Blog
            </h6>
            <h1 className="text-[2.5rem] font-bold leading-[1.2] text-[#212121] mb-8">
                Latest From Our Blog
            </h1>

            <div className="flex flex-wrap -mx-4 pb-4">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 pb-2"
                    >
                        <div className="blog-item shadow-[0_0_30px_#CCCCCC] transition-shadow duration-500">
                            <div className="relative">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="blog-date absolute top-[30px] -left-[15px] w-[60px] h-[45px] flex flex-col items-center justify-center bg-[#7AB730] text-white">
                                    <h6 className="font-bold -mb-1 text-base leading-[1.2]">
                                        {post.date.day}
                                    </h6>
                                    <small className="text-white uppercase text-[80%]">
                                        {post.date.month}
                                    </small>
                                </div>
                            </div>

                            <div className="bg-white p-6">
                                <div className="flex mb-2 justify-center items-center">
                                    <a
                                        className="text-[#7AB730] uppercase no-underline text-[#656565] hover:text-[#527a20] transition-colors"
                                        href="#"
                                    >
                                        {post.author}
                                    </a>
                                    <span className="text-[#7AB730] px-2">|</span>
                                    <a
                                        className="text-[#7AB730] uppercase no-underline text-[#656565] hover:text-[#527a20] transition-colors"
                                        href="#"
                                    >
                                        {post.category}
                                    </a>
                                </div>
                                <a
                                    className="text-xl font-medium m-0 no-underline text-[#212121] hover:text-[#7AB730] transition-colors block leading-[1.2]"
                                    href={post.link}
                                    title={post.title}
                                >
                                    <p className="line-clamp-1" title={post.title}>{post.title}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <style jsx>{`
            .blog-date::after {
                position: absolute;
                content: "";
                width: 0;
                height: 0;
                top: -15px;
                left: 0;
                border: 8px solid;
                border-color: transparent #5f8f25 #5f8f25 transparent;
                z-index: -1;
            }
        `}</style>
    </div>
);

export default BlogSection;