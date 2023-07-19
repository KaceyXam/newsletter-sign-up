<script setup lang="ts">
import { useEmailStore } from "../stores/email";

const emailStore = useEmailStore();
</script>

<template>
	<main class="success-box">
		<img src="/images/icon-success.svg" alt="Success Checkmark" />
		<h1>Thanks for Subscribing!</h1>
		<p>
			A confirmation email has been sent to
			<strong>{{ emailStore.email }}</strong>
			. Please open it and click the button inside to confirm your subscription.
		</p>
		<a href="/" class="btn-secondary">Dismiss message</a>
	</main>
</template>

<style scoped>
.success-box {
	display: flex;
	gap: 2em;
	flex-direction: column;
	max-width: 550px;
	background: var(--white);
	padding: 4em;
	border-radius: 2.5em;
}

.success-box img {
	width: 4em;
}

.success-box h1 {
	font-size: 4rem;
}
</style>
