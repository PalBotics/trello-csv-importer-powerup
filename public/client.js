console.log("Trello Power-Up: client.js loaded");

window.TrelloPowerUp.initialize({
  'card-buttons': function(t) {
    console.log("Trello Power-Up: initializing card button");
    return [{
      text: 'Test CSV Button',
      callback: function(t) {
        console.log("Trello Power-Up: button clicked");
        return t.popup({
          title: 'Import CSV',
          url: 'popup.html',
          height: 200
        });
      }
    }];
  },

  'show-settings': function(t) {
    console.log("Trello Power-Up: opening settings");
    return t.popup({
      title: 'Settings',
      url: 'settings.html',
      height: 200
    });
  }
});