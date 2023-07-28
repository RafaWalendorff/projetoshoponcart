import { Card } from "../../components/Card/Card"
import { useAppContext } from "../../store/AppContext"
import { openModalAction } from "../../store/actions"

export const CardContainer = (props) => {
    const { dispatch } = useAppContext();
    const { id } = props; 

    const handleClick = () => {
        console.log('Clicou', id);
        dispatch(openModalAction(id)); // Abre o modal com o ID do produto
    }
    
    return (
        <Card {...props} onClick={handleClick} /> // Corrigido aqui
    )
}
