import MySvelteApp from './my-svelte-app.svelte';

export const MySvelteAppBasic: SvelteComposition = {
  ComponentClass: MySvelteApp,
  componentOptions: {
    props: {
      name: 'world'
    }
  }
}
