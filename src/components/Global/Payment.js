import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Payment = ({ submitForm }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
    if (paymentMethod) {
      submitForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type='submit' className='btn-warning' disabled={!stripe}>
        Pay and Order
      </button>
    </form>
  );
};

export default Payment;
