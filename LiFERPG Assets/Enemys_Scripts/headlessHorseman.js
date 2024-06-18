const headlessHorseman = {
  idle: () => {
    playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Headless%20Horsemaan/Headless%20Horseman_idol.gif?raw=true.gif';
    // Loop the idol animation
    playerImage.addEventListener('animationiteration', () => {
      playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Headless%20Horsemaan/Headless%20Horseman_idol.gif?raw=true.gif';
    });
  },
  attack: () => {
    playerImage.src = 'HeadlessHorseman_charge.gif';
    setTimeout(() => {
      playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Headless%20Horsemaan/Headless%20Horseman_attack.gif?raw=true';
      // Loop the idol animation after attacking
      playerImage.addEventListener('animationiteration', () => {
        playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Headless%20Horsemaan/Headless%20Horseman_idol.gif?raw=true';
      });
    }, 1000);
  },
  Death: () => {
    playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Headless%20Horsemaan/Headless%20Horseman_takeDamage.gif?raw=true';
    setTimeout(() => {
      playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/demon/Demon_death.gif?raw=true';
      // Blank image after playing death once
      setTimeout(() => {
        playerImage.src = ''; // Set to blank image
      }, 1000);
    }, 1000);
  }
};
