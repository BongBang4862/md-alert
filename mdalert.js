var base = location.protocol+'//'+location.host;
console.log(base);
document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('only_show').addEventListener('click',function (e) {
		md_alert_dom = document.getElementById('md_alert_dom');
		md_alert_content = document.getElementById('md_alert_content');
		md_alert_btn_close = document.getElementById('md_alert_btn_close');
		if (md_alert_btn_close) {
			md_alert_btn_close.addEventListener('click',function (e) {
				e.preventDefault();
				md_alert_status('hide');
			})
		}
	})
})
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