var body = document.querySelector('body'),
    bar = document.querySelector('.progress-bar'),
    counter = document.querySelector('.count'),
    h2text = document.querySelector('.text_done'),
    i = 0,
    throttle = 0.3; // 0-1

(function draw() {
  if(i <= 100) {
    var r = Math.random();
    
    requestAnimationFrame(draw);  
    bar.style.width = i + '%';
    counter.innerHTML = Math.round(i) + '%';
    
    if(r < throttle) { // Simulate d/l speed and uneven bitrate
      i = i + r;
    }
  } else {;
    // bar.className += " done";
    // h2text.className += " done";
    document.location.replace("finish.html");
  }
})();