document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('only_show').addEventListener('click',function (e) {
		e.preventDefault();
		md_alert({title:'Alerta', type:'error', msg :'Ha ocurrido un error, que paso?', msgs:JSON.stringify(['mensaje1','mensaje2','mensaje3','mensaje4'])});
	})
})