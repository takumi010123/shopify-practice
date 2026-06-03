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