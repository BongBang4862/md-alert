var base = location.protocol+'//'+location.host;


document.addEventListener('DOMContentLoaded', function(){
	md_alert_dom = document.getElementById('md_alert_dom');
	md_alert_content = document.getElementById('md_alert_content');
	md_alert_btn_close = document.getElementById('md_alert_btn_close');
	md_alert_footer_other_btns=document.getElementById('md_alert_footer_other_btns');
	
	document.getElementById('only_show').addEventListener('click',function (e) {
			if (md_alert_btn_close) {
				funcionalidad_de_boton_cerrar();
			}
		}
	})
})
function funcionalidad_de_boton_cerrar() {
			md_alert_btn_close.addEventListener('click',function (e) {
				e.preventDefault();
				md_alert_status('hide');
			}
}
function md_alert(data) {
	md_alert_content.innerHTML = "";
	if (data) {
		if (data.title) {
			title = data.title;
		}else{
			title = 'Md Alert';
		}
		content = '';
		content += '<h2>'+title+'</h2>';

		if (data.type) {
			content += '<div class=icon><img src="'+data.type +'.png" alt=""></div>'
		}

		if (data.msg) {
			msg = data.msg;
		}else{
			msg = 'Error desconocido'
		}
		content += '<h5>'+msg+'</h5>'

		if (data.msgs) {
			messages = JSON.parse(data.msgs);
			if (messages.length > 0) {
				content += '<ul>';
					messages.forEach(function (element,index) {
						content += '<li><i class="bi bi-bug-fill"></i> '+ element+'</li>'
					})
				content += '</ul>';
			}
		}
		actions_btns = "";
		if (data.actions) {
			actions = JSON.parse(data.actions);
			if (actions.length > 0) {
				actions.forEach(function(element,index){
					if (element.url) {

						actions_btns += '<a href="'+element.url+'" class ="btn btn-'+element.type+'">'+element.name+'</a>'
					}
				})
			}
		}
		md_alert_footer_other_btns.innerHTML = actions_btns
		md_alert_content.innerHTML=content;
		md_alert_status('show');
	}
	
}
function md_alert_status(status) {
	if (status == 'show') {
		md_alert_dom.style.display = 'flex';
	}
	if (status == 'hide') {
		md_alert_dom.style.display = 'none';
	}
}