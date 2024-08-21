import MySvelteApp from './my-svelte-app.svelte';
import './global.css';

const app = new MySvelteApp({
  target: document.body,
  props: {
    name: 'world'
  }
});

export default app;