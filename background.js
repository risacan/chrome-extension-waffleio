var numbersReload = 0;
var observer = new MutationObserver(function (MutationRecords, MutationObserver) {
  numbersReload++;
  if (numbersReload == 3){
    var currentBoard = document.location.href;
    if(localStorage.getItem(currentBoard)) {
      $('.board, .board-body').css('background-color',localStorage.getItem(currentBoard));
      console.log(localStorage.getItem(currentBoard));
    }
  }
});

observer.observe($('body').get(0), {
  childList: true,
});

document.addEventListener('Load', function () {
  var currentBoard = document.location.href;
  if(localStorage.getItem(currentBoard)) {
    $('.board, .board-body').css('background-color',localStorage.getItem(currentBoard));
    console.log(localStorage.getItem(currentBoard));
  }
});

