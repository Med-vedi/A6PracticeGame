const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  $('.target').removeClass('target');
  $('.miss').removeClass('miss');
  $('.missed-hits').text('');

  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $(divSelector).text(hits + 1);

  if (hits === 1) {firstHitTime = getTimestamp(); 
  } else if (hits === maxHits) { 
    endGame(); 
  }
}

function endGame() {
  $('.game-field').hide();

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $('#total-time-played').text(totalPlayedSeconds);

  let missedHits = document.querySelectorAll('.missed-hits').length;
  $("#missed-hits").text(missedHits);
  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  let target = $(event.target)
  if (target.hasClass('target')) {
    hits = hits + 1;
    target.text('');
    round();
  } else { 
    $(event.target).addClass('miss');
    $(event.target).addClass('missed-hits');

// An option *** 1 missed hit => 1 lost hit***
//     hits = hits - 1;

    target.text('xLOSERx');


     } 
}

function init() {
  round();
  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
