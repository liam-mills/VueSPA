import { ref, watch } from 'vue';

export function useStorage(key) {
    let storedValue = localStorage.getItem(key);

    let value = ref(storedValue);

    watch(value, () => {
        write();
    })

    function write() {
        localStorage.setItem(key, value.value);
    }

    return value;
}