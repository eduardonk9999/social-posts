import { useState } from "react"
import { Like } from "../Like";
import "./index.css"

type postProps = {
  userName: string;
  avatarUrl: string;
  content: string;
}

export const Post = ({userName, avatarUrl, content}: postProps) => {
  const [liked, setLiked] = useState(false)

  function like () {
    setLiked(true)
  }

  function deslike() {
    setLiked(false)
  }

  return(
    <div className="post">
      <div className="title">
        <img src={avatarUrl} alt="Eduardo" />
        <p>{userName}</p>
      </div>
      <p>{content}</p>
      <div className="action">
       <Like liked={liked} like={like} unlike={deslike} />
      </div>
    </div>
  )
}