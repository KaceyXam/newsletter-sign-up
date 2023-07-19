import { defineStore } from "pinia";

export const useEmailStore = defineStore("email", {
	state: () => {
		return { email: "" };
	},
	actions: {
		set(newEmail: string) {
			this.email = newEmail;
		},
		reset() {
			this.email = "";
		},
	},
});
