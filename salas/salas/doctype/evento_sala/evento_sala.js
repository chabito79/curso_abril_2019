// Copyright (c) 2019, Ruben and contributors
// For license information, please see license.txt

frappe.ui.form.on('Evento Sala', {
	refresh: function(frm) {

	},
	validate: function(frm){
		if ( frm.doc.__islocal ) {  //usamos __islocal para validar si esta grabado o no en la DB
				frappe.call({
					method: "frappe.client.get_value", // AJAX call al API interno
					args: {
						doctype: 'Configuracion Salas',
						filters:{'name': 'Configuracion Salas'},
						fieldname:[ 'mensaje', 'hora_inicio']
					},
					callback: function(r) {
						console.log(r.message)
						let mensaje = r.message.mensaje
						var hora_inicio = r.message.hora_inicio
						Swal.fire({  //Usamos sweet alert
						  type: 'success',
						  title: 'Guardado Exitosamente',
						  text: mensaje,
						  footer: '<a href>Enviar Correo de Notificacion</a>'
						})
					}
				});
		}

		if ( frm.doc.inicio < hora_inicio ) { alert('es muy temprano')}


	}
});
