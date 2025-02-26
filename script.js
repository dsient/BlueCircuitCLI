const blogPosts = [
  { 
    title: "Windows 11 Debloat Guide", 
    content: "Created a guide for winutil by GTT to debloat w11 and tweak configurations and privacy settings.",
    link: "https://github.com/dsient/W11-Debloat-Guide", 
    date: "2/25/2025" 
  },
  { 
    title: "Welcome!", 
    content: "Welcome to DSiWare - Blog of brain bytes spit onto a keyboard", 
    date: "2/25/2025" 
  }
];

function renderPosts() {
  const container = document.getElementById('blog-container')
  container.innterHTML = '';
  blogPosts.sort((a,b) => new Date(b.date) - new Date(a.date));

  blogPosts.forEach(post => {
    const card = document.createElement('div');
    card.classname = 'blog-card'

    //Create hyperlink if the property is filled
    let linkHTML = '';
    if (post.link) {
      linkHTML = `<p><a href="${post.link}" target="_blank" rel="noopener noreferrer"Access Link</a></p>`;
    }
    
    card.innerHTML = '
      <h2>${post.title}</h2>
      <p><em>${post.date}</em></p>
      <p>${post.content}</p>
      ${linkHTML}
    ';

  }
}

renderPosts();
