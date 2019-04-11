# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version
# Detalles del app
app_name = "salas"
app_title = "Salas"
app_publisher = "Ruben"
app_description = "App de Frappe para administrar las salas de Oasis"
app_icon = "octicon octicon-paintcan"
app_color = "#ff5858"
app_email = "ruben@posix.mx"
app_license = "MIT"

error_report_email = "soporte@oasis.com"

calendars = ["Evento Sala"]

on_session_creation = "salas.api.redireccion"

website_context = {
	"favicon": 	"/files/doctor-bag.png",
	"splash_image": "/files/doctor-bag.svg"
}

# este es un comentario de ruben
# Includes in <head>
# ------------------

# Fixtures (to import DocType customisations)
# --------
fixtures = [
		"Custom Field",
		"Custom Script"
		]

# include js, css files in header of desk.html
app_include_css = "/assets/salas/css/salas.css"
app_include_js = ["/assets/salas/js/salas.js","/assets/salas/js/sweetalert2.all.min.js"]

# include js, css files in header of web template
# web_include_css = "/assets/salas/css/salas.css"
# web_include_js = "/assets/salas/js/salas.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "salas.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "salas.install.before_install"
# after_install = "salas.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "salas.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

doc_events = {
	"User": {
		"after_insert": "salas.api.generar_evento_capacitacion",
	}
}

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"salas.api.cada_cuatro_minutos"
# 	],
# 	"cron": {
#         "* * * * *": [
#             "salas.api.cada_minuto"
#         ]
#     }
# }

# Testing
# -------

# before_tests = "salas.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "salas.event.get_events"
# }
