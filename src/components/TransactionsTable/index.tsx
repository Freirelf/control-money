import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable(){
  useEffect(() =>{
    api.get('https://localhost:3000/api/transactions')
      .then(response => console.log(response.data));
  }, []);


  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit"> + R$ 500,00</td>
            <td>Freelancer</td>
            <td>14/03/1997</td>
          </tr>

          <tr>
            <td>Mercado</td>
            <td className="withdraw"> - R$ 200,00</td>
            <td>alimentação</td>
            <td>14/03/1997</td>
          </tr> 
        </tbody>
      </table>
    </Container>
  );
}