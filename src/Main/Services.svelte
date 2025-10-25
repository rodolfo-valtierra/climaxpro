<script>
	import Services from '$utils/services.js'
	import ImgMantenance from '$lib/mantenimiento1.jpeg'
</script>
<section class="flex flex-col mt-10 gap-10">
	<div class="flex justify-center">
		<h1>Servicios especializados</h1>
	</div>
	<div class="flex flex-row gap-4 justify-center ">
		<div class="flex flex-row w-180">
			<div class="triangle"></div>
			<div class="triangle"></div>
			<img class="relative -left-18 rounded-xl" src={ImgMantenance} alt="Not maintenance">
			<div class="triangle"></div>
			<div class="triangle"></div>
		</div>
		<div class="border w-130 rounded-xl">
			<div class="mx-10">
				<h1>Revisa nuestros servicios</h1>
				<div class="relative left-55 bg-white z-2 text-center w-24  shadow-xl border rounded-xl">
					<h2>18+</h2>
					<p class="text-center ">
						anios de 
						experiencia
					</p>
				</div>
				<div class="ul ">
					{#each Services as service}
						<li><a>{service}</a></li>
					{/each}
				</div>
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

	.triangle {
		position: relative;
		z-index: 2;
	}

	.triangle:nth-child(1){
		left: -8px;
		top: var(--top-triangle);
		transform: rotate(-140deg);
	}

	.triangle:nth-child(4) {
		left: -7.3rem;
		top: var(--top-triangle);
		transform: rotate(-40deg);
	}

	.triangle:nth-child(2) {
		left: -2rem;
		top: 26rem;
		transform: rotate(140deg)
	}
	.triangle:nth-child(5) {
		left: -9rem;
		top: 26rem;
		transform: rotate(40deg)
	}
</style>
