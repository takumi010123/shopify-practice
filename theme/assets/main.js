// 練習用のシンプルなカート挙動（静的サイト）
// 「カートに入れる」を押すと、ヘッダーのカート数が増える＋ボタンに一瞬フィードバック。
document.addEventListener('DOMContentLoaded', () => {
  let count = 0
  const countEl = document.querySelector('.js-cart-count')
  const buttons = document.querySelectorAll('.product-card__button')

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      count++
      if (countEl) countEl.textContent = count

      const original = btn.textContent
      btn.textContent = '追加しました ✓'
      btn.disabled = true
      setTimeout(() => {
        btn.textContent = original
        btn.disabled = false
      }, 1200)
    })
  })
})
