import { defineComponent, ref } from "vue";
import { useStore } from "./store";

export default defineComponent({
  name: "App",

  setup() {
    const store = useStore()
    const state = ref(0);

    const increment = () => state.value++;

    return () => (
      <div>
        <button onClick={increment}>Increemnt</button>
        <span>{store.state.counter}</span>
      </div>
    );
  },
});
