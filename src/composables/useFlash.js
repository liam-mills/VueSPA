import sweetalert from 'sweetalert';

export function useFlash() {
    function flash(message) {
        return sweetalert('Success', message, 'success');
    }

    return { flash };
}