<script>
	import Image2 from "$lib/image2.jpeg"

	let {children,  ...props} = $props();
</script>

<div class={["grid grid-col-2 bg-cover content-end ", props.class]}>
	<p class="bg-dark-blue m-6 w-fit p-4 text-white rounded-xl">{props.title}</p>
</div>


<style>

	div {
		background-image: url('$lib/image2.jpeg');
		background-repeat: no-repeat;
	}


</style>
