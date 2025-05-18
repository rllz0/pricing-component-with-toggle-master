
  const toggle = document.getElementById('cb-toggle');
  const monthlyPrices = document.querySelectorAll('h1.monthly');
  const annuallyPrices = document.querySelectorAll('h1.annually');
  
  updatePriceDisplay();
  
  toggle.addEventListener('change', updatePriceDisplay);
  
  function updatePriceDisplay() {
    if (toggle.checked) {
      // Monthly 
      monthlyPrices.forEach(price => price.style.display = 'block');
      annuallyPrices.forEach(price => price.style.display = 'none');
    } else {
      // Annual 
      monthlyPrices.forEach(price => price.style.display = 'none');
      annuallyPrices.forEach(price => price.style.display = 'block');
    }
  }
  
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      if (this.parentElement.classList.contains('professional')) {
        this.style.border = '1px solid white';
        this.style.background = 'transparent';
        this.style.color = 'white';
      } else {
        this.style.border = '1px solid hsl(237, 63%, 64%)';
        this.style.background = 'transparent';
        this.style.color = 'hsl(237, 63%, 64%)';
      }
    });
    
    button.addEventListener('mouseleave', function() {
      if (this.parentElement.classList.contains('professional')) {
        this.style.border = 'none';
        this.style.background = 'white';
        this.style.color = 'hsl(237, 63%, 64%)';
      } else {
        this.style.border = 'none';
        this.style.background = 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))';
        this.style.color = 'white';
      }
    });
  });
