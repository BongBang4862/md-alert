document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('only_show').addEventListener('click',function (e) {
		e.preventDefault();
		funcionalidad_de_boton_cerrar();
		md_alert({title:'Alerta', type:'error', msg :'Ha ocurrido un error, que paso?', msgs:JSON.stringify(['mensaje1','mensaje2','mensaje3','mensaje4'])});
	})
	document.getElementById('alert_with_actions').addEventListener('click',function (e) {
		e.preventDefault();
		funcionalidad_de_boton_cerrar();
		md_alert({title:'Alerta', type:'success', msg :'Todo un exito', actions: JSON.stringify([{url: base+'/login', name: 'Ingresar', type: 'success'},{url: base+'/login', name: 'Info', type: 'info'},{url: base+'/login', name: 'Principal', type: 'primary'},{url: base+'/login', name: 'Danger', type: 'danger'}])});
	})
	document.getElementById('alert_confirm').addEventListener('click',function (e) {
		e.preventDefault();
		funcionalidad_de_boton_cerrar();
		md_alert({title:'Desea Eliminar?', type:'delete', msg :'si elimina este elemento no lo podra recueperar', actions: JSON.stringify([{url: base+'/delete', name: 'delete', type: 'danger'}])});
	})
})