window.addEventListener('click',(event)=>{
    const a = document.querySelectorAll(".box-item");
    // console.log(a);
    let atop, abot, aleft, aright;
    a.forEach(a=>{
        const b = a.querySelector(".item");
        atop = (Math.random()*80).toFixed(0)+"%";
        b.style.top = atop;
        abot = (Math.random()*80).toFixed(0)+"%";
        b.style.bottom = abot;
        aleft = (Math.random()*80).toFixed(0)+"%";
        b.style.left = aleft;
        aright=(Math.random()*80).toFixed(0)+"%"
        b.style.right = aright;
        detail = "Top:"+atop+"--Bottom:"+abot+"--Left:"+aleft+"--Right:"+aright;
        const c = a.querySelectorAll(".desc");
        c.forEach(c=>{
            c.querySelector(".top").innerHTML="Top: " + atop;
            c.querySelector(".bottom").innerHTML="Bottom: " + abot;
            c.querySelector(".right").innerHTML="Right: " + aright;
            c.querySelector(".left").innerHTML="Left: " + aleft;
        })
    })
  });