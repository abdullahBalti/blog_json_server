const blog = document.querySelector(".blog");
const searchForm = document.querySelector(".search");

const readerPosts = async (term) => {
    let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
    if(term){
        uri += `&q=${term}`;
    }
    
    // const res = await fetch(mydata);
    const res = await fetch(uri);
    const posts = await res.json();
    // console.log(posts);
 
    let blogpost = '';
    posts.forEach(post => {
        blogpost += `
        <div class="posts"> 
            <h2>${post.title}</h2>
            <p>${post.likes} Likes</p>
            <p>${post.body.slice(1, 250)}</p>
            <a href="/detail.html?id=${post.id}">Read More</a>
        </div>        
        `;
    });
    blog.innerHTML = blogpost;
}

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log(searchForm.term.value.trim());
    readerPosts(searchForm.term.value.trim());
});

window.addEventListener('DOMContentLoaded',() => readerPosts());