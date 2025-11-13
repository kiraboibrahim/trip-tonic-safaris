import { BlogPost } from "@/models/BlogPost";

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Top Safari Tips for Visiting Queen Elizabeth National Park",
        author: "Admin",
        category: "Travel Tips",
        date: { day: "12", month: "Nov" },
        image: "/img/blog-1.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "Gorilla Trekking in Bwindi: What You Need to Know",
        author: "Admin",
        category: "Adventure",
        date: { day: "20", month: "Oct" },
        image: "/img/blog-2.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "Discover Jinja: The Source of the Nile and Adventure Sports",
        author: "Admin",
        category: "Culture & Adventure",
        date: { day: "05", month: "Sep" },
        image: "/img/blog-3.jpg",
        link: "#",
    },
];

const BlogSection = () => (
    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3 text-center">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Our Blog</h6>
            <h1>Latest From Our Blog</h1>
            <div className="row pb-3">
                {blogPosts.map((post) => (
                    <div key={post.id} className="col-lg-4 col-md-6 mb-4 pb-2">
                        <div className="blog-item">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src={post.image} alt={post.title} />
                                <div className="blog-date">
                                    <h6 className="font-weight-bold mb-n1">{post.date.day}</h6>
                                    <small className="text-white text-uppercase">{post.date.month}</small>
                                </div>
                            </div>
                            <div className="bg-white p-4">
                                <div className="d-flex mb-2 justify-content-center">
                                    <a className="text-primary text-uppercase text-decoration-none" href="#">{post.author}</a>
                                    <span className="text-primary px-2">|</span>
                                    <a className="text-primary text-uppercase text-decoration-none" href="#">{post.category}</a>
                                </div>
                                <a className="h5 m-0 text-decoration-none" href={post.link}>
                                    {post.title}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default BlogSection;
