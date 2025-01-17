import Layout from "../Components/Layout/Layout"
import { Link } from "react-router-dom"
import Banner from '../Components/images/banner.jpg'
import '../styles/HomeStyle.css'
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`,}}>
       <div className="headerContainer">
        <h1>The Art Of Fine Dining</h1>
        <p>A True Culinary Delight!</p>
        <Link to="/menu">
        <button>
          ORDER NOW
        </button>
        </Link>
       </div>
      </div>
    </Layout>
  )
}

export default Home
