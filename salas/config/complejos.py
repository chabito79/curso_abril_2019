from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Catalogos"),
			"items": [
				{
					"type": "doctype",
					"name": "Complejo",
                    "label": _("Lista de Complejos"),
				}
			]
		},
        {
			"label": _("Paginas"),
			"items": [
				{
					"type": "page",
					"name": "complejos-sala",
					"label": _("Pagina de Complejos Sala")
				},
			]
		}
    ]
