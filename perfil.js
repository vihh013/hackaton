function toggleEditProfile() {
    var editProfileDiv = document.getElementById('editProfile');
    if (editProfileDiv.style.display === 'none' || editProfileDiv.style.display === '') {
        editProfileDiv.style.display = 'block';
    } else {
        editProfileDiv.style.display = 'none';
    }
}

function showPopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function hidePopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

function uploadProfilePic() {
    var fileInput = document.getElementById('profilePicInput');
    var file = fileInput.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var profilePic = document.querySelector('.profile img');
            profilePic.src = e.target.result;
            hidePopup();
        }
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecione um arquivo.');
    }
}

function saveProfile() {
    var editName = document.getElementById('editName').value;
    var editEmail = document.getElementById('editEmail').value;
    var editAddress = document.getElementById('editAddress').value;
    var editPhone = document.getElementById('editPhone').value;

    document.getElementById('userName').textContent = editName;
    document.getElementById('userEmail').textContent = editEmail;
    document.getElementById('userAddress').textContent = editAddress;
    document.getElementById('userPhone').textContent = editPhone;

    toggleEditProfile();
}
