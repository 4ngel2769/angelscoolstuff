function mostrar(e) {
    if (e.classList.contains("fa-moon-o")) { 
        e.classList.remove("fa-moon-o"); 
        e.classList.add("fa-sun-o"); 
        e.style.color = "rgb(225, 225, 0)";
        document.body.style.background = 'rgb(10, 10, 10)';
        document.querySelector('#userName').style.color = '#fff';

        let links = document.querySelectorAll('.link');
        
        links[0].style.filter = 'grayscale(100%)';
        
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(100%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        
        circulos[0].style.filter = 'grayscale(100%)';
        
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(100%)';
        }

    } else { 
        e.classList.remove("fa-sun-o"); 
        e.classList.add("fa-moon-o"); 
        e.style.color = "white";
        document.body.style.background = 'rgb(243, 242, 242)';
        

        let links = document.querySelectorAll('.link');
        
        links[0].style.filter = 'grayscale(0%)';
        
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(0%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        
        circulos[0].style.filter = 'grayscale(0%)';
        
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(0%)';
        }
    }

}