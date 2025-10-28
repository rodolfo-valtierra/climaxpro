<script>
	import '../app.css';
	import Navbar from '../HeadBar/NavBar.svelte';
	let { children } = $props();
</script>

<Navbar>
{@render children()}
</Navbar>

