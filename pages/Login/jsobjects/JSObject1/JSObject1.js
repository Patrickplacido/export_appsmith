export default {
	verificaLogin: async () => {
		const user_info = await verificaLogin.run();
		if (user_info.length > 0) {
			showAlert("Login efetuado com sucesso!");
			storeValue("user", user_info[0] ?? {});
			navigateTo("Home");
		} else {
			throw new Error("Usuário não encontrado!");
		}
	}
}