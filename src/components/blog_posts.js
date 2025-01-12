import React from 'react'
import { Link } from "gatsby"

const BlogPosts = ({posts}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4'>
      {posts && posts.map((item) => {
        const imageUrl = item.raw.cover.type === 'external' ? item.raw.cover.external.url : item.raw.cover.file.url
        return (<Link to={'/blog/articles/' + item.properties.Slug.value} key={item.id} className='blog-card rounded-md'>
          <div className='w-full aspect-video overflow-hidden rounded-t-md'>
            <img
              className='w-full h-full object-cover'
              src={imageUrl}
              alt={item.title}
            />
          </div>
          <div className='px-3 py-4'>
            <p className='inline-block text-base truncate w-full'>{item.title}</p>
            <p className='mt-1 text-xs'>
              <span className='inline-block px-2 py-1 rounded-lg text-xs mr-2 border border-white/10 blog-card'>
                {item.properties.Category.value.name}
              </span>
              {item.properties.Date.value.start}
            </p>
          </div>
        </Link>)
      })}
    </div>
  )
}

export default BlogPosts
