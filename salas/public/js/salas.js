$(document).ready(function() {
  // para esconder el link al foro de erpnext
  $('[data-link-type=forum]').last().hide()

  // Reemplazar el link de Github issues con mail a soporte
  $('[href="https://github.com/frappe/erpnext/issues"]').replaceWith('<a href="mailto:soporte@oasishoteles.com">Contactar a Soporte</a>')


})
