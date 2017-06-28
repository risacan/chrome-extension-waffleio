function click(e) {
  var currentBoard;
  chrome.tabs.getSelected(null, function(tab) {
    currentBoard = tab.url.toString();
    localStorage.setItem(currentBoard, e.target.id.toString());
    color = localStorage.getItem(currentBoard);
    chrome.tabs.executeScript(null,
      {code:"$('.board, .board-body').css('background-color','" + e.target.id + "');"
    });
    chrome.tabs.executeScript(
      null,
      {
        code:"$('.board, .board-body').css('background-color','" + e.target.id + "');",
        code:"localStorage.setItem('" + currentBoard + "', '" + e.target.id + "');"
      }
    );
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', click);
  }
   chrome.tabs.getSelected(null, function(tab) {
    currentBoard = tab.url.toString();
    var color = localStorage.getItem(currentBoard);
    chrome.tabs.executeScript(null,
      {code:"$('.board, .board-body').css('background-color','" + color + "');"
    });
  });
});