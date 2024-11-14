const PaymentPage = () => {
  const handlePayment = () => {
    const iframe = document.getElementById('payment-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.contentWindow?.postMessage('initiatePayment', '*');
    }
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <button onClick={handlePayment}>1원 충전하기</button>
      <iframe
        id="payment-iframe"
        src={`${process.env.PUBLIC_URL}/payment.html`}
        width="100%"
        height=""
        title="Payment Page"
      />
    </div>
  );
};

export default PaymentPage;
