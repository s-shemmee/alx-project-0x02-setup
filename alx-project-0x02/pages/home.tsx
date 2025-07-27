import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts([...posts, post]);
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <button onClick={() => setModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
          Add Post
        </button>
        <PostModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onAddPost={handleAddPost} />
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
          <Card title="Card 1" content="This is the content for card 1." />
          <Card title="Card 2" content="This is the content for card 2." />
          <Card title="Card 3" content="This is the content for card 3." />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
