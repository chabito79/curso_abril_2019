# -*- coding: utf-8 -*-
# Copyright (c) 2019, Ruben and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class EventoSala(Document):
	pass


@frappe.whitelist()
def get_events(start, end, filters=None):

	from frappe.desk.calendar import get_event_conditions
	data = frappe.db.sql("""select name, nombre, color, inicio, final from `tabEvento Sala` """, as_dict=True)

	return data
