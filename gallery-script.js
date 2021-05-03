// Создание и рендер разметки по массиву данных и предоставленному шаблону. ++

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.++

// Открытие модального окна по клику на элементе галереи.++

// Подмена значения атрибута src элемента img.lightbox__image.++

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].++

// Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того,
// чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.++

import images from "./gallery-items.js"

const galleryListEl = document.querySelector('.js-gallery')
const origImgEl = document.querySelector('.gallery__link')
const modalEl = document.querySelector('.js-lightbox')
const modalImg = document.querySelector('.lightbox__image')
const closeBtnEl = modalEl.querySelector('[data-action="close-lightbox"]')


function createMarkup() {
    images.map(el => {
        const prevLink = el.preview
        const origLink = el.original
        const altImg = el.description
        galleryListEl.insertAdjacentHTML('beforeend', `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${origLink}"
  >
    <img
      class="gallery__image"
      src="${prevLink}"
      data-source="${origLink}"
      alt="${altImg}"
    />
  </a>
</li>`)
    })
}
createMarkup()

galleryListEl.addEventListener('click', onImgClick)

function onImgClick(e) {

    e.preventDefault()

    if (e.target.nodeName !== 'IMG') {
        return
    }

    modalEl.classList.add('is-open')

    modalImg.src = e.target.dataset.source
    modalImg.alt = e.target.alt

  }

closeBtnEl.addEventListener('click', onModalClose)
  

function onModalClose() {
    modalEl.classList.remove('is-open')
    modalImg.src = '#'
    modalImg.alt = ''
  }