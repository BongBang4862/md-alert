<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>mdalert</title>
	<link rel="stylesheet" href="style.css?v= <?php echo time() ?>">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
	<script type="text/javascript" src="mdalert.js?v= <?php echo time() ?>"></script>
	<script type="text/javascript" src="examples.js?v= <?php echo time() ?>"></script>
</head>
<body>
	<div class="md_alert" id="md_alert_dom">
		<div class="md_alert_inside" id="md_alert_inside">
			<div class="md_alert_content" id="md_alert_content"></div>
			<div class="md_alert_footer" id="md_alert_footer">
				<div class="md_alert_footer_other_btns" id="md_alert_footer_other_btns"></div>
				<a href="#" class="md_alert_btn_close" id="md_alert_btn_close">Cerrar</a>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-4 col-md-2">
			<a href="" id="only_show" class="btn btn-primary w-100">Mostrar</a>
		</div>
		<div class="col-4 col-md-2">
			<a href="" id="alert_with_actions" class="btn btn-primary w-100">Acciones</a>
		</div>
		<div class="col-4 col-md-2">
			<a href="" id="alert_confirm" class="btn btn-primary w-100">Acciones</a>
		</div>
		<div class="col-4 col-md-2">
			<a href="" id="alert_callback" class="btn btn-primary w-100">Acciones</a>
		</div>
	</div>
</body>
</html>