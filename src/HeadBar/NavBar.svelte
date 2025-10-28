<script>
	import Logo from '$lib/img4.png'
	let {children} = $props();

</script>
<nav class="sticky top-0 z-5 flex flex-wrap justify-center w-full">
	<div class="col-start-2 grid bg-white grid-cols-2 items-center w-[95%] px-3">
		<div class="">
			<img src={Logo} alt="logo 4" width="40%">
		</div>
		<ul class="flex gap-4 ">
			<li>Products</li>
			<li>Contactos</li>
			<li>Servicios</li>
			<li>Quienes somos?</li>
		</ul>
	</div>
</nav>
{@render children?.()}


<style>
	li {
		font-size: 16pt;
	}
</style>
