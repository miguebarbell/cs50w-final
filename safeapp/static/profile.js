document.addEventListener('DOMContentLoaded', function() {
    // load()
})

function deleteProfile() {
    if (window.confirm("Do you really want to remove your Profile?")) {
        window.open("delete");
        // window.open("delete", "Thanks for Visiting!");
    }
}