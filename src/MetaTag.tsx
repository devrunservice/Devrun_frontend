import React from "react";
import { Helmet } from "react-helmet-async";
import Logo from "asset/images/Logo.png";


interface MetaTags {
  content: string;
  title: string;
  description: string;
  img: string;
  url: string;
}

const MetaTag = (props: MetaTags) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>DevRun</title>
    <meta property="keywords" content={props.content} data-rh="true" />
    <meta property="name" content={props.title} data-rh="true" />
    <meta property="description" content={props.description} data-rh="true" />
    <meta property="image" content={props.img} data-rh="true" />
    <meta property="og:site_name" content={props.title} data-rh="true" />
    <meta property="og:url" content={props.url} data-rh="true" />
    <meta property="og:title" content={props.title} data-rh="true" />
    <meta property="og:type" content="website" />
    <link href={props.url} rel="canonical" data-rh="true" />
    <meta property="og:image" content={props.img || Logo} data-rh="true" />
    <meta property="og:description" content={props.content} data-rh="true" />
    <meta property="twitter:title" content={props.title} data-rh="true" />
    <meta
      property="twitter:description"
      content={props.description}
      data-rh="true"
    />
    <meta property="twitter:image" content={props.img || Logo} data-rh="true" />
  </Helmet>
);

export default MetaTag;
