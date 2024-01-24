import React from 'react';

interface AnnouncementBarProps {
  message: string;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ message }) => {
  return (
    <div className="text-md items-center justify-center bg-announcement px-4 py-2 text-center text-white">
      {message}
    </div>
  );
};

export default AnnouncementBar;
