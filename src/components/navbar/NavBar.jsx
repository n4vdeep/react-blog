import "./navbar.css"

export default function NavBar() {
  return (
    <div class="navBar">
      <div className="navBarLeft">
        <i className="navBarIcon fa-brands fa-square-facebook"></i>
        <i className="navBarIcon fa-brands fa-square-twitter"></i>
        <i className="navBarIcon fa-brands fa-instagram"></i>
        <i className="navBarIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="navBarCenter">
        <ul className="navBarList">
          <li className="navBarListItem">HOME</li>
          <li className="navBarListItem">ABOUT</li>
          <li className="navBarListItem">CONTACT</li>
          <li className="navBarListItem">WRITE</li>
          <li className="navBarListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="navBarRight">
        <img className="navBarImg" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="profile_picture" />
        <i className="navBarSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
