const images = document.querySelectorAll('.images')

images.forEach((image, idx) => {
  image.addEventListener('click', () => {
    const primaryAtual = document.querySelector('.images.primary')
    primaryAtual.classList.remove('primary')
    primaryAtual.style.top = image.getBoundingClientRect().y +'px'
    primaryAtual.style.left = image.getBoundingClientRect().x + 'px'
    image.classList.add('primary')
    image.style.top = '75px'
    image.style.left = '300px'
  })
})