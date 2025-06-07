import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Captcha.css';

const shapeMap = {
  circles: 'círculo',
  squares: 'quadrado',
  triangles: 'triângulo',
};

const shapes = Object.keys(shapeMap);

const dataURLtoFile = (dataurl, filename) => {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  const u8arr = new Uint8Array(bstr.length);
  for (let i = 0; i < bstr.length; i++) u8arr[i] = bstr.charCodeAt(i);
  return new File([u8arr], filename, { type: mime });
};

const getRandomImagePath = (shape, total = 3) => {
  const idx = Math.floor(Math.random() * total) + 1;
  return `/images/${shape}/${idx}.png`;
};

const imageToDataUrl = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
  });

const Captcha = ({ onSuccess }) => {
  const [options, setOptions] = useState([]);
  const [targetShape, setTargetShape] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const generateCaptcha = async () => {
    const correctShape = shapes[Math.floor(Math.random() * shapes.length)];
    const otherShapes = shapes.filter(s => s !== correctShape);
    const selectedShapes = [correctShape, ...otherShapes.slice(0, 2)];

    const processed = await Promise.all(
      selectedShapes.map(async (shape) => {
        const src = getRandomImagePath(shape);
        const dataUrl = await imageToDataUrl(src);
        return { img: dataUrl, shape };
      })
    );

    setOptions(processed.sort(() => 0.5 - Math.random()));
    setTargetShape(correctShape);
    setError('');
    setSuccess(false);
    setLoading(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSelect = async (selectedImg) => {
    if (loading || success) return;

    setLoading(true);
    try {
      const file = dataURLtoFile(selectedImg, 'captcha.png');
      const formData = new FormData();
      formData.append('image', file);

      const res = await axios.post(
        'https://apicaptcha-xzmu.onrender.com/captcha/recognize',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      const shapeDetected = res.data?.shape;

      if (shapeDetected === targetShape) {
        setSuccess(true);
        if (onSuccess) onSuccess();
      } else {
        setError('❌ Resposta incorreta. Tente novamente.');
        setTimeout(generateCaptcha, 1000);
      }

    } catch (err) {
      console.error(err);
      setError('⚠️ Erro ao verificar. A API pode estar fora do ar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="captcha-wrapper">
      <div className="captcha-header">
        <p className="captcha-instruction">
          Selecione a imagem que representa um <strong>{shapeMap[targetShape]}</strong>
        </p>
        <span className="captcha-sub">Clique na imagem correta para verificar</span>
      </div>

      {error && <p className="captcha-error">{error}</p>}

      <div className="captcha-grid">
        {options.map((opt, index) => (
          <img
            key={index}
            src={opt.img}
            alt={`Imagem de ${shapeMap[opt.shape]}`}
            className={`captcha-image ${loading || success ? 'disabled' : ''}`}
            onClick={() => handleSelect(opt.img)}
          />
        ))}
      </div>

      <div className="captcha-footer">
        {success && <p className="captcha-success">✅ Verificado com sucesso!</p>}
        {!loading && !success && (
          <button className="captcha-refresh" onClick={generateCaptcha}>🗘 Trocar</button>
        )}
      </div>
    </div>
  );
};

export default Captcha;
