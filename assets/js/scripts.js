
  document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion__header');
      header.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion__item.active');
        
        toggleItem(item);

        if (openItem && openItem !== item) {
          toggleItem(openItem);
        }
      });
    });

    const toggleItem = (item) => {
      const body = item.querySelector('.accordion__body');
      if (item.classList.contains('active')) {
        body.style.display = 'none';
        item.classList.remove('active');
      } else {
        body.style.display = 'block';
        item.classList.add('active');
      }
    };
  });