<script setup lang="ts"></script>

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

			<form class="email-form">
				<label for="email">Email address</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="email@company.com"
				/>
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

.email-form label {
	font-size: 12px;
	font-family: RobotoBold;
}

.email-form input {
	padding: 1em;
	border: var(--grey) 1px solid;
	border-radius: 0.5em;
}
</style>
