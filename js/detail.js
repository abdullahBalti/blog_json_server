
// const id = window.location.search;
// console.log(id);

const id = new URLSearchParams(window.location.search).get('id');
const blogDetail = document.querySelector('.blog-detail');
const deleteBtn = document.querySelector('.del-blog');

const renderDetail = async () =>{
    const res = await fetch('http://localhost:3000/posts/' + id);
    const posts = await res.json();
    // console.log(posts);
    const singleBlog = `
        <h2>${posts.title}</h2>
        <p>${posts.likes} Likes</p>
        <p>${posts.body}</p>         
    `
    blogDetail.innerHTML = singleBlog;
}
const deletePost = async (e) =>{
    const res = await fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
    });
    window.location.replace('/index.html');
}
deleteBtn.addEventListener('click', deletePost);

window.addEventListener('DOMContentLoaded', () =>renderDetail());