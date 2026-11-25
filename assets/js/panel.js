// Menú lateral y preferencias de apariencia.
const tema = document.getElementById('tema');
const modo = document.getElementById('modo');
const abrirMenu = document.getElementById('abrirMenu');
function cambiarMenu(cerrar) {
    document.body.classList.toggle('menu-cerrado', cerrar);
    abrirMenu.setAttribute('aria-expanded', String(!cerrar));
    document.getElementById('menu').inert = cerrar;
}
abrirMenu.onclick = () => cambiarMenu(!document.body.classList.contains('menu-cerrado'));
document.getElementById('cerrarMenu').onclick = () => { cambiarMenu(true); abrirMenu.focus(); };
cambiarMenu(window.innerWidth <= 700);
function aplicarTema() {
    document.body.dataset.tema = tema.value;
    localStorage.setItem('temaInventario', tema.value);
    document.dispatchEvent(new Event('apariencia'));
}
function aplicarModo(oscuro) {
    document.body.classList.toggle('oscuro', oscuro);
    modo.textContent = oscuro ? 'Modo claro' : 'Modo oscuro';
    localStorage.setItem('modoInventario', String(oscuro));
    document.dispatchEvent(new Event('apariencia'));
}
tema.value = localStorage.getItem('temaInventario') || 'verde';
if (!tema.value) tema.value = 'verde';
aplicarTema();
aplicarModo(localStorage.getItem('modoInventario') === 'true');
tema.onchange = aplicarTema;
modo.onclick = () => aplicarModo(!document.body.classList.contains('oscuro'));
