import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import '@splidejs/splide/css'
import { Splide } from '@splidejs/splide'

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    arrows: false,
    drag: 'free',
    focus: 'center',
    perPage: 1,
    autoplay: true,
    interval: 3500,
    speed: '1000',
    easing: 'linear',
  }).mount()
})

window.Alpine = Alpine
Alpine.plugin(persist)

Alpine.start()

let mc2code = {
  updateQuantity(line, qty) {
    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: qty, line: line }),
    })
      .then((response) => response.json())
      .then((data) => {
        // fire javascript event on window
        window.dispatchEvent(new Event('cart-updated'))
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  },
}

window.mc2code = mc2code
