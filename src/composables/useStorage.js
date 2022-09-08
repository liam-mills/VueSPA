import { ref, watch } from 'vue';

export function useStorage(key) {
    let storedValue = localStorage.getItem(key);

    let value = ref(storedValue);

    watch(value, () => {
        write();
    })

    function write() {
        if (value.value === '') {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, value.value);
        }
    }

    return value;
}