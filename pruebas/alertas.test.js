const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const llamadas = [];
const contexto = { Swal: { fire: opciones => { llamadas.push(opciones); return Promise.resolve({isConfirmed: true}); } } };
vm.createContext(contexto);
(async () => {
  vm.runInContext(fs.readFileSync('assets/js/alertas.js', 'utf8'), contexto);
  contexto.mostrarMensaje('Guardado', false);
  assert.equal(llamadas[0].icon, 'success');
  contexto.mostrarMensaje('Error', true);
  assert.equal(llamadas[1].icon, 'error');
  assert.equal(await contexto.confirmarEliminacion('Mesa'), true);
  assert.equal(llamadas[2].showCancelButton, true);
  contexto.Swal.fire = () => Promise.resolve({isConfirmed: false});
  assert.equal(await contexto.confirmarEliminacion('Mesa'), false);
  console.log('Pruebas de alertas correctas');
})().catch(e => { console.error(e); process.exitCode = 1; });
