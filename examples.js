document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('only_show').addEventListener('click',function (e) {
		e.preventDefault();
		md_alert({title:'Alerta', type:'error', msg :'Ha ocurrido un error, que paso?', msgs:JSON.stringify(['mensaje1','mensaje2','mensaje3','mensaje4'])});
	})
	document.getElementById('alert_with_actions').addEventListener('click',function (e) {
		e.preventDefault();
		md_alert({title:'Alerta', type:'success', msg :'Todo un exito', actions: JSON.stringify([{url: base+'/login', name: 'Ingresar', type: 'success'},{url: base+'/login', name: 'Info', type: 'info'},{url: base+'/login', name: 'Error', type: 'error'},{url: base+'/login', name: 'Danger', type: 'danger'}])});
	})
})