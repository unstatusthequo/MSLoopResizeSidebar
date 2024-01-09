chrome.storage.sync.get('sidebarWidth', (data) => {
  if (data.sidebarWidth) {
    // Adjusting the CSS variable --sidebar-reserved-width
    var styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `.fh1cgl3 { --sidebar-reserved-width: ${data.sidebarWidth}px !important; }`;
    document.head.appendChild(styleSheet);

    // Adjusting the width of SidebarContents to be 1px less than the sidebar width
    var sidebarContents = document.getElementById('SidebarContents');
    if (sidebarContents) {
      var adjustedWidth = parseInt(data.sidebarWidth) - 1;
      sidebarContents.style.cssText = 'width: ' + adjustedWidth + 'px !important;';
    }
  }
});
