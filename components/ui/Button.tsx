'use client';

import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="mt-8 w-full rounded-full bg-orange-300 py-4 hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-orange-500 active:bg-orange-600"
    >
      {children}
    </button>
  );
};
