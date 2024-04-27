# Replacing a Vue 2 Global Event Bus with Pinia 🍍

Date: February 25, 2023

An event bus allows components to communicate with each other by emitting and listening for events.

This can be useful when indirectly related components need to communicate with each other or when passing data through props would be cumbersome or impractical.

Vue 2 supported the ability to have a global pub/sub event bus.

Component events could be easily connected together without prop drilling or global state.

This was easy to implement and, resultantly, easy to become dependent on. 

Some large code bases became more difficult to maintain, due to the nebulous origins of events. 

The event bus is not natively available in Vue 3, but a very similar implementation can be achieved with the [Mitt](https://github.com/developit/mitt) library, and is an effective solution for small applications.

This solution will be disregarded here though, as it has the same inherent issues as the original event bus implementation, and the global event bus is not recommended by the Vue team.

Instead, we will implement global events with Pinia, [one of the approaches](https://v3-migration.vuejs.org/breaking-changes/events-api.html#event-bus) recommended for large applications by the Vue team.

Using a state manager like Pinia or Vuex also allows for a centralized and diagnosable way of sharing events globally.

---

Using the example of a sidebar that can be toggled open or closed, we will implement a similar emitter/listener mechanism.

The open/closed state of the sidebar will be toggled by a button in a separate component.

We first create a Pinia store, to save the state of the sidebar component (open/closed):

```js
//UiStore.js

import { defineStore } from "pinia";

export const useUiStore = defineStore("mode", {

		//is sidebar Open or Closed
    state: () => ({
        sideBarOpen: true
    }),

		//toggle the open/closed state of the sidebar
    actions: {
        toggleSideBarOpen() {
            this.sidebarOpen = !this.sidebarOpen;
        },
    }
})
```

Then in the Sidebar component, we can use a computed property to get the UI state of the sidebar (open/closed), and use the watch hook to monitor that state:

```vue
//Sidebar.vue

<template>
	<sidebar ref="sidebar">
	<sidebar/>
<template/>

<script setup>
import { useUiStore } from "@/stores/UI"
import {watch,computed} from 'vue'

const sidebar = ref(null)

//Use UI store
const uiStore = useUiStore()

//Get the open/close state of the sidebar
const sidebarOpen = computed(()=>uiStore.sidebarOpen)

//Watch for changes to the sidebar state, and show/hide the sidebar accordingly
watch(sidebarOpen,(newVal)=>{
    if(newVal){
    sidebar.show()
    }else{
    sidebar.hide()
    }
})
<script/>
```

Finally in the button component, we can import the toggle function from the Pinia store, and call it on a click event:

```vue
//Button.vue

<template>
<button @click="toggleSidebarOpen"/>
<template/>

<script setup>
import { useUiStore } from "@/stores/UI"
const uiStore = useUiStore()
function toggleSidebarOpen() {
    uiStore.toggleSideBarOpen()
}
</script>
```

Now the click event in the button component is being ‘listened’ to by the sidebar component, without the need for prop drilling or an event bus.

This approach is slightly more verbose than the event bus approach in Vue 2, but due to its more declarative nature, it is easier to manage and understand the origin of events.

Pinia also has the subscribe() method, which can replace the watch hook, but subscribe() monitors the *entire* store.

If just a single state needs to be watched at a time but the UI store contains multiple states, the watch hook is the preferred approach.

Cover art: Still Life with Fruit, Jacobus Linthorst, 1808
