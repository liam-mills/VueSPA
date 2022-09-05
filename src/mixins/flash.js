import sweetalert from 'sweetalert';

export default {
  methods: {
    flash(message) {
      return sweetalert('Success', message, 'success');
    }
  }
};