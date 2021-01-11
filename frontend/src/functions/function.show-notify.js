import { Notify } from 'quasar'

export default function showNotifyMessage(notify, color, textColor) {
  let message = notify || 'This is a defaut notify!';

  Notify.create({
    message,
    color,
    textColor
  })
}

