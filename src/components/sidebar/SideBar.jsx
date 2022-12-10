import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt="avater" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus suscipit enim nesciunt quo eos, excepturi voluptas ea rerum ullam culpa accusamus ut magnam.
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Style</li>
          <li className="sideBarListItem">Sport</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-square-facebook"></i>
          <i className="sideBarIcon fa-brands fa-square-twitter"></i>
          <i className="sideBarIcon fa-brands fa-instagram"></i>
          <i className="sideBarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}
