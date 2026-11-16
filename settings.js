// ----------------- PERSONAL DETAILS EDIT -----------------
const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

const defaultButtons = document.getElementById("defaultButtons");
const editButtons = document.getElementById("editButtons");

const fullname = document.getElementById("fullname");
const contact = document.getElementById("contact");
const address = document.getElementById("address");

// Enable edit
editBtn.addEventListener("click", () => {
  fullname.removeAttribute("readonly");
  contact.removeAttribute("readonly");
  address.removeAttribute("readonly");

  defaultButtons.classList.add("hidden");
  editButtons.classList.remove("hidden");
});

// Save changes
saveBtn.addEventListener("click", () => {
  fullname.setAttribute("readonly", true);
  contact.setAttribute("readonly", true);
  address.setAttribute("readonly", true);

  defaultButtons.classList.remove("hidden");
  editButtons.classList.add("hidden");

  alert("Your personal information has been saved!");
});

// Cancel edit
cancelBtn.addEventListener("click", () => {
  fullname.setAttribute("readonly", true);
  contact.setAttribute("readonly", true);
  address.setAttribute("readonly", true);

  defaultButtons.classList.remove("hidden");
  editButtons.classList.add("hidden");
});

// ----------------- PASSWORD TOGGLE -----------------
const togglePasswordBtn = document.getElementById("togglePasswordBtn");
const passwordFields = document.getElementById("passwordFields");

// Save Password Button
const savePasswordBtn = document.getElementById("savePasswordBtn");

// Cancel Password Button (styled like other cancel buttons)
const cancelPasswordBtn = document.createElement("button");
cancelPasswordBtn.textContent = "Cancel";
cancelPasswordBtn.className = "cancel-btn";

// Button container for Save + Cancel
const passwordBtnContainer = document.createElement("div");
passwordBtnContainer.style.display = "flex";
passwordBtnContainer.style.gap = "10px";
passwordBtnContainer.style.marginTop = "10px";
passwordBtnContainer.appendChild(savePasswordBtn);
passwordBtnContainer.appendChild(cancelPasswordBtn);
passwordFields.appendChild(passwordBtnContainer);

togglePasswordBtn.addEventListener("click", () => {
  passwordFields.classList.toggle("active");

  // Hide or show the Change Password button
  togglePasswordBtn.style.display = passwordFields.classList.contains("active") ? "none" : "inline-block";

  // Clear password inputs when toggling
  currentPassword.value = "";
  newPassword.value = "";
  confirmPassword.value = "";
});

// ----------------- SAVE PASSWORD -----------------
const currentPassword = document.getElementById("currentPassword");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");

savePasswordBtn.addEventListener("click", () => {
  if (!currentPassword.value || !newPassword.value || !confirmPassword.value) {
    alert("Please fill in all password fields!");
    return;
  }
  if (newPassword.value !== confirmPassword.value) {
    alert("New password and confirm password do not match!");
    return;
  }

  alert("Password has been changed successfully!");

  // Clear inputs
  currentPassword.value = "";
  newPassword.value = "";
  confirmPassword.value = "";
  passwordFields.classList.remove("active");

  // Show Change Password button again
  togglePasswordBtn.style.display = "inline-block";
});

// ----------------- CANCEL PASSWORD -----------------
cancelPasswordBtn.addEventListener("click", () => {
  currentPassword.value = "";
  newPassword.value = "";
  confirmPassword.value = "";
  passwordFields.classList.remove("active");

  // Show Change Password button again
  togglePasswordBtn.style.display = "inline-block";
});

// ----------------- DELETE ACCOUNT MODAL -----------------
const deleteBtn = document.getElementById("deleteAccountBtn");
const deleteModal = document.getElementById("deleteModal");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");

deleteBtn.addEventListener("click", () => {
  deleteModal.style.display = "flex";
});

cancelDelete.addEventListener("click", () => {
  deleteModal.style.display = "none";
});

confirmDelete.addEventListener("click", () => {
  deleteModal.style.display = "none";
  alert("Your account has been deleted!");
});
