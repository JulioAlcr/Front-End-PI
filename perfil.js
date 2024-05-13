// FOTO DE PERFIL

document.addEventListener('DOMContentLoaded', function () {
    function previewImage(event) {
        var fileInput = event.target;
        var imagePreview = document.getElementById('imagePreview');
        
        imagePreview.innerHTML = '';

        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                var img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '100%';
                img.style.height = '100%';
                imagePreview.appendChild(img);
            };

            reader.readAsDataURL(fileInput.files[0]);
        }
    }

    var fotoPerfilInput = document.getElementById('fotoPerfil');
    fotoPerfilInput.addEventListener('change', previewImage);
});




  

