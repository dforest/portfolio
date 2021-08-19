import React from 'react'
import PropTypes from 'prop-types'
import hostName from '../../Common'

const GalleryItem = ({id, image, tags, date, caption, description, links}) => {

  const formatDate = (date) => {
    return `
    ${(date.getMonth()+1).toString().padStart(2, '0')}
    .${date.getFullYear()}
    `.replace(/\n|\r|\s/g, '');
  }

  return (<article className="row 75% work-item">
    <div className="12u date">
      <p>{formatDate(date)}</p>
    </div>
    <div className="6u image col">
    <img src={image} />
    </div>

    <div className="6u col">
      <h3>{caption}</h3>
      {
        tags && (<ul className="tags">
          {tags.map((tag) => {
            return (<li key={id+tag} className="tag">#{tag}</li>)
          })}
        </ul>)
      }
      <p className="description">{description}</p>
      {
        links && (<ul className="links">
          {links.map((link, i) => {
            return (<li key={id+"link"+i} className="link">
              <a href={link} className="icon fa-external-link">
                <span className="label">{hostName(link)}</span>
              </a>
            </li>)
          })}
        </ul>)
      }
    </div>
    </article>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default GalleryItem
