import "./post.css";
import { MoreVert } from '@mui/icons-material';
import { Users } from"../../dummyData";
import { useState } from "react";

export default function Post({Post}) {

    const [like,setLike] = useState(Post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    
    return (
        <div className="post">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                        <img 
                        src={Users.filter((u) => u.id === Post.userId)[0].profilePicture} 
                        alt="" className="postProfileImg" 
                        />
                        <span className="postUsername">
                            {Users.filter((u) => u.id === Post.userId)[0].username}
                        </span>
                        <span className="postDate">{Post.date}</span>

                    </div>
                    <div className="postTopRight">
                        <MoreVert className="postTopRightIcon"/>
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{Post.desc}</span>
                    <img src={Post.photo} alt="" className="postImg" />

                </div>

                <div className="postbottom">
                    <div className="postBottomLeft">
                        <img src="./assets/like.png" onClick={likeHandler} alt="" className="likeIcon" />
                        <img src="./assets/heart.png" onClick={likeHandler} alt="" className="likeIcon" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">{Post.comment}  comments</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
