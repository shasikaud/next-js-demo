// default -> { cache: 'force-cache' }
// always fetch -> { cache: 'no-store' }
const getAllUsers = async() => {
    const res =  await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 60 } });
    if (res.ok) return res.json();
    return undefined;
} 

const getUser = async(userId: string) => {
    const res =  await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (res.ok) return res.json();
    return undefined;
}

const getUserPosts = async(userId: string) => {
    const res =  await fetch(`https://jsonplaceholder.typicode.com/posts?user=${userId}`);
    if (res.ok) return res.json();
    return undefined;
}

export { getAllUsers, getUser, getUserPosts }
