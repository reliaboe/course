function paint(color) {
    const circle = document.getElementById('circleID');
    circle.style.backgroundColor = color; 
    
    if(circle.style.left) {
        let numberValue = new Number(circle.style.left.trim().replace("px", ""));
        numberValue = numberValue + 5;
        circle.style.left = `${numberValue}px`; 
    } else {
        circle.style.left = `5px`;
    }
  }