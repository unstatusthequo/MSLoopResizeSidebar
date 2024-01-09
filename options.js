// When the options page is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Load the current width and display it
  chrome.storage.sync.get('sidebarWidth', (data) => {
    if(data.sidebarWidth) {
      document.getElementById('currentWidthValue').textContent = data.sidebarWidth;
      document.getElementById('widthInput').value = data.sidebarWidth;
    }
  });
});

// When the save button is clicked
document.getElementById('saveButton').addEventListener('click', () => {
  var width = document.getElementById('widthInput').value;
  chrome.storage.sync.set({sidebarWidth: width}, () => {
    // Update the current width display
    document.getElementById('currentWidthValue').textContent = width;
    // Show confirmation message
    document.getElementById('saveConfirmation').textContent = 'Width saved successfully!';
    // Clear the confirmation message after a delay
    setTimeout(() => {
      document.getElementById('saveConfirmation').textContent = '';
    }, 3000);

    // After saving, find and reload the tab with the matched URL
    chrome.tabs.query({url: "https://loop.microsoft.com/*"}, function(tabs) {
      if(tabs.length > 0) {
        chrome.tabs.reload(tabs[0].id); // Reloads the first matched tab
      }
    });
  });
});
