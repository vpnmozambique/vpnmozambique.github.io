const icon_input = document.querySelector("#icon_input")
const icon_view = document.querySelector("#icon_view")

icon_input.addEventListener('change', function(e) {
  const inputTarget = e.target;
  const file = icon_input.files[0];
  

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function(e) {
      const readerTarget = e.target;

      const img = document.createElement('img');
      img.src = reader.result;
      img.classList.add('imagem-tamanho')

      icon_view.appendChild(img)

    });

    reader.readAsDataURL(file)
    icon_view.innerHTML = '';


  } else {
    icon_view.innerHTML = "Adicione uma imagem";


  }
})



const inputFile1 = document.querySelector("#p1_img")
const pictureImage1 = document.querySelector("#p1_img_view")

inputFile1.addEventListener('change', function(e) {
  const inputTarget = e.target;
  const file = inputFile1.files[0];
  

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function(e) {
      const readerTarget = e.target;

      const img = document.createElement('img');
      img.src = reader.result;
      img.classList.add('imagem-tamanho')

      pictureImage1.appendChild(img)

    });

    reader.readAsDataURL(file)
    pictureImage1.innerHTML = '';


  } else {
    pictureImage1.innerHTML = "Adicione uma imagem";


  }
})



const inputFile2 = document.querySelector("#p2_img")
const pictureImage2 = document.querySelector("#p2_img_view")

inputFile2.addEventListener('change', function(e) {
  const inputTarget = e.target;
  const file = inputFile2.files[0];
  

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function(e) {
      const readerTarget = e.target;

      const img = document.createElement('img');
      img.src = reader.result;
      img.classList.add('imagem-tamanho')

      pictureImage2.appendChild(img)

    });

    reader.readAsDataURL(file)
    pictureImage2.innerHTML = '';


  } else {
    pictureImage2.innerHTML = "Adicione uma imagem";


  }
})


const inputFile3 = document.querySelector("#p3_img")
const pictureImage3 = document.querySelector("#p3_img_view")

inputFile3.addEventListener('change', function(e) {
  const inputTarget = e.target;
  const file = inputFile3.files[0];
  

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function(e) {
      const readerTarget = e.target;

      const img = document.createElement('img');
      img.src = reader.result;
      img.classList.add('imagem-tamanho')

      pictureImage3.appendChild(img)

    });

    reader.readAsDataURL(file)
    pictureImage3.innerHTML = '';


  } else {
    pictureImage3.innerHTML = "Adicione uma imagem";


  }
})