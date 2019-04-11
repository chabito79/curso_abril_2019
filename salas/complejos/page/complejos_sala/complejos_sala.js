frappe.pages['complejos-sala'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Lista de Complejos',
		single_column: true
	});
}