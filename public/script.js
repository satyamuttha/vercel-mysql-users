function loadUsers() {
  fetch('/api/users')
    .then(res => res.json())
    .then(data => {

      // 🔐 SAFETY CHECK
      if (!Array.isArray(data)) {
        console.error('API Error:', data);
        alert(data.error || 'Server error');
        return;
      }

      const list = document.getElementById('userList');
      list.innerHTML = '';

      data.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email}`;
        list.appendChild(li);
      });
    })
    .catch(err => console.error(err));
}
