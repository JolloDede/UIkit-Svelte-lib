<script lang="ts">
	import 'uikit/dist/css/uikit.min.css';

	export let style: 'default' | 'primary' | 'secondary' = 'default';
	export let padding: 'small' | 'large' | '' = '';

	$: classList = [
		'uk-card',
		$$slots.default ? 'uk-card-body' : '',
		'uk-card-' + style,
		padding != '' ? 'uk-card-' + padding : ''
	];
</script>

<div class={classList.join(' ')}>
	{#if $$slots.default}
		<slot />
	{:else}
		{#if $$slots.header}
			<div class="uk-card-header">
				<slot name="header" />
			</div>
		{/if}
		{#if $$slots.body}
			<div class="uk-card-body">
				<slot name="body" />
			</div>
		{/if}
		{#if $$slots.footer}
			<div class="uk-card-footer">
				<slot name="footer" />
			</div>
		{/if}
	{/if}
</div>
