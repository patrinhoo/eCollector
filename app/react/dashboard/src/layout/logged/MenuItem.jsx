import React from 'react';
import { Link } from 'react-router-dom';

export const MenuItem = ({ title, url, icon }) => {
  return (
    <div className='tw-py-4 tw-font-semibold'>
      <Link to={url}>
        <div className='tw-cursor-pointer tw-text-gray-dark hover:tw-text-gray-mediumDark tw-text-left tw-pl-8'>
          <span className='tw-mr-3'>{icon}</span>
          {title}
        </div>
      </Link>
    </div>
  );
};
