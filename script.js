const blogPosts = [
  { title: "Exploring the Depths", content: "Today we venture deeper into the dungeon...", date: "2025-02-25" },
  { title: "New Discoveries", content: "Found something interesting lurking around.", date: "2025-02-24" },
  { title: "Welcome Post", content: "Step into the DSi's Dungeon and explore!", date: "2025-02-23" }
];

function renderPosts() {
  const container = document.getElementById('blog-container');
  container.innerHTML = '';
  
  blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  blogPosts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.innerHTML = `
      <h2>${post.title}</h2>
      <p><em>${post.date}</em></p>
      <p>${post.content}</p>
    `;
    container.appendChild(card);
  });
}

renderPosts();
