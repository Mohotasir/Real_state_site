import { Link } from 'react-router-dom';
import Heading from '../CommonCmpnt/Heading';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: 'Top 12 Tips for Buying Your First Home',
            author: 'John Doe',
            date: 'April 1, 2024',
            image: 'https://i.postimg.cc/kXWHCBCn/Blog-Thumbnail-2-1024x587-1024x585.webp',
            excerpt: 'Are you planning to buy your first home? Here are ten essential tips to guide you through the process and ensure a smooth home-buying experience.'
        },
        {
            id: 2,
            title: 'How to Sell Your House Fast in a Competitive Market',
            author: 'Jane Smith',
            date: 'April 5, 2024',
            image: 'https://i.postimg.cc/QMvgVJgv/download-5.jpg',
            excerpt: 'Selling a house in a competitive market can be challenging. Learn effective strategies to sell your house quickly and maximize your profit.'
        },
        {
            id: 3,
            title: 'The Benefits of Investing in Real Estate',
            author: 'Mike Johnson',
            date: 'April 10, 2024',
            image: 'https://i.postimg.cc/DzGJpksY/download-6.jpg',
            excerpt: 'Real estate investment offers numerous advantages, including passive income, tax benefits, and long-term appreciation. Discover why investing in real estate is a smart financial move.'
        },
        {
            id: 4,
            title: 'Common Mistakes to Avoid When Buying a Home',
            author: 'Emily Brown',
            date: 'April 15, 2024',
            image: 'https://i.postimg.cc/fLBwBBHr/images-4.jpg',
            excerpt: 'Buying a home is a significant decision, and its essential to avoid common pitfalls. Learn about the most common mistakes homebuyers make and how to steer clear of them.'
        },
        {
            id: 5,
            title: 'The Future of Real Estate: Trends to Watch',
            author: 'Alex Wilson',
            date: 'April 20, 2024',
            image: 'https://i.postimg.cc/QMDhDRwz/download-7.jpg',
            excerpt: 'Stay ahead of the curve by exploring the latest trends shaping the future of real estate. From technological advancements to shifting consumer preferences, discover what lies ahead.'
        },
        
    ];
    
    return (
        <div className="container mx-auto px-4 py-8">
           <Heading title="Our Blogs"></Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map(blog => (
                    <div key={blog.id} className="bg-white rounded-lg shadow-md p-6" data-aos="zoom-in" data-aos-duration='2000'>
                        <img className="w-full h-40 object-cover mb-4 rounded-lg" src={blog.image} alt={blog.title} />
                        <h2 className="text-xl font-semibold g-color mb-2">{blog.title}</h2>
                        <p className="text-gray-600 mb-2">Author: {blog.author}</p>
                        <p className="text-gray-600 mb-2">Date: {blog.date}</p>
                        <p className="text-gray-600 font-light">{blog.excerpt}</p>
                        <Link to={`/blog/${blog.id}`} className="block mt-4 g-bg p-2 rounded-md w-[50%] text-center">Read more</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
