// Copyright (c) 2019, Ruben and contributors
// For license information, please see license.txt
frappe.ui.form.on('Evento Sala Item', {
  servicios_add: function(frm) {
      console.log('agregando servicios')
   },
   servicios_remove: function(frm) {
      console.log('REMOVIENDO servicios')
   },
   servicios_move: function(frm) {
      console.log('MOVIENDO SERVICIOS DE LA TABLA')
   }
});

frappe.ui.form.on('Evento Sala', {
	empleado: function(frm) {
		// frappe.db.get_value("Employee", {'name': frm.doc.empleado } , ['last_name','gender'], (r) => { console.log(r) } )
		let lista = frappe.db.get_list("Employee", { fields: ['name','gender'] } )
		console.log(lista)
	},
	setup: function(frm) {
		// console.log("SETUP")
		// debugger
	},
	onload: function(frm) {
		// console.log("onload")
		// debugger
	},
	refresh: function(frm) {
		// console.log("REFRESH")
		inicio_reqd(frm)
		$('.btn[data-fieldname=mostrar_alerta]').removeClass('btn-xs btn-default').addClass('btn-lg btn-danger')
		// debugger
	},
	onload_post_render: function(frm) {
		// console.log("ONLOAD POST RENDER")
		// debugger
	},
	mostrar_alerta: function(frm) {
		alert('Alerta Mostrada')
	},
	tipo: function(frm){
		switch(frm.doc.tipo) {
		  case "Conferencia":
		    frm.set_value('naming_series', 'CONF-');
		    break;
		  case "Junta Interna":
		    frm.set_value('naming_series', 'JUNTA-');
		    break;
			case "Capacitacion Interna":
		    frm.set_value('naming_series', 'CAP-');
		    break;
			case "Otros":
		    frm.set_value('naming_series', 'OTROS-');
		    break;
		}
	},
	sala: function(frm) {
		inicio_reqd(frm)
	},
	validate: function(frm){
		// if ( frm.doc.__islocal ) {  //usamos __islocal para validar si esta grabado o no en la DB
				frappe.call({
					method: "frappe.client.get_value", // AJAX call al API interno
					args: {
						doctype: 'Configuracion Salas',
						filters:{'name': 'Configuracion Salas'},
						fieldname:[ 'mensaje', 'hora_inicio']
					},
					callback: function(r) {
						// console.log(r.message)
						let mensaje = r.message.mensaje
						// comparacion(frm, r.message.hora_inicio)
						// Swal.fire({  //Usamos sweet alert
						//   type: 'success',
						//   title: 'Guardado Exitosamente',
						//   text: mensaje,
						//   footer: '<a href>Enviar Correo de Notificacion</a>'
						// })
					}
				});
		// }




	}
});

var comparacion = function(frm, hora_inicio){
	let inicio_setting = parseFloat(hora_inicio)
	let inicio_form = parseFloat(moment(frm.doc.inicio).format('hh:mm:s'))
	if ( inicio_form < inicio_setting) {
		frappe.msgprint('La hora de inicio de este evento no es permitida. Debes agendar despues de las ' + hora_inicio)
	}

}

var inicio_reqd = function (frm) {
	if (frm.doc.sala === "San Diego") {
		frm.set_df_property('inicio','reqd',1)
	} else {
		frm.fields_dict.inicio.df.reqd = 0
		frm.refresh_field('inicio')
	}
}
