'use client'
import React from 'react'
import { useOurStore } from '../store/states';
import Chat from './Chat';
import ChatInput from './chat-input';
import { BackgroundGradient } from './background-gradient';
import Image from 'next/image';

const ModalForAi = () => {
    return (
        <div className='bg-black'>

            <dialog id="aiModal" className="modal">
                <BackgroundGradient className={'px-[6px] py-[1px]'} >
                    <div className={'space-y-4 max-h-[85vh] h-full w-full lg:w-[800px] max-w-[96vw] overflow-hidden bg-base-100 rounded-3xl p-4 relative flex flex-col' }>
                        <form method="dialog" className='h-5 bg-transparent flex justify-between'>
                            <h1 className='font-semibold'>Nayak AI Assistant</h1>
                            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
                        </form>
                        <Chat />
                        <ChatInput className={'mx-0 w-full mb-0 bg-base-100 bottom-0'} />
                    </div>
                </BackgroundGradient>
            </dialog>
        </div>
    )
}

export default ModalForAi;

export async function toggleAiModal() {
    const modal = document.getElementById('aiModal');
    if (modal.open) {
        modal.close();
    } else {
        modal.showModal();
    }
}