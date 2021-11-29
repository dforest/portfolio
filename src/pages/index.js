import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Posts from '../components/Posts'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Mkit lab.'
  const siteDescription = 'Keita Mori / App Engineer, This is my portfolio.'
  const siteUrl =  'https://mkitlab.com'
  const siteImage =  '/images/og_image.png'
  const twitterUserName = '@d_forest'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta http-equiv="content-language" content="ja" />
        <meta name="description" content={siteDescription} />
        <meta name="og:image" content={siteUrl + siteImage} />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:description" content={siteDescription} />
        <meta name="og:url" content={siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterUserName} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteUrl + siteImage} />
      </Helmet>

      <div id="main">
        {/* <section id="bio">
          <h2>Bio</h2>
          <p>
            大学卒業後、ワークスアプリケーションズ、株式会社奇兵隊の取締役CPOを経て、2019年にPARTYに参加。Androidアプリとバックエンドを中心に、幅広い技術を使って開発を行う。UX設計やグロースなど、サービスを一貫して設計・開発することを得意とする。
          </p>

        </section> */}
        <h2>Works</h2>
        <section id="works">

          <Gallery />

        </section>

        <h2 id="posts-header">Recent Posts</h2>
        <section id="posts">

          <Posts />

        </section>

        {/* <section id="contacts">
          <h2>Get In Touch</h2>
          <p>
            お仕事の依頼などありましたらご連絡ください。
          </p>
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-envelope-o">
                <span className="label">Email</span>
              </h3>
              info👻mkit.lab
            </li>
          </ul>
        </section> */}
      </div>
    </Layout>
  )
}

export default HomeIndex
