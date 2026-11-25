<form class="panel" id="formularioProducto">
    <h2 id="tituloFormulario">Nuevo producto</h2>
    <input id="idProducto" type="hidden" value="0">
    <label for="nombre">Nombre</label>
    <input id="nombre" maxlength="80" required>
    <label for="categoria">Categoría</label>
    <select id="categoria" required>
        <option value="">Selecciona una opción</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Computo">Cómputo</option>
        <option value="Oficina">Oficina</option>
    </select>
    <label for="precio">Precio</label>
    <input id="precio" type="number" min="0" step="0.01" required>
    <label for="existencia">Existencia</label>
    <input id="existencia" type="number" min="0" step="1" required>
    <button type="submit">Guardar</button>
    <button id="botonCancelar" type="button" hidden>Cancelar</button>
</form>
