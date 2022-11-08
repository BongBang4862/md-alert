document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('only_show').addEventListener('click',function (e) {
		e.preventDefault();
		md_alert({title:'Alerta', type:'error'});
	})
})