import { defineComponent, ref } from "vue";
import { useStore } from "./store";
import { MutationTypes } from "./store/mutation-types";

export default defineComponent({
  name: "App",

  setup() {
    const store = useStore()

    const increment = () => {
      store.commit(MutationTypes.SET_COUNTER, store.state.counter + 1)
    }

    return () => (
      <div>
        <button onClick={increment}>Increemnt</button>
        <span>{store.state.counter}</span>
      </div>
    );
  },
});
