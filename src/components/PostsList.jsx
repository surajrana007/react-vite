import Post from './Post';
import postListClasses from '../styles/PostsList.module.css'
import NewPost from './NewPost';
import { useEffect, useState } from 'react';


// const Posts = [
//     [
//         {
//             "author": "suraj",
//             "message": "This is React Project"
//         }
//     ],
//     [
//         {
//             "author": "Dhrumil",
//             "message": "This is React Project"
//         }
//     ],
//     [
//         {
//             "author": "Bhagyesh",
//             "message": "This is React Project"
//         }
//     ]
// ];

function PostsList () {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/app')
          .then(res => res.json())
          .then(data => setPosts(data));
      }, []);
    return (
        <>
            <NewPost />

            <ul className={postListClasses.posts}>
                {
                    posts.map((post, index) => (
                        // post.map((p, i) => (
                        //     <li className={postListClasses.post} key={i}>
                        //         <Post author={p.author} body={p.message} />
                        //     </li>
                        // ))
                        <li className={postListClasses.post} key={index}>
                            <Post author={post.author} body={post.message} />
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

// Object.keys(data).map((index) => {
//     return Object.keys(data[index]).map((key) => {
//         return <Post key={key} author={data[index][key].author} body={data[index][key].message} />
//     })
// })

export default PostsList;