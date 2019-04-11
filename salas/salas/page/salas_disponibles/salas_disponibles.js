frappe.pages['salas-disponibles'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Lista de Salas disponibles',
		single_column: true
	});
}
