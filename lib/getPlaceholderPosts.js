export async function getAllPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    return await response.json()
}

export async function getAllPostsIds() {
    const posts = await getAllPosts();


    return posts.map(post => {
        const route = {
            params: {
                id: String(post.id)
            }
        }
        return route;
    });
}

export async function getPostById(id) {
    const post = (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();

    return await post;
}