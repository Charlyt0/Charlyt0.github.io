Swal.fire({
title: "¡¡¡Preparad@s para la boda del año!!!",
confirmButtonText: "Si, estoy preparad@",
confirmButtonColor: "#ffbba8",
imageUrl: "img/amigoss.jpg",
imageWidth: "400px",
imageHeight: "200px",
widht: "80%",
position: "center",
});

//Progresivo
$("#btn7").click(function(){
    Swal.mixin({
      input: 'text', //puede ser text, number, email, password, textarea, select, radio
      confirmButtonText: 'Siguiente &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Tu nombre',
      },
      {
        title: 'Nombre de la Canción y Autor',
      },
        {
        title: 'Si lo desea ingrese el link de Youtube, Spotify, etc.',
      }      
    ]).then((result) => {
      if (result.value) {
        Swal.fire({
          title: '¡Completado!',
          html:
            'Tus respuestas: <pre><code>' +
              JSON.stringify(result.value) +
            '</code></pre>',
          confirmButtonText: 'Ok'
        })
      }
    });    
});
