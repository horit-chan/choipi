'use client';

import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

export const Input = ({ label, ...rest }: ButtonProps) => {
  return (
    <div className="mb-4">
      <label className="flex text-sm">{label}</label>
      <input
        {...rest}
        className="w-full rounded-sm border border-gray-300 px-2 py-1.5 focus:outline-2 focus:outline-offset-2 focus:outline-orange-500"
      ></input>
    </div>
  );
};
