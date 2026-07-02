import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

export function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://www.yny-ai.com/opengraph.jpg',
}: SEOProps) {
  const [location] = useLocation();
  const siteUrl = 'https://www.yny-ai.com';
  
  // Construct absolute canonical URL based on current route if not provided
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : `${siteUrl}${location}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
