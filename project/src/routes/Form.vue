<script setup lang="ts">
import { ref } from "vue";
import { useEmailStore } from "@/stores/email";
import router from "@/router";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const newEmail = ref("");
const emailStore = useEmailStore();

const error = ref<string | null>(null);

function formSubmit(e: Event) {
	e.preventDefault();
	if (newEmail.value == "") {
		error.value = "Email can not be empty";
		return;
	}
	let regexRes = newEmail.value.match(emailRegex);
	if (regexRes == null) {
		error.value = "Valid Email Required";
		return;
	}
	emailStore.set(newEmail.value);
	router.push("/success");
}
</script>

<template>
	<main class="update-box">
		<section class="content-section">
			<h1>Stay updated!</h1>
			<p>Join 60,000+ product managers receiving monthly updates on:</p>
			<ul>
				<li>Product discovery and building what matters</li>
				<li>Measuring to ensure updates are a success</li>
				<li>And much more!</li>
			</ul>

			<form class="email-form" @submit="formSubmit">
				<div class="input-wrapper">
					<label for="email">Email address</label>
					<p class="error-text" v-if="error != null">
						{{ error }}
					</p>
					<input
						type="email"
						name="email"
						id="email"
						v-model="newEmail"
						placeholder="email@company.com"
					/>
				</div>
				<button class="btn-secondary">Subscribe to monthly newsletter</button>
			</form>
		</section>
		<img src="/images/illustration-sign-up-desktop.svg" alt="Sign Up Graphic" />
	</main>
</template>

<style scoped>
.update-box {
	display: grid;
	grid-template-columns: auto auto;
	gap: 1em;
	background: var(--white);
	padding: 2em;
	border-radius: 1.5em;
}

.content-section {
	padding: 2em;
	display: grid;
	place-content: center;
	gap: 2em;
	max-width: 30rem;
}

.content-section h1 {
	font-size: 3.5rem;
}

.content-section p {
	line-height: 1.6;
}

.content-section ul {
	margin-left: 1.5em;
	list-style-image: url("/images/icon-list.svg");
	display: grid;
	gap: 0.5em;
}

.email-form {
	display: grid;
	gap: 1em;
}

.input-wrapper {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}

.input-wrapper:has(p:is(.error-text)) input {
	border-color: var(--tomato-red);
	background: var(--tomato-red-transparent);
}

.input-wrapper label {
	font-size: 12px;
	font-family: RobotoBold;
}

.input-wrapper p {
	text-align: end;
	color: var(--tomato-red);
	font-size: 12px;
	font-family: RobotoBold;
}

.input-wrapper input {
	grid-column: 1 / -1;
	padding: 1em;
	border: var(--grey) 1px solid;
	border-radius: 0.5em;
}
</style>
