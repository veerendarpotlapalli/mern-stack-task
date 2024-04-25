import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader'; // Updated import statement
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QRScanner = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  }

  const handleError = (err) => {
    console.error(err);
    toast.error('Failed to connect to barcode reader. Please make sure it is connected.');
  }

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{result}</p>
      <ToastContainer />
    </div>
  );
}

export default QRScanner;
