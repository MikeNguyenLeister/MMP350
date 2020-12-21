/ get user profile id
const profileUID = location.search.split('=')[1];
fb.getUserProfile(profileUID);

const profileName = js.getEl("profile-display-name");
const profileBio = js.getEl("profile-bio");
const profileButton = js.getEl("update-profile");

function displayProfile(userName, userInfo) {

	// display the user profile name
	profileName.value = userName;

	// add other other fields

	if (userInfo.bio) {
		profileBio.value = userInfo.bio;
	}

}

profileButton.onclick = function() {
	// helper: user id, field name 
	fb.updateProfile(profileUID, 'displayName', profileName.value);
	fb.updateProfile(profileUID, 'bio', profileBio.value);
};






/*  
// get user profile id
const profileUID = location.search.split('=')[1];
fb.getUserProfile(profileUID);

const profileName = js.getEl("profile-display-name");
const profileBio = js.getEl("profile-bio");
const profileButton = js.getEl("update-profile");

const profileImage = js.getEl("profile-image");
const profileImageInput = js.getEl("profile-image-file");
const profileImageButton = js.getEl("submit-image");

function displayProfile(userName, userInfo) {

	// display the user profile name
	profileName.value = userName;

	// add other other fields

	if (userInfo.bio) {
		profileBio.value = userInfo.bio;
	}
    
    if (userInfo.imageURL) {
    profileImage.src = userInfo.imageURL;
    }

}

profileButton.onclick = function() {
	// helper: user id, field name 
	fb.updateProfile(profileUID, 'displayName', profileName.value);
	fb.updateProfile(profileUID, 'bio', profileBio.value);
};

// upload a profile image
profileImageButton.onclick = function() {
const file = profileImageInput.files[0];
    if (file) {
        fb.uploadImage(file, profileUID, 'profile-image')
            .then(addProfileImage);
    }
};

function addProfileImage(imageURL) {
    profileImage.src = imageURL;
    fb.updateProfile(profileUID, 'imageURL', imageURL);
}
*/
