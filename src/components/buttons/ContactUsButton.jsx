
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ContactUsButton = ({ 
  text = "Contact Us", 
  onClick = () => {}, 
  className = "",
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative inline-flex items-center justify-between
         hover:bg-blue-500 
        rounded-full 
        px-6 py-2
        transition-all duration-300 ease-in-out
        border border-gray-200 hover:border-gray-300
        shadow-sm hover:shadow-md
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      <span className="text-gray-800 font-medium text-sm pr-3 group-hover:text-gray-900 transition-colors duration-200">
        {text}
      </span>
      
      <div className="
        bg-blue-500 hover:bg-blue-600
        w-8 h-8 
        rounded-full 
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        group-hover:scale-110
        shadow-sm
      ">
        <ArrowRight 
          className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-0.5" 
        />
      </div>
    </button>
  );
};