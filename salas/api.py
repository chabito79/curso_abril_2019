# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import frappe
import frappe.utils
from frappe.utils import add_to_date

@frappe.whitelist()
def redireccion(login_manager):
    ruta = frappe.db.get_value("User", login_manager.user, "location")
    if ruta:
        frappe.local.response["home_page"] = ruta
    else:
        frappe.local.response["home_page"] = "/desk"


def generar_evento_capacitacion(user,metodo):
    """Generamos un evento de induccion al momento de crear un usuario
    El metodo add_to_date viene de frappe.utils.data (es necesario importarlo) y
    estamos recibiendo 2 argumentos (objeto & nombre del metodo) en nuestra funcion."""

    evento = frappe.get_doc({
        "doctype": "Evento Sala",
    	"nombre": "Induccion para {0}".format(user.full_name),
        "usuario": user.name,
        "no_personas": 1,
        "sala": "San Diego",
        "tipo": "Capacitacion Interna",
        "inicio": add_to_date(date=None, years=0, months=0, days=0, hours=24, as_string=False, as_datetime=False),
        "final": add_to_date(date=None, years=0, months=0, days=0, hours=25, as_string=False, as_datetime=False)
    })
    evento.insert()
    frappe.msgprint('Evento de induccion generado.')
