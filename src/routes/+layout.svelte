<script>
	import '$lib/app.css';
	import TitleBar from '$lib/TitleBar.svelte';
	import LeftSidebar from '$lib/LeftSidebar.svelte';
	import RightSidebar from '$lib/RightSidebar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="h-full">
	<TitleBar class="top-3" />
	<LeftSidebar />
	<slot />
	<RightSidebar />
	<Footer />
</div>
