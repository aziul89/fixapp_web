import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Captcha.css';

const comparar = (shape, shapeApi) => {
  return shape === shapeApi;
};

const shapeMap = {
  circles: 'círculo',
  triangles: 'triângulo',
  squares: 'quadrado',
};

const shapes = Object.keys(shapeMap);

const generateShapeImage = (shape) => {
  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 100, 100);
  ctx.fillStyle = '#3c3c3c';

  if (shape === 'circles') {
    ctx.beginPath();
    ctx.arc(50, 50, 30, 0, 2 * Math.PI);
    ctx.fill();
  } else if (shape === 'squares') {
    ctx.fillRect(30, 30, 40, 40);
  } else if (shape === 'triangles') {
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(30, 70);
    ctx.lineTo(70, 70);
    ctx.closePath();
    ctx.fill();
  }

  return canvas.toDataURL('image/png');
};

const Captcha = ({ onSuccess }) => {
  const [options, setOptions] = useState([]);
  const [targetShape, setTargetShape] = useState('');
  const [error, setError] = useState('');

  const generateCaptcha = () => {
    const correctShape = shapes[Math.floor(Math.random() * shapes.length)];

    const otherShapes = shapes.filter(shape => shape !== correctShape);
    const shuffledOthers = otherShapes.sort(() => 0.5 - Math.random());
    const selectedShapes = [correctShape, ...shuffledOthers.slice(0, 2)];

    const mixedShapes = selectedShapes
      .map(shape => ({
        img: generateShapeImage(shape),
        shape, // armazenado localmente, não enviado
      }))
      .sort(() => 0.5 - Math.random());

    setTargetShape(correctShape);
    setOptions(mixedShapes);
    setError('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new File([u8arr], filename, { type: mime });
  };

  const handleSelect = async (selectedImg) => {
    try {
      const formData = new FormData();
      const imageFile = dataURLtoFile(selectedImg, 'captcha.png');
      formData.append('image', imageFile);

      const res = await axios.post(
        'https://apicaptcha-xzmu.onrender.com/captcha/recognize',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      const shapeReconhecido = res.data?.shape;

      if (!shapeReconhecido) {
        throw new Error('Resposta da API inválida.');
      }

      if (comparar(targetShape, shapeReconhecido)) {
        if (onSuccess) onSuccess();
      } else {
        setError('Resposta incorreta. Tente novamente.');
        generateCaptcha();
      }

    } catch (err) {
      console.error(err);
      setError('Erro ao verificar. A API pode estar fora do ar.');
    }
  };

  return (
    <div className="captcha-container">
      <h2 className="captcha-title">
        Clique na imagem que representa um <strong>{shapeMap[targetShape]}</strong>
      </h2>
      {error && <p className="captcha-error">{error}</p>}
      <div className="captcha-grid">
        {options.map((opt, index) => (
          <img
            key={index}
            src={opt.img}
            alt="Captcha shape"
            className="captcha-image"
            onClick={() => handleSelect(opt.img)}
          />
        ))}
      </div>
    </div>
  );
};

export default Captcha;
