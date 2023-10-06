import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TrasactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('deposit'); 
  const [category, setCategory] = useState('');

  function validateAmount(value: string): number {
    const parsedValue = parseFloat(value);

    if(!isNaN(parsedValue)){
      return parsedValue;
    } else {
      return 0;
    }
  }

  async function handleCreatNewTransaction(event: FormEvent) {
    event.preventDefault();

    const validatedAmount = validateAmount(amount)

    await createTransaction({
      title,
      amount: validatedAmount,
      type,
      category
    })

    setTitle('');
    setAmount('');
    setType('deposit');
    setCategory('');
    onRequestClose();
  
  }
  
  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
      
      <button 
        type='button' 
        className='react-modal-close' 
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreatNewTransaction}>
        <h2>Nova transação</h2>

        <input 
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)} 
        />
        <input 
          type="text"
          placeholder='Valor' 
          value={amount}
          onChange={event => setAmount(event.target.value)}
        />

        <TrasactionTypeContainer>
          <RadioBox 
            type='button'
            onClick={() => setType('deposit')}
            $isActive={type === 'deposit'}
            $activeColor = 'green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            $isActive={type === 'withdraw'}
            $activeColor = 'red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TrasactionTypeContainer>

        <input 
          placeholder='Categoria' 
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>

  );
}