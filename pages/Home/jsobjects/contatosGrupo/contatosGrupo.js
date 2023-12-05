export default {
	getContatos: async () => {
		return GetMembersOfGroup.run(List2.triggeredItem.group_id);
	}

}

