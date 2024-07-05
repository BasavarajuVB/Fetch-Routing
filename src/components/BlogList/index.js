// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      avathor: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogList: formattedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state

    console.log(blogList)
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loaderr">
            <Loader type="TailSpin" color="#00bfff" height={40} width={40} />
          </div>
        ) : (
          blogList.map(item => <BlogItem key={item.id} blogItem={item} />)
        )}
      </div>
    )
  }
}
export default BlogList
