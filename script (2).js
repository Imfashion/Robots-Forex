const c = document.querySelector('#c');
const ctx = c.getContext('2d');

c.style.width = (c.width = window.innerWidth);
c.style.height = (c.height = window.innerHeight);

const palette = [
  // '#001219',
  '#005f73',
  '#0a9396',
  '#94d2bd',
  '#e9d8a6',
  '#ee9b00',
  '#ca6702',
  '#bb3e03',
  '#ae2012',
  '#9b2226',
]

const animate = (timeStart) => (time) => {
  requestAnimationFrame(() => animate(timeStart)(Date.now() + timeStart));
  let x = 0;
  let y = 0;
  const arr = Array(20);
  
  ctx.fillStyle = `rgba(0, 0, 0, 0.03)`;
  ctx.fillRect(0, 0, c.width, c.height);
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = (2 - (Math.sin(i + (time / 200)) / 2) * (c.height));
    
    const r = arr[i];
    ctx.fillStyle = palette[(Math.floor(i + (time / 200)) % palette.length)];
    const w = 100;
    ctx.fillRect(x, c.height / 2, w, arr[i]);
    x += w;
  }
}

animate(0)(0);

animate(100)(0);
