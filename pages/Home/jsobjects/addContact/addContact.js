export default {

	addContact () {
		GetIdFromEmail.run().then(() => {
			const user_contact = GetIdFromEmail.data[0];
			CreateContact.run({id_contact_user: user_contact.user_id}).then(() => {
				GetUserContacts.run();
			});
		})

	}
}