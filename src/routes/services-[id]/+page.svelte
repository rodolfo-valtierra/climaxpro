<script>
	import {page} from '$app/state'
	import ServicesList from '$component/ServicesList.svelte'
	import BackService from '$lib/back-service.jpg'
	import ImgMantenance from '$lib/mantenimiento1.jpeg'
	import Services from '$utils/services.js'
	import Title from '$component/Title.svelte'

	let service_id = $state(page.url.pathname.split('-')[1]);

</script>
	<Title text="Services"/>
<div class="grid grid-cols-4 justify-center">
	<div class="col-start-2 border rounded-xl bg-dark-blue text-white py-7" style={`background-image: url(${BackService})`}>
		<ServicesList service={service_id} onclick={(service)=> service_id=service}/>
	</div>
	<div class="overlap col-start-3 place-items-center" >
		<div class="z-2 bg-white">
				{Services.filter((s, i) => i==service_id)}
		</div>
		<img class="grayscale z-1 rounded-xl h-100" src={ImgMantenance} alt="">
	</div>
</div>


<style>
	.overlap {
		display: grid;
		grid-template: "container";
	}

	.overlap > * {
		grid-area: container;
	}
</style>



