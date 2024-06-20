browser.commands.onCommand.addListener(function(command) {
    if (command === "open-jira-ticket") {
      browser.browserAction.openPopup();
    }
  });
  