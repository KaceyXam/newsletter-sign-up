import { createRouter, createWebHistory } from "vue-router";
import FormPage from "./routes/Form.vue";
import SuccessPage from "./routes/Success.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: FormPage },
		{ path: "/success", component: SuccessPage },
	],
});

export default router;
