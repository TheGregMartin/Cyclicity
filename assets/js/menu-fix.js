(function () {
  var menu = document.getElementById('menu');
  if (!menu) {
    return;
  }

  menu.querySelectorAll('.opener').forEach(function (opener) {
    opener.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      opener.classList.toggle('active');

      var sub = opener.nextElementSibling;
      if (sub && sub.tagName.toLowerCase() === 'ul') {
        sub.style.display = opener.classList.contains('active') ? 'block' : 'none';
      }
    });
  });
})();