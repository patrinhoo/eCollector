import React from 'react';

import { Logo } from '../common/icons/Logo';
import { User } from '../common/icons/User';

export const NotFound404 = () => {
  return (
    <div
      className='tw-p-8 tw-min-h-screen tw-text-center'
      style={{
        background:
          'linear-gradient(115.87deg, rgba(119, 119, 119, 0.47) 64.48%, rgba(153, 158, 0, 0.47) 117.95%)',
      }}
    >
      <Logo width={150} height={150} />
      <div className='tw-w-fit tw-mx-auto'>
        <User width={250} height={275} />
      </div>

      <div className='tw-font-semibold tw-italic tw-text-gray-mediumDark tw-text-3xl tw-mt-8'>
        PAGE NOT FOUND
      </div>
    </div>
  );
};
