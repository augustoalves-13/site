import { useEffect, useState } from 'react';
import './App.css';
import { toast, ToastContainer } from 'react-toastify'

function App() {
  const [posicaoY, setPosicaoY] = useState()
  const [posicaoX, setPosicaoX] = useState()

  const [vezes, setVezes] = useState(0)
 
  function alterarPosicão(){
    setPosicaoX(Math.random() * 90)
    setPosicaoY(Math.random() * 90)

    setVezes(Number(vezes) + 1)
  }


  useEffect(()=>{
    if(vezes > 2 && vezes < 5){
      toast.error('Essa opção não vale, manda ai que eu mereço')
    } else if (vezes > 10) {
      toast.error('É serio q ainda está tentando, manda ai vái')
    }
    
  },[posicaoX, vezes])


  return (
    <main className='container'>

      <h1>FOTO DO PEITO HOJE?</h1>

      <ToastContainer/>

      <div className='buttons'>

        <a target='_blank' rel='noreferrer' href='https://www.youtube.com/watch?v=tDpy-KnySNw'>
          <button className='yes' onClick={() => toast('obrigado amor, estou esperando no meu whatsapp ratazana ❤️❤️❤️')}>SIM</button>
        </a>
        
         <button className='no' style={vezes > 0 ? {position: 'absolute', left: `${posicaoX}%`, top:`${posicaoY}%`} : {}} onMouseEnter={alterarPosicão}>NÃO</button>
      </div>

    </main>
  );
}

export default App;
