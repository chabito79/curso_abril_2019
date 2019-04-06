// Copyright (c) 2019, Ruben and contributors
// For license information, please see license.txt

frappe.ui.form.on('Evento Sala', {
	refresh: function(frm) {

	},
	validate: function(frm){
		Swal.fire({
		  type: 'success',
		  title: 'Guardado Exitosamente',
		  text: 'La sala ya esta apartada para este evento',
		  footer: '<a href>Enviar Correo de Notificacion</a>'
		})

	}
});
