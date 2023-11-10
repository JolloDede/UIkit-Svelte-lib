<script lang="ts">
	import Button from '$lib/Button.svelte';

    export let text: string;
    export let style: 'default' | 'primary' | 'secondary' | 'danger' | 'text' | 'link' = 'default';
	export let size: 'small' | 'large' | '' = '';
</script>

<Button style={style} size={size}>
    {text}
</Button>