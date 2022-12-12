import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="138" cy="126" r="126" />
    <rect x="2" y="275" rx="0" ry="0" width="280" height="24" />
    <rect x="0" y="319" rx="0" ry="0" width="280" height="85" />
    <rect x="2" y="422" rx="0" ry="0" width="90" height="27" />
    <rect x="147" y="415" rx="0" ry="0" width="132" height="40" />
  </ContentLoader>
);
