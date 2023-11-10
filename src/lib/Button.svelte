<script lang="ts">
	import 'uikit/dist/css/uikit.min.css';

	export let style: 'default' | 'primary' | 'secondary' | 'danger' | 'text' | 'link' = 'default';
	export let size: 'small' | 'large' | '' = '';

	$: classList = ['uk-button', 'uk-button-' + style, size != '' ? 'uk-button-'+size : ''];
</script>

<button
	class={classList.join(' ')}
    on:click
>
	<slot />
</button>
