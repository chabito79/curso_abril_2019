# -*- coding: utf-8 -*-
# Copyright (c) 2019, Ruben and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class ChartSala(Document):
	pass

@frappe.whitelist()
def get_eventos(sala):
	eventos = frappe.get_list('Evento Sala', filters={ 'sala': sala }, fields=['no_personas', 'inicio'], order_by='creation')
	return eventos
