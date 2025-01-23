<svelte:options customElement="swc-page"/>


<script lang="ts">
    import { Accordion, AccordionItem} from './components/accordion'

	const items = [
		{ title: 'Item 1', content: 'Content 1' },
		{ title: 'Item 2', content: 'Content 2' },
		{ title: 'Item 3', content: 'Content 3' },
		{ title: 'Item 4', content: 'Content 4' }
	]
</script>

<Accordion collapse>
    {#each items as item }
        <AccordionItem>
            <svelte:fragment slot="title">{item.title}</svelte:fragment>
            <svelte:fragment slot="content">{item.content}</svelte:fragment>
        </AccordionItem>
    {/each}
</Accordion>