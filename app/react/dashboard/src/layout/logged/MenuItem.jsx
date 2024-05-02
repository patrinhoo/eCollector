import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

export const MenuItem = ({ title, url, icon, lastItem = false }) => {
  return (
    <div
      className={classNames('tw-py-4 tw-font-semibold', {
        'tw-pb-24': lastItem,
      })}
    >
      <Link to={url}>
        <div className='tw-cursor-pointer tw-text-gray-dark hover:tw-text-gray-mediumDark tw-text-left tw-pl-8'>
          <span className='tw-mr-3'>{icon}</span>
          {title}
        </div>
      </Link>
    </div>
  );
};
