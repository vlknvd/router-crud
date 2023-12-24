import Post from "../Post/Post";

const PostList = ({ list }) => {
  return (
    <div className="posts">
      {list.map((o) => (<Post post={o} key={o.id}/>))}
    </div>
  );
}

export default PostList