<script>
	import Image2 from "$lib/image 2.jpeg"
	import Logo from "$lib/img4.PNG"
</script>

<section class="w-fit justify-items-center">
	<img class="back" src={Image2} alt="back picture" />
	<div class="grid grid-cols-2 w-full">
		<div class="col-span-1 absolute -top-10 z-1 triangle "></div>
	</div>
	<div class="back-logo -skew-x-15 absolute top-90 lg:left-[30%] sm:left-0 grid grid-rows-2 lg:px-25 content-center sm:px-3 pt-3 mx-7 z-1 max-w-223 max-h-45 min-h-30 min-w-80 bg-white">
			<div class="logo-glow row-span-1 col-span-full skew-x-15 max-w-160">
				<img class="mx-2" src={Logo} alt="no image" />
			</div>
			<div class="row-span-2 ps-5 skew-x-15 w-[100%] self-end text-right">
				<span class="shadow-higth italic mx-1">You deserve the best...</span>
			</div>
	</div>
	<div class="tag-bottom absolute grid grid-rows-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 top-160  z-3 w-full h-fit justify-content-end">
		<div class="row-span-1 col-span-2 grid justify-items-end w-full ms-7 -z-1">
			<div class="w-20 h-30 bg-dark-blue -skew-x-15 rounded-s-xl"></div>
		</div>
		<div class="row-span-1 lg:col-start-3 sm:col-start-3 col-end-5 bg-dark-blue text-white h-30 ps-10 grid content-center ">
			<span>VENTA Y MANTENIMIENTO HVAC</span>
		</div>
		<div class="row-span-2 relative -top-3 lg:col-start-3 sm:col-start-3 col-end-5 min-w-full">
			<div class="text-black rounded-s-xl top-18 ps-8 bg-white grid content-center justify-items-start ">
					<span >CEO:Abraham Pedraza Marquez</span>
			</div>	
		</div>
	</div>
</section>

<style>
	* {
		--back: 120dvh;
	}
	.back {
		height: var(--back);
		width: 100dvw;
	}

	.back-logo {
		box-shadow: -45px 45px 40px 5px #f84101;
	}

	.back-logo > * {
		font-size: clamp(17pt, 28pt,3.6dvw);
	}

	.triangle {
		opacity: 0.7;
		height: var(--back);
		border-left: 50vw solid #052543;
		border-bottom: 60vh solid transparent;
		border-top: 60vh solid transparent;
	}
	.tag-bottom {
			container-name: tag-container;
			container-type: inline-size;
	}
	.tag-bottom > * {
		font-size: clamp(18pt, 1dvw, 1.9dvw);
	}

	.logo-glow::before {
		content:'';
		clip-path: path("M 0 40 L 15,40 L 30,70 L 60,5 L 75,5 L 40,92 L 65,120 L 45,120 L 26,90 L 15,150 L 0,150 L 15,78 z");
		position: absolute;
		top: 0;
	}

	/*.tag-bottom::before {
		content:'';
		display: grid;
		justify-content: end;
		background-color: #052543;
		width: 5em;
		height: auto;
		border-radius: 20px 0px 0px 20px;
		transform: skew(-15deg);
		z-index: -1;
	}*/

	@container tag-container (width < 1036px){
		.tag-bottom::before{
			left: 100%;
		}
	}
	
	.shadow-higth {
		text-shadow: #000000c7 -3px 4px 7px;
	}
</style>
