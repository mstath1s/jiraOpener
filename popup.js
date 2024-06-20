document.addEventListener('DOMContentLoaded', function() {
    let ticketInput = document.getElementById('ticketNumber');
    ticketInput.focus();
  
    document.getElementById('openTicket').addEventListener('click', function() {
      let ticketNumber = ticketInput.value;
      if (ticketNumber) {
        let jiraUrl = `https://alliws.atlassian.net/browse/WFDR-${ticketNumber}`;
        browser.tabs.create({ url: jiraUrl }).then(() => {
          window.close();
        });
      } else {
        alert("Please enter a ticket number.");
      }
    });
  
    ticketInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        document.getElementById('openTicket').click();
      }
    });
    ticketInput.addEventListener('keyup', function(event) {
        if (event.key === 'Escape') {
            window.close();
        }
      });
  });
  