
import { Dialog } from 'quasar';

export default function showErrorMessage(err) {
  let message = err.data || err;
  Dialog.create({
    title: 'Error',
    message
  });
}
