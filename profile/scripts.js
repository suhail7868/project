const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

let mouseCircleBool = true;

const mouseCircleFn = (x, y) => {
  
 mouseCircle.style.cssText = `top: ${y}px; left: ${x}px`;

  mouseDot.style.cssText = `top: ${y}px; left: ${x}px;`;
};

document.body.addEventListener('mouse')