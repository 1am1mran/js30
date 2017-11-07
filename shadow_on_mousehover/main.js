const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 50; // 100px
function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(197,40,23, 0.5),
    ${xWalk * -1}px ${yWalk}px 0 rgba(52,176,0, 0.8),
    ${yWalk}px ${xWalk * -1}px 0 rgba(255,0,154, 0.8),
    ${yWalk * -1}px ${xWalk}px 0 rgba(58,170,172, 0.9)
  `;
}
hero.addEventListener('mousemove', shadow);