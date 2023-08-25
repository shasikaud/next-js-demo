const getAllUsers = async() => {
    const res =  await fetch('https://jsonplaceholder.typicode.com/users');
    if (res.ok) return res.json();
    throw new Error('Failed to fetch users.');
}

const getUser = async(userId: string) => {
    const res =  await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (res.ok) return res.json();
    throw new Error(`Failed to fetch user #${userId}.`);
}

const getUserPosts = async(userId: string) => {
    const res =  await fetch(`https://jsonplaceholder.typicode.com/posts?user=${userId}`);
    if (res.ok) return res.json();
    throw new Error(`Failed to fetch posts of user #${userId}.`);
}

export { getAllUsers, getUser, getUserPosts }
