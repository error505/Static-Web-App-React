// src/components/BlogPost.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactPlayer from 'react-player';
import ReactMarkdown from 'react-markdown';
import blogPosts from '../../blogPosts.json';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const post = blogPosts.find((post) => post.id === id);
    setPost(post);
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      {post.content.map((section, index) => {
        switch (section.type) {
          case 'paragraph':
            return <p key={index}>{section.text}</p>;
          case 'heading':
            return React.createElement(`h${section.level}`, { key: index }, section.text);
          case 'list':
            return (
              <ul key={index} className={section.class || ''}>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case 'image':
            return <img key={index} src={section.src} alt={section.alt} />;
          case 'quote':
            return (
              <blockquote key={index} className="quote">
                <p>{section.text}</p>
                <footer>— {section.author}</footer>
              </blockquote>
            );
          case 'code':
            return (
              <SyntaxHighlighter key={index} language={section.language} style={solarizedDarkAtom}>
                {section.text}
              </SyntaxHighlighter>
            );
          case 'link':
            return (
              <p key={index}>
                <a href={section.href} target="_blank" rel="noopener noreferrer">
                  {section.text}
                </a>
              </p>
            );
            case 'video':
              return (
                <div key={index} className="video-wrapper">
                  <ReactPlayer url={section.src} controls={section.controls || true} />
                </div>
              );
              case 'markdown':
                return <ReactMarkdown key={index}>{section.text}</ReactMarkdown>;
              default:
                return null;
            }
      })}
      <div className="blog-comments-section">
        <div id="disqus_thread"></div>
        <script>
          {(function() {  
            var d = document, s = d.createElement('script');
            s.src = 'https://3wmthemes.disqus.com/embed.js'; 
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
          })()}
        </script>
        <noscript>
          Please enable JavaScript to view the 
          <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a>
        </noscript>
      </div>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default BlogPost;
