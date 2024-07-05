// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, topic, imageUrl, avatarUrl, title, avathor} = blogItem
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-item">
        <img src={imageUrl} className="blog-img" alt={`item${id}`} />

        <div className="blog-info">
          <p>{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avathor-con">
            <img src={avatarUrl} className="avathor" alt={`avatar${id}`} />
            <p className="">{avathor}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
