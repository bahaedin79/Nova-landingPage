import { useParams, Link } from 'react-router-dom';

const blogData = [
  {
    id: 1,
    title: 'Exploring the Alps',
    date: 'July 29, 2024',
    summary:
      'A breathtaking journey through the stunning landscapes of the Swiss Alps. Discover hidden trails and serene lakes.',
    author: 'Alex Johnson',
    image: '/images/portfolio/books/books-1.jpg',
    content: 'Full content of the blog post about the Alps...',
  },
  {
    id: 2,
    title: 'The Art of Minimalist Design',
    date: 'July 22, 2024',
    summary: 'Learn how to create beautiful and functional designs by embracing the "less is more" philosophy.',
    author: 'Samantha Carter',
    image: '/images/portfolio/branding/branding-1.jpg',
    content: 'Full content of the blog post about minimalist design...',
  },
  {
    id: 3,
    title: 'A Guide to Sustainable Living',
    date: 'July 15, 2024',
    summary: 'Simple yet effective ways to reduce your carbon footprint and live a more eco-friendly lifestyle.',
    author: 'Eco Warrior',
    image: '/images/portfolio/apps/app-2.jpg',
    content: 'Full content of the blog post about sustainable living...',
  },
  {
    id: 4,
    title: 'The Future of Mobile Apps',
    date: 'July 8, 2024',
    summary: 'Exploring the latest trends in mobile application development and what to expect in the coming years.',
    author: 'Jane Doe',
    image: '/images/portfolio/apps/app-1.jpg',
    content: 'Full content of the blog post about mobile apps...',
  },
  {
    id: 5,
    title: 'Mastering Product Photography',
    date: 'July 1, 2024',
    summary: 'Tips and tricks for taking stunning product photos that will make your items fly off the shelves.',
    author: 'John Smith',
    image: '/images/portfolio/product/product-1.jpg',
    content: 'Full content of the blog post about product photography...',
  },
  {
    id: 6,
    title: 'Branding for Startups',
    date: 'June 24, 2024',
    summary: 'A comprehensive guide to building a strong brand identity for your new business venture.',
    author: 'Creative Minds',
    image: '/images/portfolio/branding/branding-2.jpg',
    content: 'Full content of the blog post about branding for startups...',
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogData.find(p => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container-fluid py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-heading mb-4">{post.title}</h1>
        <p className="text-sm text-cuGray mb-8">
          <span>{post.date}</span> | <span>By {post.author}</span>
        </p>
        <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
        <div className="mt-8">
          <Link to="/blog" className="text-accent font-semibold hover:underline">
            &larr; Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
