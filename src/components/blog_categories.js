import React from 'react'
import { Link } from 'gatsby'

import formatCategory from '../utils/formatCategory'


const BlogCategories = ({categories, location}) => {
  return (
    <ul className='flex flex-wrap gap-4'>
    <li>
      <Link to="/blog" className={'p-2 rounded-md hover:bg-white/5 ' + (location.pathname === '/blog/' ? 'bg-white/5 text-white-700' : '')}>
        ✨ All
      </Link>
    </li>
    {categories.map((category) => (
      <li key={category.pathName}>
        <Link
          to={`/blog/categories/${formatCategory(category.pathName)}`}
          className={'p-2 rounded-md hover:bg-white/5 ' + (location.pathname === `/blog/categories/${category.pathName}/` ? 'bg-white/5 text-white-700' : '')}
        >
          {category.name}
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default BlogCategories
