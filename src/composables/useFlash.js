import sweetalert from 'sweetalert';

export function useFlash() {
    function flash(title, message, level = 'success') {
        return sweetalert(title, message, level);
    }

    return { flash };
}