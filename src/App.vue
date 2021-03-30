<template>
	<div id="app">
		<TheMenu />
		<TheHeader />
		<TheContent />
	</div>
</template>

<script>

import TheHeader from './components/layout/TheHeader'
import TheMenu from './components/layout/TheMenu'
import TheContent from './components/layout/TheContent'

export default {
	name: 'App',
	components: {
		TheHeader,
		TheMenu, 
		TheContent,
	}, 
	data() {
		return {	
			name: '',
		}
	},
	methods: {
		
	}
}
</script>

<style>
    @import './css/main.css';
	@import './css/components/content.css';
	@import './css/components/button.css';
	@import './css/components/input.css';
	@import './css/components/grid.css';
	@import './css/components/dialog.css';

	.text-align-right {
		text-align: right;
	}

	.text-align-center {
		text-align: center;
	}

	input.border-red {
		border: 1px solid #ff4747;
	}

	.row-selected {
		background-color: #01916026;
	}
</style>
