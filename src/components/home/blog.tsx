import { motion } from "framer-motion";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";

const BlogSection = () => {
  const blogPosts = [
    {
      image: blog1,
      title:
        "Business Growth Initiative for Startups (BGIS) Launches With 15 Founders",
      link: "https://msmeafricaonline.com/business-growth-initiative-for-startups-bgis-launches-with-15-founders/",
    },
    {
      image: blog2,
      title: "Beyond Logos and Likes: Brand Building as a Startup’s Superpower",
      link: "#",
    },
    {
      image: blog3,
      title: "BGIS Kicks Off With a Call to Growth and Scale for Female Founders ",
      link: "#",
    },
    {
      image: "/images/image_4.png",
      title: "BGIS event - meet the judges for the event",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-[#F6F9FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-helvetica-neue-bold text-center text-[#151D48] mb-12">
          Stay Updated
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-lg overflow-hidden shadow-md group block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
            
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
              />

            
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View Post</span>
              </div>

           
              <div className="p-2 absolute bottom-0 bg-gradient-to-b from-[#143c640b] via-[#143c64cc] to-[#143C64] text-white h-32 flex items-center text-sm w-full">
                <h3 className="text-navy-900 font-medium self-end">
                  {post.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

