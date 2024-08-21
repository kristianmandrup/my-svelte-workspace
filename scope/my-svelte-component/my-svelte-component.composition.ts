import MySvelteComponent from './my-svelte-component.svelte';
import BasicHelloWorldFromFile from './compositions/composition-from-file.svelte'

export const BasicHelloWorldExample: SvelteComposition = {
  ComponentClass: MySvelteComponent,
  componentOptions: {
    props: {
      name: "world"
    }
  }
}

export const BasicHelloWorldFromFileExample: SvelteComposition = {
  ComponentClass: BasicHelloWorldFromFile
}
