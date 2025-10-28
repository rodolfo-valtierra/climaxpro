<script>
	import Services from '$utils/services.js'

	let {service=-1, children, onclick, title=''} = $props();
	let id = $state(service);

	const setId = (serviceId) => {
		id = serviceId;
		onclick(serviceId);
	}
</script>

<div class="relative">
	{#if title}
		<h1 class="py-1 text-[20pt] relative z-2 px-8">{title}</h1>
	{/if}
	<ul class="text-[16pt] relative ul">
		{@render children?.()}
		{#each Services as service, i}
			<li class={["py-1 cursor-pointer hover:bg-white hover:text-black my-1 px-10 color-white", (i==id?'bg-white':'')]} onclick={()=> setId(i)}>
				<span class={[(i==id?'text-black':'white')]}>{service}</span>
			</li>
		{/each}
	</ul>
</div>
