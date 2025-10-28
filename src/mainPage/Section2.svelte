<script>
	import ImageCard from '$component/ImageCard.svelte';
</script>


<section class="w-full mt-10 m-20 grid grid-rows-1 grid-cols-1 justify-items-center">
	<p class="h1 row-span-1 my-20 w-100">Mantenimiento preventivo y correctivo a todos los productos HVAC del sector</p>
	<div class="row-span-1 grid grid-rows-2 grid-cols-3 gap-8 w-350 ">
			<ImageCard title="industrial" class="row-span-1 col-span-1 "/>
			<ImageCard title="comercial" class="row-span-1 col-span-1 cols-2 "/>
			<ImageCard title="hotelero" class="row-span-2 col-start-3 col-end-3 "/>
			<ImageCard title="hospital" class="row-span-2 col-span-2 "/>
	</div>
	
</section>
