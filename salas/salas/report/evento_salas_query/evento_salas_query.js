frappe.query_reports["Evento Salas Query"] = {
	"filters": [
		{
			"fieldname":"inicio",
			"label": __("Desde esta Fecha"),
			"fieldtype": "Date",
			"default": frappe.datetime.add_days(frappe.datetime.get_today(), -7),
			"reqd": 1,
			"width": "60px"
		},
    {
			"fieldname":"final",
			"label": __("Hasta esta Fecha"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1,
			"width": "60px"
		}
  ]
}
