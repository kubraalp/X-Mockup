import Post from "../components/Post";
import { posts } from "../components/posts";

export default function ForYou() {
  return (
  <>
  {posts.map(post => <Post post={post} key={post.id}/>)}
  
  
  </>);
}
