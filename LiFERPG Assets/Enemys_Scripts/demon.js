const demon = {
  idle: () => {
    playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/demon/Demon_idol.gif?raw=true';
    setTimeout(() => {
      playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/demon/Demon_flyUp.gif?raw=true';
      setTimeout(() => {
        playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/demon/Demon_idolFly.gif?raw=true';
        // Loop the idolFly animation
        playerImage.addEventListener('animationiteration', () => {
          playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/demon/Demon_idolFly.gif?raw=true';
        });
      }, 1000);
    }, 1000);
  },
  attack: () => {
    playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/demon/Demon_attack.gif?raw=true';
    setTimeout(() => {
      playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/demon/Demon_idolFly.gif?raw=true';
      // Loop the idolFly animation
      playerImage.addEventListener('animationiteration', () => {
        playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/demon/Demon_idolFly.gif?raw=true';
      });
    }, 1000);
  },
  death: () => {
    playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/demon/Demon_takeDamage.gif?raw=true';
    setTimeout(() => {
      playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/demon/Demon_death.gif?raw=true';
      // Blank image after playing death once
      setTimeout(() => {
        playerImage.src = ''; // Set to blank image
      }, 1000);
    }, 1000);
  }
};
