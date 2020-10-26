import Head from 'next/head';
import { PostData, loadBlogPosts } from '../../loader';
import { PostCard } from '../../components/PostCard';


const Blog = (props: {
  introduction: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <div>

      <Head>
        <title>All Blog Posts</title>
      </Head>

      <section>
        <h5 className="text-center">All Blog Posts</h5>
        <div className="list-group">
          <div>
            {props.posts.map((post, j) => {
              return <PostCard post={post} key={j} />;
            })}
          </div>
        </div>
      </section>


    </div>
  );
};
export default Blog;


export const getStaticProps = async () => {
  const posts = await loadBlogPosts();
  const props = {
    posts
  };
  return { props };
};
