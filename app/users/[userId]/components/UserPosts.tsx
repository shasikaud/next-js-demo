// /users/userId/components NOT available to public since no page.tsx in this path

import Link from "next/link";

type Props = {
    promise: Promise<Post[]>
}

export default async function UserPosts({ promise }: Props) {
    const posts = await promise;
    return (
        <>
            <h1>{`Posts of user ${posts[0].userId}`}</h1>
            <Link href='/users'>Back</Link>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
