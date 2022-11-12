const root = document.getElementById('root')
let images

let imagesUrls = [
  'https://images.unsplash.com/photo-1668148200932-be7f9dac92e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1622374073035-72c2ae3e8ed8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=363&q=80',
  'https://images.unsplash.com/photo-1496850574977-a4607106a874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1532601877424-955bb8e5171f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80    ',
  'https://images.unsplash.com/photo-1635694586550-7751998bdd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=448&q=80',
  'https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80',
  'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1518965723674-44cd4aff50d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1560564203-34c933a5645c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1549556289-9706946b9c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
]

let htmlCode = []

imagesUrls.forEach((url) => {
  htmlCode.push(
    `
        <div class="images">
            <img src="${url}" alt="">
        </div>
        `
  )
})

render()

function render() {
  root.innerHTML = htmlCode.toString().replace(/,/g, '')
  images = document.querySelectorAll('.images')

  images.forEach((image, idx) => {
    image.addEventListener('click', () => {
      updateArray(idx)
    })
  })
}

function updateArray(idx) {
  let urlAtual = imagesUrls.splice(idx, 1)
  imagesUrls.unshift(...urlAtual)

  htmlCode = []

  imagesUrls.forEach((url) => {
    htmlCode.push(
      `
            <div class="images">
                <img src="${url}" alt="">
            </div>
            `
    )
  })

  render()
}
