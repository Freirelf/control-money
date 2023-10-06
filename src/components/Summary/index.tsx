import { useTransactions } from '../../hooks/useTransactions'

import icomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

import { Container } from './styles'

export function Summary(){

  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.income += transaction.amount;
      acc.total += transaction.amount;
    }else{
      acc.outcome += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    income: 0,
    outcome: 0,
    total: 0,
  })

  const isTotalNegative = summary.total < 0;

  return(
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.income) }  
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong> 
         - 
         {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.outcome) }
        </strong>
      </div>


      <div className={isTotalNegative ? 'red-background' : 'highlith-background'}>
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total) }
        </strong>
      </div>
      
    </Container>
  );
}