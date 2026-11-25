const assert = require('node:assert/strict');
const {filtrarProductos, resumenInventario} = require('../assets/js/filtros.js');
const productos = [{nombre:'Mouse',categoria:'Accesorios',precio:'20',existencia:'0'},{nombre:'Monitor',categoria:'Computo',precio:'100',existencia:'8'},{nombre:'Teclado',categoria:'Accesorios',precio:'30',existencia:'3'}];
assert.deepEqual(filtrarProductos(productos,{categoria:'Accesorios',orden:'mayor',limite:1}).map(p=>p.nombre),['Teclado']);
assert.deepEqual(filtrarProductos(productos,{stock:'agotado'}).map(p=>p.nombre),['Mouse']);
assert.deepEqual(filtrarProductos(productos,{buscar:'MON',orden:'menor'}).map(p=>p.nombre),['Monitor']);
assert.equal(resumenInventario(productos).valor,890);
assert.equal(resumenInventario([]).unidades,0);
console.log('Filtros y resumen correctos');
