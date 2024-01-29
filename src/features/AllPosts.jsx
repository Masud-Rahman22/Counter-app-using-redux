import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./posts/postSlice";


const AllPosts = () => {
    const {error, isLoading, posts} = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])
    return (
        <div>
            {
                isLoading && <h3>loading ......</h3>
            }
            {
                error && <h3>{error}</h3>
            }
            {
                posts && posts.map(post => {
                    return <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </article>
                })
            }
        </div>
    );
};

export default AllPosts;