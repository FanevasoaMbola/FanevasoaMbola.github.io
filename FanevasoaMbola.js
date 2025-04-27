function icone() {
    document.getElementById("mi").classList.toggle("show");
  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
      var bouton = document.getElementsByClassName("ic");
      var i;
      for (i = 0; i < icone.length; i++) {
        var openicone = icone[i];
        if (openicone.classList.contains('show')) {
          openicone.classList.remove('show');
        }
      }
    }
  }

  const circles = document.querySelectorAll('.circle');
  const animationDuration = 1500;
            
            circles.forEach(circle => {
                const percent = parseInt(circle.getAttribute('data-percent'));
                const progressCircle = circle.querySelector('.circle-progress');
                const textElement = circle.querySelector('.circle-text');
                
                const radius = progressCircle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;
                
                progressCircle.style.strokeDasharray = circumference;
                progressCircle.style.strokeDashoffset = circumference;
                
                const startTime = Date.now();
                
                function animate() {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / animationDuration, 1);
                    const currentPercent = Math.floor(progress * percent);
                    
                    const offset = circumference - (currentPercent / 100 * circumference);
                    progressCircle.style.strokeDashoffset = offset;
                    textElement.textContent = `${currentPercent}%`;
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                }
                
                setTimeout(animate, 100 * Array.from(circles).indexOf(circle));
            });

            function openPage(pageName, elmnt, color) {
              var i, btn, ic;
              ic = document.getElementsByClassName("ic");
              for (i = 0; i < ic.length; i++) {
                ic[i].style.display = "none";
              }
            
              btns = document.getElementsByClassName("btn");
              for (i = 0; i < btns.length; i++) {
                btns[i].style.backgroundColor = "";
              }
  
              document.getElementById(pageName).style.display = "block";
              
              elmnt.style.backgroundColor = color;
            }
            
            document.getElementById("defaultOpen").click();          