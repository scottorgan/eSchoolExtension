document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("buttonSave").addEventListener("click", saveValues);
});

function loadValues() {
chrome.storage.sync.get({
    cognosDsn: null
}, function(items) {
    document.getElementById('cognosDsn').value = items.cognosDsn;
});
}

function saveValues() {
var cognosDsn = document.getElementById('cognosDsn').value;
chrome.storage.sync.set({
  cognosDsn: cognosDsn
}, function() {
  chrome.runtime.sendMessage({task: "config"})
});
  document.getElementById('status').innerText = "Options saved successfully!";
}

document.addEventListener("DOMContentLoaded", loadValues);