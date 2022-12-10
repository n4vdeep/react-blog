import './header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://www.superprof.co.uk/blog/wp-content/uploads/2018/02/landscape-photography-tutorials.jpg" alt="winding_road_image" />
    </div>
  )
}
