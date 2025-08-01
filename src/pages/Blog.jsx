const blogData = [
  {
    id: 1,
    title: 'Exploring the Alps',
    date: 'July 29, 2024',
    summary:
      'A breathtaking journey through the stunning landscapes of the Swiss Alps. Discover hidden trails and serene lakes.',
    author: 'Alex Johnson',
    image: '/images/portfolio/books/books-1.jpg',
  },
  {
    id: 2,
    title: 'The Art of Minimalist Design',
    date: 'July 22, 2024',
    summary: 'Learn how to create beautiful and functional designs by embracing the "less is more" philosophy.',
    author: 'Samantha Carter',
    image: '/images/portfolio/branding/branding-1.jpg',
  },
  {
    id: 3,
    title: 'A Guide to Sustainable Living',
    date: 'July 15, 2024',
    summary: 'Simple yet effective ways to reduce your carbon footprint and live a more eco-friendly lifestyle.',
    author: 'Eco Warrior',
    image: '/images/portfolio/apps/app-2.jpg',
  },
  {
    id: 4,
    title: 'The Future of Mobile Apps',
    date: 'July 8, 2024',
    summary: 'Exploring the latest trends in mobile application development and what to expect in the coming years.',
    author: 'Jane Doe',
    image: '/images/portfolio/apps/app-1.jpg',
  },
  {
    id: 5,
    title: 'Mastering Product Photography',
    date: 'July 1, 2024',
    summary: 'Tips and tricks for taking stunning product photos that will make your items fly off the shelves.',
    author: 'John Smith',
    image: '/images/portfolio/product/product-1.jpg',
  },
  {
    id: 6,
    title: 'Branding for Startups',
    date: 'June 24, 2024',
    summary: 'A comprehensive guide to building a strong brand identity for your new business venture.',
    author: 'Creative Minds',
    image: '/images/portfolio/branding/branding-2.jpg',
  },
];

export default function Blog() {
  return (
    <div className="container-fluid py-12">
      <h1 className="text-center text-4xl font-bold text-heading mb-12">Latest from Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-2">
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-heading mb-2">{post.title}</h2>
              <p className="text-sm text-cuGray mb-4">
                <span>{post.date}</span> | <span>By {post.author}</span>
              </p>
              <p className="text-default mb-4">{post.summary}</p>
              <a href="#" className="text-accent font-semibold hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
