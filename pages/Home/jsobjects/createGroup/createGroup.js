export default {
	criarGrupo: async () => {
		const nomeGrupo = groupName.text;
		const integrantesId = groupMembers.selectedOptionValues;

		if (!nomeGrupo || integrantesId.length === 0) {
			throw new Error("Por favor, preencha o nome do grupo e selecione pelo menos um integrante.");
		}

		const group = await criaGrupo.run();
		const groupId = group[0].group_id;
		await adicionaMembrosGrupo.run({
			groupId: groupId,
			userId: appsmith.store.user.id
		});

		for (const userId of integrantesId) {
			await adicionaMembrosGrupo.run({
				groupId: Number(groupId),
				userId: Number(userId)
			});
		}

		showAlert("Grupo criado com sucesso!");
		navigateTo('Home');
	}
};
