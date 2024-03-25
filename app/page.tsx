'use client';

import { useChat } from 'ai/react';
import { GrLinkedinOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

export default function Chat() {
  const { messages, handleInputChange, handleSubmit } = useChat();

  const createNewCitation = () => {
    const event = {
      target: {
        value: 'Crie uma citação falsa de um autor falso (observação: não diga que o autor é falso, siga modelo comum de citação: "frase - autor", o autor deve conter um nome coerente (Evite nomes com substantivos utilizados na frase gerada))'
      }
    } as React.ChangeEvent<HTMLTextAreaElement>;
    handleInputChange(event);
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
              <span>Crie citações únicas e exclusivas geradas a partir da integração API Vercel com LangChain, prossiga pelo botão abaixo - Iago Jesus</span>
            </div>
          )}
          <div className='flex gap-3 justify-evenly py-3 text-violet-500'>
            <div><a href="https://www.linkedin.com/in/iago-luan-4b4b02220/" target='_blank' aria-label='Icone Linkedin'><GrLinkedinOption size={24} /> </a></div>
            <div><a href="https://www.instagram.com/iago.luancj/" target='_blank' aria-label='Icone Instagram'><GrInstagram size={24} /></a></div>
            <div><a href="https://github.com/iagoluancj" target='_blank' aria-label='Icone Github'><GrGithub size={24} /></a></div>
          </div>
        </div>
        <span className='pt-1 text-violet-200'>
          Developed by <a href="https://iagoluancj.github.io/Portifolio-React/" target='_blank' className='underline'>Iago Jesus</a>
        </span>
        <form
          className="mt-10 px-3"
          onSubmit={handleSubmit}>
          <button
            className="w-full
          bg-violet-50 border
          border-violet-300 
          rounded-md shadow-xl py-2 text-violet-700 
          hover:bg-violet-400 hover:text-white md:hover:bg-violet-50 md:hover:text-violet-700 md:active:bg-violet-400 md:active:text-white ease-in-out duration-200"
            onClick={createNewCitation}
          >
            Criar nova citação
          </button>
        </form>
      </div>
    </>
  );
}