frappe.views.calendar["Evento Sala"] = {
	field_map: {
		"start": "inicio",
		"end": "final",
		"id": "name",
		"allDay": "all_day",
		"title": "nombre"
	},
  options: {
    defaultView: 'listWeek',
    slotDuration: '01:00:00'
  },
	get_events_method: "salas.salas.doctype.evento_sala.evento_sala.get_events"
}
