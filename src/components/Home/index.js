import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="user-info-container">
      <UserInfo />
    </div>
    <div className="bloglist-container">
      <BlogList />
    </div>
  </div>
)

export default Home
