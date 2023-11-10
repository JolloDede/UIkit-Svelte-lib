<svelte:options  />

<script lang="ts">
	import 'uikit/dist/css/uikit.min.css';

	export let open: boolean = false;
</script>

<li class={open ? 'uk-open': ''}>
	<div class="uk-accordion-title">
		<slot name="title" />
	</div>
	<div class="uk-accordion-content">
		<slot name="content" />
	</div>
</li>
