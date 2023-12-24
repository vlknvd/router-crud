import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const navigate = useNavigate();

    const onClick = () => {
      navigate(`/posts/${post.id}`);
    };

    return (
        <div className="post" onClick={onClick}>
            <div className="post-header">
                <img src='./santa.png' />
                <p className="post-title">Santa Claus</p>
            </div>
            <div className="post-content">{post.content}</div>
        </div>
    )
}

export default Post