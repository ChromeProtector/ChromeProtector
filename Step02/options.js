
function save_options() {
  var words = document.getElementById('protected_words').value;
  chrome.storage.local.set({
    protected_words: words
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}


function restore_options() {
  chrome.storage.local.get({
    protected_words: ''
  }, function(items) {
    document.getElementById('protected_words').value = items.protected_words;
  });
}



document.getElementById('save').addEventListener('click', save_options);
document.addEventListener('DOMContentLoaded', restore_options);
