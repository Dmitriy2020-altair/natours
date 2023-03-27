/* eslint-disable */
const stripe = Stripe(
  'pk_test_51MJLYtG07WAQZ9ygUoofDXs2hRQ7ImEiLg8mtJHXQCw5wPFHRraYfCV8HeKp8J1IUevrbEkL7HwylHIMDS8RBVfw00VwZTGtAR'
);
import axios from 'axios'
import { showAlert } from './alerts'


export const bookTour = async tourId => {
  try {
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`
    )
    console.log('THIS IS SESSION', session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });

  } catch (err) {
    console.log(err);
    showAlert('error', err)
  }
}