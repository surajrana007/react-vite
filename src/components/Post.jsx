import postCss from '../styles/Post.module.css';
function Post(props) {
    return (
        <>
            <p className={postCss.author}>{props.author}</p>
            <p className={postCss.message}>{props.body}</p>
        </>
    );
}

export default Post;
