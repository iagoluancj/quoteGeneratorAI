'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';
import { GrLinkedinOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrShareOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

export default function Chat() {
  const { messages, handleInputChange, handleSubmit } = useChat();
  const [disabledButton, setDisabledButton] = useState(false)
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);

  const createNewCitation = () => {
    setTimeout(() => {
      setDisabledButton(true);
    }, 1);

    setTimeout(() => {
      setDisabledButton(false);
    }, 3000);

    const event = {
      target: {
        value: 'Crie uma citação falsa de um autor falso (observação: não diga que o autor é falso, siga modelo comum de citação: "frase - autor", o autor deve conter um nome coerente (Evite nomes com substantivos utilizados na frase gerada))'
      }
    } as React.ChangeEvent<HTMLTextAreaElement>;
    handleInputChange(event);
  }

  const copyLink = () => {
    var dummy = document.createElement("input");
    var text = "https://quote-generator-ai.vercel.app/";

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    setShowCopiedPopup(true);
    setTimeout(() => {
      setShowCopiedPopup(false);
    }, 1000);
  }

  const lastAssistantMessage = messages
    .filter(m => m.role === 'assistant')
    .pop();

  return (
    <>
      <div className="flex flex-col w-full max-w-md mx-auto justify-center pt-28 text-center">
        <div
          className='bg-violet-50 rounded-lg flex flex-col m-3'
        >
          {lastAssistantMessage ? (
            <div key={lastAssistantMessage.id} className="whitespace-pre-wrap text-violet-700 px-4 py-5 text-xl">
              <span>{lastAssistantMessage.content}</span>
            </div>
          ) : (
            <div className="whitespace-pre-wrap text-violet-700 px-4 py-5">
              <span>Crie citações únicas e exclusivas geradas a partir da integração com a API LangChain via SDK Vercel, prossiga pelo botão abaixo - Iago Jesus</span>
            </div>
          )}
          <div className='flex gap-3 justify-evenly py-3 text-violet-500'>
            <div><a href="https://www.linkedin.com/in/iago-luan-4b4b02220/" target='_blank' aria-label='Icone Linkedin'><GrLinkedinOption size={24} /> </a></div>
            <div><a href="https://www.instagram.com/iago.luancj/" target='_blank' aria-label='Icone Instagram'><GrInstagram size={24} /></a></div>
            <div><a href="https://github.com/iagoluancj" target='_blank' aria-label='Icone Github'><GrGithub size={24} /></a></div>
            <div><a href="#" onClick={copyLink}> <GrShareOption size={22} /> </a></div>
            {showCopiedPopup === true ?
              <div className="bg-white border border-gray-300 p-1 rounded shadow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed">
                <span>Link copiado</span>
              </div>
              :
              ''
            }
          </div>
        </div>
        <span className='text-violet-200'>
          Developed by <a href="https://iagoluancj.github.io/Portifolio-React/" target='_blank' className='underline'>Iago Jesus</a>
        </span>
        <form
          className="mt-10 px-3"
          onSubmit={handleSubmit}>
          <button
            className={`w-full 
                    bg-violet-50 
                    border 
                    border-violet-300 
                    rounded-md 
                    shadow-xl 
                    py-2 
                    text-violet-700 
                    hover:bg-violet-400 
                    hover:text-white 
                    md:hover:bg-violet-50 
                    md:hover:text-violet-700 
                    md:active:bg-violet-400 
                    md:active:text-white ease-in-out duration-200
                    ${disabledButton === true ? 'bg-violet-50 text-violet-700 hover:bg-violet-50 hover:text-violet-700 opacity-50 cursor-not-allowed' : ''}                    
                    `}
            onClick={createNewCitation}
            disabled={disabledButton}
          >
            {disabledButton === true ? <span>Aguarde...</span> : <span>Criar nova citação</span>}
          </button>
        </form>
      </div>
    </>
  );
}