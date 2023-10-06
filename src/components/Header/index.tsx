import logo from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void; // void => não recebe nenhum parametro e não retorna nenhum valor;
}

export function Header({onOpenNewTransactionModal} : HeaderProps) {
  return(
    <Container>
      <Content>
        <img src={logo} alt="Logo" />
        <button type='button' onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>

      </Content>
    </Container>
);
}