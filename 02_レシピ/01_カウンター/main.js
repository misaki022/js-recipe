const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const plusButton1 = document.getElementById("plus-button1")
const plusButton2 = document.getElementById("plus-button2")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}
plusButton1.onclick = function () {
  // count を更新
  count -= 1
  // count を表示
  display.textContent = count
}
plusButton2.onclick = function () {
  // count を更新
  count *= 2
  // count を表示
  display.textContent = count
}
