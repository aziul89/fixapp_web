import "../styles/ProgressBar.css";

function ProgressBar({ step }) {
  return (
    <div className="progress-container">
      
      <div className="progress-steps">
        <div className={`step ${step >= 1 ? "active" : ""}`}>
          <div className="circle">1</div>
          <p>Dados Pessoais</p>
        </div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>
          <div className="circle">2</div>
          <p>Confirmação de Senha</p>
        </div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>
          <div className="circle">3</div>
          <p>Endereço</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
