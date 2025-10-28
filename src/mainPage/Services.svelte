<script>
	import ServicesList from '$component/ServicesList.svelte'
	import ImgMantenance from '$lib/mantenimiento1.jpeg'
	import Logo from "$lib/logo-X.PNG"
	import Mantenimiento from '$lib/mantenimiento2.jpg'
	import Calidad from '$lib/calidad.jpg'
	import BackService from '$lib/back-service.jpg'
	import Title from '$component/Title.svelte'
	import {goto} from '$app/navigation'
</script>

<section class="flex flex-col mt-10 gap-10 w-full">
		<Title text="Servicios especializados"/>
	<div class="flex flex-row gap-4 justify-center ">
		<div class="relative w-180">
			<div class="triangle"></div>
			<div class="triangle"></div>
			<img class="" src={ImgMantenance} alt="Not maintenance">
			<div class="triangle"></div>
			<div class="triangle"></div>
		</div>
		<div class="relative border w-170 rounded-xl bg-dark-blue text-white pt-8" style={`background-image: url(${BackService})`}>
			<div class="absolute top-5 left-[80%] text-[#F34401] bg-white z-2 text-center w-26 shadow-[0px_0px_26px_1px] shadow-gray-700 px-1 pb-3 rounded-[20px]">
				<h2 class="text-[28pt] font-bold ">18+</h2>
				<p class="text-center leading-none">
					a&ntildeos de 
					experiencia
				</p>
			</div>
			<ServicesList title="Catalogo de servicios" onclick={(service) => {goto('/services-'+service)}}>
				<img class="absolute top-17 left-100 w-40 rounded-[20px]" src={Mantenimiento} alt="mantenimiento">
				<img class="absolute top-52 left-90  left-20 w-50 rounded-[20px]" src={Calidad} alt="calidad">
			</ServicesList>
		</div>	
	</div>
</section>

<style>
	*.triangle {
		--top-triangle: -4dvw;
	}
 .triangle {
		height: 10px;
		border-left: 2dvw solid #F34401;
		border-bottom: 6dvw solid transparent;
		border-top: 5dvw solid transparent;
	}

	.triangle {
		position: absolute;
		z-index: 2;
	}

	.triangle:nth-child(1){
		left: 0rem;
		top: var(--top-triangle);
		transform: rotate(-140deg);
	}

	.triangle:nth-child(4) {
		left: 34dvw;
		top: var(--top-triangle);
		transform: rotate(-40deg);
	}

	.triangle:nth-child(2) {
		left: 0rem;
		top: 19dvw;
		transform: rotate(140deg)
	}
	.triangle:nth-child(5) {
		left: 34dvw;
		top: 19dvw;
		transform: rotate(40deg)
	}
</style>
