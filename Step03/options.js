function save_options() {
  var svm_model = document.getElementById('svm_model').value
  var protected_domains = document.getElementById('protected_domains').value

  chrome.storage.local.set({
    protected_domains: protected_domains,
    svm_model: svm_model
  }, function () {
    var status = document.getElementById('status')
    status.textContent = 'Options saved.'

    setTimeout(function () {
      status.textContent = ''
    }, 750)
  })
}

function restore_options() {
  chrome.storage.local.get({
    svm_model: '',
    protected_domains: '',
  }, function (items) {
    document.getElementById('svm_model').value = items.svm_model
    document.getElementById('protected_domains').value = items.protected_domains
  })
}

document.getElementById('save').addEventListener('click', save_options)
document.addEventListener('DOMContentLoaded', restore_options)