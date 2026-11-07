<script lang="ts">
	import '../app.css';
	import Nav from '#lib/components/Nav.svelte';
	let { children } = $props();
</script>

<a class="skip-link" href="#ringkasan">Lewati ke isi investigasi</a>
<Nav />
{@render children()}
