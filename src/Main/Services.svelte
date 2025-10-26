<script>
	import Services from '$utils/services.js'
	import ImgMantenance from '$lib/mantenimiento1.jpeg'
	import Logo from "$lib/logo-X.PNG"
	import Mantenimiento from '$lib/mantenimiento2.jpg'
	import Calidad from '$lib/calidad.jpg'
	import BackService from '$lib/back-service.jpg'
	import Title from '$component/Title.svelte'
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
		<div class="relative border w-170 rounded-xl bg-dark-blue text-white" style={`background-image: url(${BackService})`}>
			<div class="absolute top-5 left-[80%] text-[#F34401] bg-white z-2 text-center w-26 shadow-[0px_0px_26px_1px] shadow-gray-700 px-1 pb-3 rounded-[20px]">
				<h2 class="text-[28pt] font-bold ">18+</h2>
				<p class="text-center leading-none">
					a&ntildeos de 
					experiencia
				</p>
			</div>
			<div class="px-12 relative mt-8">
				<h1 class="py-1 text-[20pt] relative z-2">Revisa nuestros servicios</h1>
				<ul class="text-[16pt] relative w-88 ">
				<img class="absolute top-17 left-100 w-40 rounded-[20px]" src={Mantenimiento} alt="">
				<img class="absolute top-52 left-90  left-20 w-50 rounded-[20px]" src={Calidad} alt="">
					{#each Services as service}
						<li class="p-1 cursor-pointer rounded-xl hover:bg-white hover:text-black"><a href="services-1">{service}</a></li>
					{/each}
				</ul>
			</div>
		</div>	
	</div>
</section>

<style>
	*.triangle {
		--top-triangle: -45px;
	}
 .triangle {
		height: 10px;
		border-left: 36px solid #F34401;
		border-bottom: 70px solid transparent;
		border-top: 82px solid transparent;
	}

	.triangle-big {
		height: 100px;
		border-top: 35rem solid #F34401;
		border-left: 37rem solid transparent;
		border-right: 5rem solid transparent;
		z-index: -1
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
		left: 42rem;
		top: var(--top-triangle);
		transform: rotate(-40deg);
	}

	.triangle:nth-child(2) {
		left: 0rem;
		top: 26rem;
		transform: rotate(140deg)
	}
	.triangle:nth-child(5) {
		left: 42rem;
		top: 26rem;
		transform: rotate(40deg)
	}
</style>
