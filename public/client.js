console.log("Trello Power-Up: client.js loaded");

function showImportPopup(t) {
  console.log("Trello Power-Up: button clicked");
  return t.popup({
    title: 'Import CSV',
    url: 'popup.html',
    height: 200
  });
}

window.TrelloPowerUp.initialize({
  'board-buttons': function(t) {
    console.log("Trello Power-Up: initializing board button");
    return [{
      text: 'Test CSV Button',
      callback: showImportPopup
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
