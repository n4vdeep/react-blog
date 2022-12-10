import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://wallpaperaccess.com/full/151024.jpg" alt="snowy-woods-img" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Navdeep</b></span>
          <span className="singlePostDate">Date: <b>1 hour ago</b></span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem at nostrum magnam dolor omnis eos debitis ipsum, possimus error voluptate illo enim similique repudiandae. Sequi suscipit autem commodi minima quaerat!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ea facilis modi molestiae nemo, natus sed in ipsum illum tempore laudantium expedita blanditiis veniam illo accusantium optio eligendi quibusdam id?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio magni corrupti ab eum esse, repellat cum tempore obcaecati culpa ex est voluptatibus omnis praesentium reprehenderit, aspernatur rem exercitationem mollitia repellendus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet exercitationem nesciunt, culpa reiciendis consequuntur eaque, a autem consectetur deserunt ipsa, fuga incidunt quae voluptas? Mollitia esse eius nemo placeat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium mollitia quis! Iusto quam animi molestiae maxime dolores, veritatis corrupti fuga nihil nesciunt hic beatae eos quidem atque dolorum impedit!
        </p>
      </div>
    </div>
  )
}
