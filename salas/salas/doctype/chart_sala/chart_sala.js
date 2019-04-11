// Copyright (c) 2019, Ruben and contributors
// For license information, please see license.txt

frappe.ui.form.on('Chart Sala', {
	refresh: function(frm) {

	},
	sala: function(frm) {
		frappe.call({
			method: "salas.salas.doctype.chart_sala.chart_sala.get_eventos",
			args: {
				sala: frm.doc.sala
			},
			callback: function (r) {
				let graph_items = r.message

				let args = {
					data: {
						datasets: [
							{
								values: graph_items.map(d=>d.no_personas)
							}
						],
						labels: graph_items.map(d=>moment(d.inicio).format('MM/DD'))
					},
					colors: ['#ff5857'],
					format_tooltip_x: d=>d +' personas',
					type: 'line',
					height: 140
				};
				new Chart('.grafico', args);
			}
		});

	}
});
