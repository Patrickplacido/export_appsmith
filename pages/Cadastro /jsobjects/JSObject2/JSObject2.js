export default {
	verificaCadastro: async () => {
		const senha = userSecret.text; 
		const repitaSenha = userSecretCheck.text; 
		const email = userEmail.text; 
		if (senha !== repitaSenha) {
			throw new Error("As senhas não coincidem. Por favor, verifique e tente novamente.");
		} else {
			const userExists = await VerificaEmail.run();

			if (userExists.length > 0) {
				throw new Error("O email já está cadastrado. Por favor, use outro email.");
			} else {
				InsertUser.run();
				showAlert("Cadastro realizado com sucesso!");
				navigateTo('Login')
			}
		}
	}

}