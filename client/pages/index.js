import styles from "../styles/Home.module.css";
import PortableText from "@sanity/block-content-to-react";

import client from "../lib/sanity";

const serializers = {
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark;
      const href = `/${slug.current}`;
      return <a href={href}>{children}</a>;
    },
    link: ({ mark, children }) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

const query = `*[_type == "book"][0]{
  blockText
}`;
export default function Home({ books }) {
  return (
    <div className={styles.container}>
      <h1 style={{ color: "red" }}>Main Content</h1>
      <p>{JSON.stringify(books.blockText, null, 2)}</p>
      <PortableText blocks={books.blockText} serializers={serializers} />
    </div>
  );
}

// some folks run this in useEffect without the getStaticProps as seen below:
// useEffect(() => {
//   sanityClient
//     .fetch(
//       `*[slug.current == $slug]{
//         title,
//         slug,
//         mainImage{
//           asset->{
//             _id,
//             url
//            }
//          },
//        body,
//       "name": author->name,
//       "authorImage": author->image
//      }`,
//       { slug }
//     )
//     .then((data) => setPostData(data[0]))
//     .catch(console.error);
// }, [slug]);

export const getStaticProps = async () => {
  const books = await client.fetch(query);
  return {
    props: { books },
  };
};
