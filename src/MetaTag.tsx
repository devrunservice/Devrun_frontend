import React from "react";
import { Helmet } from "react-helmet-async";
import Logo from "asset/images/Logo.png";


const MetaTag = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>devrun</title>
    <meta property="keywords" content="" data-rh="true" />
    <meta property="name" content="devrun" data-rh="true" />
    <meta
      property="description"
      content="예비 개발자를 위한 강의사이트입니다."
      data-rh="true"
    />
    <meta property="image" content={Logo} data-rh="true" />
    <meta property="og:site_name" content="devrun" data-rh="true" />
    <meta property="og:url" content="/" data-rh="true" />
    <meta property="og:title" content="devrun" data-rh="true" />
    <meta property="og:type" content="website" />
    <link href="/" rel="canonical" data-rh="true" />
    <meta property="og:image" content={Logo} data-rh="true" />
    <meta
      property="og:description"
      content="예비 개발자를 위한 강의사이트입니다."
      data-rh="true"
    />
    <meta property="twitter:title" content="devrun" data-rh="true" />
    <meta
      property="twitter:description"
      content="예비 개발자를 위한 강의사이트입니다."
      data-rh="true"
    />
    <meta property="twitter:image" content={Logo} data-rh="true" />
  </Helmet>
);

export default MetaTag;
