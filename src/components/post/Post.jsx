import "./post.css"

export default function post() {
  return (
    <div className="post">
      <img className="postImg" src="https://wallpaperaccess.com/full/151029.jpg" alt="posts_image" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi ex ipsa. Ex fuga magnam expedita architecto, et natus nemo velit voluptates? Dolor reiciendis, ipsum fuga facere excepturi quaerat repellendus?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nostrum sint modi a suscipit consequuntur dolorum beatae ratione voluptatibus id quam dolor recusandae numquam sapiente fuga, debitis voluptate enim! Veritatis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat a voluptatibus, sed doloremque saepe, soluta atque dicta corporis, voluptates et ipsum vitae incidunt tenetur architecto dolores maiores accusantium maxime.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quis, temporibus sed architecto animi adipisci maxime illum ipsam dolores est nulla nostrum molestiae sapiente at aliquam optio, dolore rerum sunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit natus voluptate iure fugit. At reiciendis, sed quia rem illo eos. Enim, voluptatibus. Vel sequi eligendi odit, voluptatem laudantium perspiciatis!
      </p>
    </div>
  )
}
