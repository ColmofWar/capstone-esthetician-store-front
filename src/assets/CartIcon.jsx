import React from 'react';

export default function CartIcon({ className = '', size = 20, title }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      role={title ? 'img' : 'img'}
      aria-hidden={title ? 'false' : 'true'}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 3h2l1.68 9.39A2 2 0 0 0 8.64 14h8.72a2 2 0 0 0 1.96-1.61L22 6H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="20" r="1" fill="currentColor" />
      <circle cx="18" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}
