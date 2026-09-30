let rawProfileData = null;

const pasteBox = document.getElementById('profile-pastebox');
const importButton = document.getElementById('btn-import-profile');
const statusText = document.getElementById('import-status');

importButton.addEventListener('click', () => {
  try {
    rawProfileData = JSON.parse(pasteBox.value);
    statusText.textContent = "Profile Loaded"
  } catch (err) {
    rawProfileData = null;
    statusText.textContent = "Profile Invalid";
  }

})
