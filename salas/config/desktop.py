# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"module_name": "Nuevo",
			"label": _("Modulo Nuevo"),
			"color": "#FFF5A7",
			"icon": "octicon octicon-calendar",
			"type": "module"
		},
		{
			"module_name": "Salas",
			"color": "#ff5858",
			"icon": "octicon octicon-paintcan",
			"type": "module",
			"label": _("Salas")
		},
		{
			"module_name": "Complejos",
			"color": "#236213",
			"icon": "octicon octicon-bell",
			"type": "module",
			"label": _("Complejos")
		}
	]
