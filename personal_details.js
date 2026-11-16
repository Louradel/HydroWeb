// personal_details.js

// ---------- PASSWORD SECTION ----------
const toggleBtn = document.getElementById('togglePasswordBtn');
const passwordFields = document.getElementById('passwordFields');
const cancelBtn = document.getElementById('cancelPasswordBtn');

// ---------- EDIT SECTION ----------
const editBtn = document.querySelector('.edit-btn');

// Editable inputs including Full Name, Address, Contact No, Store Name, Opening Time, Closing Time
const editableInputs = document.querySelectorAll(
  '.details-row input:not([id^="currentPassword"])' // Exclude password fields
);

// ----- PASSWORD TOGGLE -----
toggleBtn.addEventListener('click', () => {
  if (passwordFields.style.display === 'flex') {
    passwordFields.style.display = 'none';
    toggleBtn.textContent = 'Change Password';
    clearPasswordInputs();
  } else {
    passwordFields.style.display = 'flex';
    toggleBtn.textContent = 'Close';
  }
});

cancelBtn.addEventListener('click', () => {
  passwordFields.style.display = 'none';
  toggleBtn.textContent = 'Change Password';
  clearPasswordInputs();
});

function clearPasswordInputs() {
  document.getElementById('currentPassword').value = '';
  document.getElementById('newPassword').value = '';
  document.getElementById('confirmPassword').value = '';
}

// ----- EDIT BUTTON FUNCTIONALITY -----
editBtn.addEventListener('click', () => {
  const isEditing = editBtn.textContent === 'Save';

  editableInputs.forEach(input => {
    if (isEditing) {
      // Save mode: make inputs readonly again
      input.setAttribute('readonly', true);
    } else {
      // Edit mode: make inputs editable
      input.removeAttribute('readonly');
    }
  });

  // Toggle button text
  editBtn.textContent = isEditing ? 'Edit' : 'Save';
});
