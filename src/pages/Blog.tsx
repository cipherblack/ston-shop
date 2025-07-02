import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, ArrowLeft } from 'lucide-react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  content: Array<{
    type: 'text' | 'image' | 'table';
    value: string | { headers: string[]; rows: string[][] };
    alt?: string;
  }>;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await import('../../src/posts/posts.json');
        setPosts(response.default as BlogPost[]);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    };
    loadPosts();
  }, []);

  return (
    <div className="">
      <div className="relative py-24 overflow-hidden ">
        <div className="absolute inset-0 ">
          <img
            src="/image/blog-7.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b  to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6"> بلاگ صنایع سنگ آوش </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              آخرین مقالات و اخبار دنیای سنگ‌های ساختمانی
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 "
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="relative aspect-video overflow-hidden ">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-3 hover:text-orange-400 transition-colors ">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 hover:text-orange-600">
                            <User className="w-4 h-4 " />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1 hover:text-orange-600">
                            <Clock className="w-4 h-4" />
                            {post.date}
                          </span>
                        </div>
                        <span className="flex items-center text-orange-600 font-medium hover:gap-2 transition-all">
                          ادامه مطلب
                          <ArrowLeft className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
            ) : (
              <div className="text-center text-gray-600">در حال بارگذاری پست‌ها...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;