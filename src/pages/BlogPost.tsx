import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';
import { type BlogPost } from './Blog';
import NotFoundPage from '../components/NotFoundPage';

// تعریف نوع ContentItem
type ContentItem =
  | { type: 'text'; value: string }
  | { type: 'image'; value: string; alt?: string }
  | { type: 'table'; value: { headers: string[]; rows: string[][] } };

const renderContent = (item: ContentItem, index: number) => {
  switch (item.type) {
    case 'text':
      return (
        <p
          key={index}
          className="text-gray-700 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: item.value }}
        />
      );
    case 'image':
      return (
        <img
          key={index}
          src={item.value}
          alt={item.alt || ''}
          loading="lazy"
          className="w-full h-auto rounded-xl my-6 shadow-md"
        />
      );
    case 'table':
      return (
        <table key={index} className="w-full border-collapse my-6">
          <thead>
            <tr>
              {item.value.headers.map((header, i) => (
                <th
                  key={i}
                  className="border border-gray-300 p-3 bg-stone text-white font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {item.value.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="border border-gray-300 p-3 text-gray-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    default:
      return null;
  }
};

function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const response = await import('../../src/posts/blogs.json');
        const rawPosts = response.default as unknown;
        if (Array.isArray(rawPosts)) {
          const posts: BlogPost[] = rawPosts;
          const selectedPost = posts.find((p) => p.id === parseInt(id || '0'));
          setPost(selectedPost || null);
        } else {
          throw new Error('Invalid JSON structure');
        }
      } catch (error) {
        console.error('Error loading post:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gold"></div>
      </div>
    );
  }

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12 pt-24 bg-gray-100 font-vazir"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gold hover:text-stone mb-6 transition-colors"
      >
        <ArrowRight className="w-5 h-5" />
        بازگشت به بلاگ
      </button>
      <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-stone mb-6"
        >
          {post.title}
        </motion.h1>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4 text-gold" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gold" />
              {post.date}
            </span>
          </div>
          <span className="bg-gold text-white px-4 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-auto rounded-xl mb-8 shadow-md"
        />
        <div className="prose prose-lg max-w-none">
          {post.content.length > 0 ? (
            (post.content as ContentItem[]).map((item, index) => renderContent(item, index))
          ) : (
            <p className="text-gray-700">{post.excerpt}</p>
          )}
        </div>
      </article>
    </motion.div>
  );
}

export default BlogPost;