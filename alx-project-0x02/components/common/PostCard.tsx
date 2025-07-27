import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{body}</p>
      <p className="text-sm text-gray-500 mt-4">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
