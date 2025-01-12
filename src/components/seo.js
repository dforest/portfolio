import React from "react"
import { useLocation } from "@reach/router"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, imageUrl, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const location = useLocation()


  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: imageUrl || `${siteUrl}${image}`,
    url: `${siteUrl}${location.pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta http-equiv="content-language" content="ja" />
      <meta name="description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      {children}
    </>
  )
}
