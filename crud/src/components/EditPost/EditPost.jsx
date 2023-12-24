import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import './EditPost.css'

const EditPost = () => {
    const [post, setPost] = useState({});
    const [editPost, setEditPost] = useState({});
    const [mode, setMode] = useState("view");

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:7070/posts')
        .then((response) => response.json())
        .then((res) => { setPost(res.find((el) => el.id === Number(params.postId)))});
    }, []);

    const onClose = () => navigate("/");

    const onStartEdit = () => {
        setEditPost(post);
        setMode("edit");
    };

    const onRemove = () => {
        fetch(`http://localhost:7070/posts${params.postId}`, {
        method: "DELETE",
    }).then(onClose())
    };

    const onChange = (e) => {
        const { target } = e;
        setEditPost((prev) => ({ ...prev, content: target.value }));
    };
    
    const onClick = () => {
        if (editPost === "") {
            return;
        }

        fetch('http://localhost:7070/posts', {
        method: "POST",
        body: JSON.stringify({ content: editPost.content, id: editPost.id }),
        })
        .then(setMode("view"))
    };

    const onEndEdit = () => {
        setMode("view");
    };

    return (
        <div className="app">
            {mode === "view" ? (
                <div className="posts">
                    <div className="post-edit">
                        <div className="post-edit-header">
                            <img className='img' src='/santa.png' />
                            <p className="post-edit-title">Santa Claus</p>
                        </div>
                        <div className="post-edit-content">{post.content}</div>
                        <div className="post-edit-button">
                            <button className="button-create" onClick={onStartEdit}>Изменить</button>
                            <button className="button-close" onClick={onRemove}>Удалить</button>
                        </div>
                    </div>
                </div>
            ):(
                <div className="post-editor">
                    <textarea
                        className="textarea-edit"
                        value={editPost.content}
                        onChange={onChange}
                        placeholder="Введите текст..."
                    />
                    <div className="post-editor-button">
                        <button className="button-create edit" onClick={onClick}>Сохранить</button>
                        <button className="button-close edit" onClick={onEndEdit}>Закрыть</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EditPost