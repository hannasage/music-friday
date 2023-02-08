import { reactive } from "vue";

interface LinkStore {
  links: Array<string>;
}

export const linkStore = reactive<LinkStore>({
  links: [],
});
