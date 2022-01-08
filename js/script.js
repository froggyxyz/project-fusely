let blockPlan = document.querySelectorAll('.plan > div');
console.log(blockPlan);

for (item of blockPlan) {
  let link = item.querySelector('a');
  item.addEventListener('mouseover', () => {
    link.classList.toggle('button-outlined');
    link.classList.toggle('button-white');
  });
  item.addEventListener('mouseout', () => {
    link.classList.toggle('button-outlined');
    link.classList.toggle('button-white');
  });
}

// let headerBtns = document.querySelector('.header__buttons');

// setInterval(() => {
//   if (document.documentElement.clientWidth <= 768) {
//     headerBtns.style.display = 'none';
//   } else {
//     headerBtns.style.display = 'flex';
//   }
// }, 500);
