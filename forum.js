const posts = [
  { id: 1, title: "How to organize a workshop?", author: "Member123", replies: 5, lastActive: "2h ago" },
  { id: 2, title: "Leadership tips for new members", author: "JCI_Leader", replies: 12, lastActive: "1d ago" }
];

function renderPosts() {
  document.getElementById('forum-posts').innerHTML = posts.map(post => `
    <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${post.title}</h5>
        <small>${post.lastActive}</small>
      </div>
      <p class="mb-1">Posted by ${post.author}</p>
      <small>${post.replies} replies</small>
    </a>
  `).join('');
}

renderPosts();

document.getElementById('newPostForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('postTitle').value.trim();
  const content = document.getElementById('postContent').value.trim();
  const author = "You"; // placeholder, can be dynamic later

  if (title && content) {
    const newPost = {
      id: posts.length + 1,
      title,
      author,
      replies: 0,
      lastActive: "Just now"
    };

    posts.unshift(newPost);
    renderPosts();

    e.target.reset();

    const modal = bootstrap.Modal.getInstance(document.getElementById('newPostModal'));
    modal.hide();
  }
});
