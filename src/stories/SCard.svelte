<script lang="ts">
	import Card from '$lib/Card.svelte';
	import CardTitle from '$lib/CardTitle.svelte';

	export let style: 'default' | 'primary' | 'secondary' = 'default';
	export let title: string = '';
	export let text: string;
	export let header: boolean = false;
	export let body: boolean = false;
	export let footer: boolean = false;
</script>

{#if !header && !body && !footer}
	<Card {style}>
		{#if title != ''}
			<CardTitle>{title}</CardTitle>
		{/if}
		<p>{text}</p>
	</Card>
{/if}
{#if header && body && footer}
	<Card {style}>
		<svelte:fragment slot="header">{text}</svelte:fragment>
		<svelte:fragment slot="body">{text}</svelte:fragment>
		<svelte:fragment slot="footer">{text}</svelte:fragment>
	</Card>
{/if}

{#if header && !body && !footer}
	<Card {style}>
		<svelte:fragment slot="header">{text}</svelte:fragment>
	</Card>
{/if}

{#if !header && body && !footer}
	<Card {style}>
		<svelte:fragment slot="body">{text}</svelte:fragment>
	</Card>
{/if}

{#if !header && !body && footer}
	<Card {style}>
		<svelte:fragment slot="footer">{text}</svelte:fragment>
	</Card>
{/if}

{#if header && body && !footer}
	<Card {style}>
		<svelte:fragment slot="header">{text}</svelte:fragment>
		<svelte:fragment slot="body">{text}</svelte:fragment>
	</Card>
{/if}

{#if header && !body && footer}
	<Card {style}>
		<svelte:fragment slot="header">{text}</svelte:fragment>
		<svelte:fragment slot="footer">{text}</svelte:fragment>
	</Card>
{/if}

{#if !header && body && footer}
	<Card {style}>
		<svelte:fragment slot="body">{text}</svelte:fragment>
		<svelte:fragment slot="footer">{text}</svelte:fragment>
	</Card>
{/if}