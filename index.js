function click(e) {
  chrome.tabs.executeScript(null,
      {code:"$('.board, .board-body').css('background-color','" + e.target.id + "');"});
  window.close();
}
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', click);
  }
});