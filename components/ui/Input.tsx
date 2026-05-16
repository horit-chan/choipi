'use client';

import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, error, ...rest }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const isPasswordField = type === 'password';
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    const actualType = isPasswordField && isPasswordVisible ? 'text' : type;

    return (
      <div className="mb-6">
        <label className="mb-0.5 flex text-sm">{label}</label>

        <div
          className={`relative w-full rounded-sm border border-gray-300 focus:outline-2 focus:outline-offset-2 focus:outline-orange-500 ${error ? 'border-red-500' : 'border-gray-50'}`}
        >
          <input
            type={actualType}
            ref={ref}
            {...rest}
            className={`w-full px-2 py-1.5 ${isPasswordField ? 'pr-10' : ''}`}
          />

          {isPasswordField && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="aria-label=aaa absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
            >
              {isPasswordVisible ? <Eye /> : <EyeOff />}
            </button>
          )}
        </div>

        {error && (
          <p className="mt-2 rounded-sm bg-red-100 px-2 py-1 text-left text-sm font-semibold text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
