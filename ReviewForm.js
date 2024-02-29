import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!author.trim() || !content.trim()) return;
        addReview({ author, content });
        setAuthor('');
        setContent('');
    };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          
        />
      </div>
      <div>
        <textarea
          placeholder="Write your review here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;