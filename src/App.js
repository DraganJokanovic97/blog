import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import QrReader from 'react-qr-reader';

function QRApp() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input type="text" value={text} onChange={handleChange} />
      {text && <QRCode value={text} />}
      <hr />
      <h1>QR Code Scanner</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result && <p>{result}</p>}
    </div>
  );
}

export default QRApp;
