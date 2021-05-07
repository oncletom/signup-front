import React from 'react';

// Source: https://fonts.google.com/icons?selected=Material+Icons&icon.query=content+copy
const ContentCopyIcon = ({ color = 'var(--theme-dark-text)', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
      fill={color}
    />
  </svg>
);

export default ContentCopyIcon;
