var game = new Phaser.Game(600, 300, Phaser.AUTO, 'game');
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('play', playState);
game.state.start('boot');