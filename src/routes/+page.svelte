<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    let fruits = data.fruits;

    let selectedFruits: Fruit[] = [];
	let fruitOptions: Fruit[] = [];

	$: fruitOptions = fruits.filter(fruit => !selectedFruits.some(selFruit => selFruit.id == fruit.id));

	function addFruit (event: Event) {
        const target = event.target as HTMLSelectElement;

		const selectedId = Number(target?.value);
		if (!selectedId) return;

        const newFruit = fruits.find(fruit => fruit.id == selectedId);

        if (newFruit) selectedFruits = [...selectedFruits, newFruit];
	}

	function removeFruit (fruitId: number) {
		selectedFruits = selectedFruits.filter(fruit => fruit.id != fruitId);
	}
</script>

<div>
	<select name="Frutas" id="frutas" on:change={addFruit}>
		<option selected value> Selecione uma fruta</option>
		{#each fruitOptions as fruit}
			<option value={fruit.id}>{fruit.name}</option>
		{/each}
	</select>
	<ul>
		{#each selectedFruits as selectedFruit}
			<li>
				<button on:click={() => removeFruit(selectedFruit.id)}>{selectedFruit.name}</button>
			</li>
		{/each}
	</ul>
</div>
