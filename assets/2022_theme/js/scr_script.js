const stars = document.querySelectorAll('.star');

const setStarInitXPosition = (star) => {
  const START_WIDTH = 12;
  const windowWidth = window.innerWidth;
  const starLeftPosition = (Math.random() * windowWidth) - START_WIDTH;
  star.style.left = `${starLeftPosition}px`;
};

const setStarMoveSpeed = (star) => {
  const starMoveSpeed = -1 - Math.random();
  star.dataset.speed = starMoveSpeed;
};

stars.forEach(setStarInitXPosition);
stars.forEach(setStarMoveSpeed);

window.addEventListener('scroll', () => {
  const scrollPositionY = window.pageYOffset;
  const moon = document.querySelector('.moon');
  const stars = document.querySelectorAll('.star');
  const parallaxScrollingElements = [...stars, moon];

  parallaxScrollingElements.forEach((element) => {
    const elementMoveSpeed = Number(element.dataset.speed);
    element.style.transform = `
      translateY(${scrollPositionY * elementMoveSpeed}px)
    `;
  });
});