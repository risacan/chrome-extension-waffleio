var observer = new MutationObserver(function (MutationRecords, MutationObserver) {
    var currentBoard = document.location.href;
    if(localStorage.getItem(currentBoard)) {
      $('.board, .board-body').css('background-color',localStorage.getItem(currentBoard));
    }
});

observer.observe($('body').get(0), {
  childList: true,
});

document.addEventListener('Load', function () {
  var currentBoard = document.location.href;
  if(localStorage.getItem(currentBoard)) {
    $('.board, .board-body').css('background-color',localStorage.getItem(currentBoard));
  }
});

