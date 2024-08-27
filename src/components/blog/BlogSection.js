// src/components/BlogSection.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../../blogPosts.json'; // Adjust the path if needed

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPosts);
  }, []);

  return (
    <section className="what-i-do" id="blog">
        {/* Heading */}
        <div className="heading-container">
          <h2 className='text-light'>Blog</h2>
          <p>My Blog Posts<span className="heading-separator-line"></span></p>
        </div>
        {/* Heading end */}
      <div className="services-grid">
        {posts.slice(0, 3).map((post) => (
          <div key={post.id} className="blog-item">
            <Link to={`/blog/${post.id}`}>
              <div className="blog-image" style={{ backgroundImage: `url(${post.image})` }}></div>
              <div className="card-content">
              <p><span className="category">{post.category}</span></p>
                <h4>{post.title}</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="view-all">
        <Link to="/blog" className="back-button">View All Posts</Link>
      </div>
    </section>
  );
};

export default BlogSection;
