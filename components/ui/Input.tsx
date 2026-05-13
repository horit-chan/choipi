'use client';

import { ComponentPropsWithoutRef, forwardRef } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...rest }, ref) => {
  return (
    <div className="mb-6">
      <label className="mb-0.5 flex text-sm">{label}</label>
      <input
        ref={ref}
        {...rest}
        className={`w-full rounded-sm border border-gray-300 px-2 py-1.5 focus:outline-2 focus:outline-offset-2 focus:outline-orange-500 ${error ? 'border-red-500' : 'border-gray-50'}`}
      />
      {error && (
        <p className="mt-2 rounded-sm bg-red-100 px-2 py-1 text-left text-sm font-semibold text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
