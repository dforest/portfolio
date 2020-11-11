import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/d_forest" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/dforest" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="#posts" className="icon fa-rss">
            <span className="label">Blogs</span>
          </a>
        </li>
        {/* <li>
          <a href="#" className="icon fa-envelope-o">
            <span className="label">Contacts</span>
          </a>
        </li> */}
      </ul>
      <ul className="copyright">
        <li>
          © Keita Mori
        </li>
        <li>
          Design based on <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
