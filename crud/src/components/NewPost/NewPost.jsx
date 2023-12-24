import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./NewPost.css"

const NewPost = () => {
    const [post, setPost] = useState([])
    const navigate = useNavigate();

    const onChange = (e) => {
        const { target } = e;
        setPost(target.value);
    }

    const onClose = () => navigate("/")

    const onClick = () => {
        if(post === '') {
            onClose()
            return
        }

        fetch('http://localhost:7070/posts', {
            method: "POST",
            body: JSON.stringify({id: 0, content: post})  
        }).then(onClose())
    }

    return (
        <div className="new-post">
            <textarea className="new-post-create" value={post} onChange={onChange} placeholder="Введите текст" />
            <div className="new-post-button">
                <button className="button-create" onClick={onClick}>Опубликовать</button>
                <button className="button-close" onClick={onClose}>Закрыть</button>
            </div>
        </div>
    )
}

export default NewPost