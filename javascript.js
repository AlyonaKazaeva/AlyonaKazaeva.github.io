var max = 100;

function buildValue(currentValue) {
  var anim = document.getElementById('checkbox').checked;
  var value = currentValue.value;
  max = value;
  if (value > 100) {
	value = 100;
  } else if (value < 0) {
    value = 0;
  }

    startProgress(anim);
}

startProgress(true);

//функция очищает канвас и рисует прогресс
function startProgress(anim) {
	clearProgressBar();
	if (anim) {
		buildProgressBar();
	} else {
		buildWithoutAnimation();
	}
}

//функция "очищения" канваса
function clearProgressBar() {
 var ctx = document.getElementById('bar').getContext('2d');
 var cw = ctx.canvas.width;
 var ch = ctx.canvas.height;
 ctx.clearRect(0, 0, cw, ch);
 ctx.beginPath()
 ctx.arc(85, 85, 80, 0, 2 * Math.PI, false);
 ctx.strokeStyle = '#efefec';
 ctx.lineWidth = 10;
 ctx.stroke()
}

//функция отображения анимированного прогресса
function buildProgressBar() {
  var ctx = document.getElementById('bar').getContext('2d');
  var current = 0; 
  var start = -Math.PI / 2; 
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var seg = 0;

  // Анимация прогресса
  function animation() {
    seg = Math.PI * 2 * (current / 100);
    ctx.beginPath();
    ctx.arc(85, 85, 80, start, start + seg, false);
    ctx.strokeStyle = '#ffdb4d';
    ctx.lineWidth = 10;
    ctx.stroke();

    if (current >= max) {
      clearTimeout(time);
    }
    current++;
  }
  var time = setInterval(animation, 30);
}

//функция отображения прогресса без анимации
function buildWithoutAnimation() {
	var ctx = document.getElementById('bar').getContext('2d');
  var start = -Math.PI / 2; 
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var seg = Math.PI * 2 * (max / 100);

  ctx.beginPath();
  ctx.arc(85, 85, 80, start, start + seg, false);
  ctx.strokeStyle = '#ffdb4d';
  ctx.lineWidth = 10;
  ctx.stroke();
}

// функция скрытия прогресс-бара
function hideProgress() {
	var progress = document.getElementById('bar');
	if (progress.style.display != "none") {
		progress.style.display = "none";		
	} else { 
		progress.style.display = "block";
	}
}



