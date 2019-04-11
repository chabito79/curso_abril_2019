from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Catalogos"),
			"items": [
				{
					"type": "doctype",
					"name": "Hotel",
                    "label": _("Lista de Hoteles"),
				}
			]
		}
    ]
