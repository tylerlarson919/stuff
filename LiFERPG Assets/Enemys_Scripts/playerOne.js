const playerOne = {
  idle: function() {
    const playerImage = document.getElementById('player-image');
    playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_idol.gif?raw=true';
    // Loop the idol animation
    playerImage.addEventListener('animationiteration', function() {
      playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_idol.gif?raw=true';
    });
  },
  attack: function() {
    const playerImage = document.getElementById('player-image');
    playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_charge.gif?raw=true';
    setTimeout(function() {
      playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_Attack.gif?raw=true';
      // Loop the idol animation after attacking
      playerImage.addEventListener('animationiteration', function() {
        playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_idol.gif?raw=true';
      });
    }, 1000);
  },
  death: function() {
    const playerImage = document.getElementById('player-image');
    playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_takeDamage.gif?raw=true';
    setTimeout(function() {
      playerImage.src = 'https://github.com/tylerlarson919/stuff/blob/main/LiFERPG%20Assets/animationSprites/Player_samuri/player_samurri_death.gif?raw=true';
      // Blank image after playing death once
      setTimeout(function() {
        playerImage.src = ''; // Set to blank image
      }, 1000);
    }, 1000);
  }
};

// Export playerOne object to make it accessible globally
window.playerOne = playerOne;
