import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { SEO } from '../components/seo'


const About = ({location}) => {
  return (
    <Layout
      location={location}
    >
      <h1 className='mt-16 text-6xl font-semibold'>
        Keita MORI.
      </h1>

      <p className='mt-4'>Technical Director, Technical Project Manager, Softwere Engineer and Indie Game Developer.</p>

      <p className='mt-14'>ワークスアプリケーションズのソフトウェアエンジニア、奇兵隊のCPO(Chief Product Officer)を経て現在はPARTYに所属。<br/>
      バックエンド、Androidアプリの設計・開発を中心に、ディレクションからマネジメントまでだいたいなんでもやります。</p>

      <p className='mt-4'>最近、個人でゲーム制作(UE5)をはじめました。</p>

      <p className='mt-4'><Link to='/works'>{'See Works->'}</Link></p>

      <p className='mt-14'>映画、ドラマ、ゲーム、本、料理が好きです。</p>

      <h3 className='mt-6 sub text-2xl'>Video works I like (in part)</h3>
      <ul className='mt-2 px-4 list-disc list-inside space-y-3'>
        <li>Star Wars Ep.1-6</li>
        <li>Spider-Man (2002)</li>
        <li>酔拳2</li>
        <li>Stranger Things</li>
        <li>Ted Lasso</li>
        <li>電脳コイル</li>
      </ul>

      <h3 className='mt-6 sub text-2xl'>Games I like (in part)</h3>
      <ul className='mt-2 px-4 list-disc list-inside space-y-3'>
        <li>Heavy Rain</li>
        <li>Batman: Arkham Asylum</li>
        <li>God of War (2018-)</li>
        <li>Inscryption</li>
        <li>Papers, Please</li>
      </ul>

      <h2 className='sub mt-14'>Contact</h2>
      <p className='mt-4'>DM or reply to me(<a href="https://twitter.com/d_forest" target='_blank' rel='noopener noreferrer'>@d_forest</a>).</p>

    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="About Keita MORI. | Mkit lab."
    description="Keita MORI / Technical Director, Technical Project Manager, Softwere Engineer and Indie Game Developer."
  />
)

export default About
