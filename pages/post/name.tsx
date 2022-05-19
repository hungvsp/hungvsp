import * as React from "react";
import { useRouter } from "next/router";
export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
};
type Item = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export default function Name(props: any) {
  console.log("props hello", props);
  const router = useRouter();
  return (
    <div>
      {JSON.stringify(router.query)}
      {props.post.map((item: Item) => {
        return (
          <h1 key={item.id}>
            {" "}
            {item.title}
            <span>tôi đi code dạo </span>
          </h1>
        );
      })}
    </div>
  );
}
