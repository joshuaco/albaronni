// Back to top

window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector('.call-btn').style.display = 'block';
  } else {
    document.querySelector('.call-btn').style.display = 'none';
  }
});

/* document.querySelector('.back-to-top').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  return false;
}); */
