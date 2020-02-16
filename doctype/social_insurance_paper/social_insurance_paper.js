// Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Social insurance Paper', {
	expiry_date: function(frm) {
    console.log(frm.doc.expiry_date)
	}
});
