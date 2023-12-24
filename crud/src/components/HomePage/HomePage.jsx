import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import PostList from "../PostList/PostList"

import './HomePage.css'

const HomePage = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('http://localhost:7070/posts')
        .then((response) => response.json())
        .then((result) => {setPost(result)})    
    }, [])

    return (
        <div className="app">         
            {post ? <PostList list={ post } /> : null}
            <Link to="/posts/new">
                <button className="button-create post">Создать пост</button>
            </Link>
        </div>
    )

}

export default HomePage