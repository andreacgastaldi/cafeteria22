document.addEventListener("DOMContentLoaded", function() {
    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML = `
        <div class="footer-section">
            <h3>Contacto</h3>
            <p>Email: cafeteria22@gmail.com</p>
            <p>Teléfono: 999-999999</p>
        </div>
        <div class="footer-section">
            <h3>Enlaces Rápidos</h3>
            <a href="index.html">Home</a> | 
            <a href="carta.html">Nuestra Carta</a> | 
            <a href="contacto.html">Contacto</a> | 
            <a href="nosotros.html">Nosotros</a>
        </div>
        <div class="footer-section">
            <h3>Síguenos</h3>
            <a href="#"><i class="fab fa-facebook"></i> Facebook</a>
            <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
            <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
        </div>
    `;
    document.body.appendChild(footer);
});