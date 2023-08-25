import { getUser, getUserPosts } from "@/lib/requests"
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

type Params = {
    params: {
        userId: string
    }
}

// export default async function UserPage({params:{userId}}: Params) {

//     // parallel fetching rather than waterfall fetching
//     const userData: Promise<User> = getUser(userId);
//     const postsData: Promise<Post[]> = getUserPosts(userId);
//     const [user, posts] = await Promise.all([userData, postsData]);

//     return (
//         <>
//             <h1>User Page</h1>
//             <h2>{user.name}</h2>
//         </>
//     )
// }

export default async function UserPage({params:{userId}}: Params) {

    const userData: Promise<User> = getUser(userId);
    const postsData: Promise<Post[]> = getUserPosts(userId);
    // const [user, posts] = await Promise.all([userData, postsData]);

    const user = await getUser(userId);

    return (
        <>
            <h1>User Page</h1>
            <h2>{user.name}</h2>
            {/* load rest using suspense */}
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={postsData}/>
            </Suspense>
            
        </>
    )
}
