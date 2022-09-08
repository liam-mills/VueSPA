import { ref, watch } from 'vue';

export function useStorage(key, value) {
    let storedValue = localStorage.getItem(key);

    if (storedValue) {
        value = ref(storedValue);
    } else {
        value = ref(value);

        write();
    }

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