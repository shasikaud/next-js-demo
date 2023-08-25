import { getUser, getUserPosts } from "@/lib/requests"
import { Suspense } from "react";
import type { Metadata } from "next";
import UserPosts from "./components/UserPosts";
import { notFound } from "next/navigation";

type Params = {
    params: {
        userId: string
    }
}

// dynamic meta data
export async function generateMetadata({params:{userId}}: Params): Promise<Metadata> {
    const user: User = await getUser(userId);
    if (!user) return {};
    return {
        title: user.name,  // this appears as the title of the page
        description: `This is the page of ${user.email}`
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

    if (!user) notFound();   // default notFound page

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
