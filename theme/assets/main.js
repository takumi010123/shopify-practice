  document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('.product-detail__variants')
    const priceEl = document.querySelector('.product-detail__price')

    if (select && priceEl) {
      select.addEventListener('change', () => {
        const selected = select.selectedOptions[0]
        priceEl.textContent = selected.dataset.price
      })
    }
  })

  // --- Ajaxカート ---
  const form = document.querySelector('.js-product-form')
  const cartCountEl = document.querySelector('.js-cart-count')

  if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const button = form.querySelector('button[type="submit"]')
    const original = button.textContent
    button.disabled = true
    button.textContent = '追加中...'

    const formData = new FormData(form)
    const res = await fetch('/cart/add.js', { method: 'POST', body: formData })

    if (res.ok) {
      const cart = await (await fetch('/cart.js')).json()
      if (cartCountEl) cartCountEl.textContent = cart.item_count
      button.textContent = '追加しました ✓'
    } else {
      button.textContent = '追加できませんでした'
    }

    setTimeout(() => {
      button.textContent = original
      button.disabled = false
    }, 1200)
  })
}