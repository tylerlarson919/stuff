const playerOne = {
  idle: () => {
    playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_idol.gif?raw=true';
    // Loop the idol animation
    playerImage.addEventListener('animationiteration', () => {
      playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_idol.gif?raw=true';
    });
  },
  attack: () => {
    playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_charge.gif?raw=true';
    setTimeout(() => {
      playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_Attack.gif?raw=true';
      // Loop the idol animation after attacking
      playerImage.addEventListener('animationiteration', () => {
        playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_idol.gif?raw=true';
      });
    }, 1000);
  },
  Death: () => {
    playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_takeDamage.gif?raw=true';
    setTimeout(() => {
      playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_death.gif?raw=true';
      // Blank image after playing death once
      setTimeout(() => {
        playerImage.src = ''; // Set to blank image
      }, 1000);
    }, 1000);
  }
};