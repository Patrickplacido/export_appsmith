export default {
	verifyEmail: async () => {
		setTimeout(() => {}, 500)
		const data = await verificaEmail.run();
		if(data.length > 0){
			return false;
		}
		return true;
	}
	// tava testando um negócio mas sei la porque ele nao deixa eu chamar as funções