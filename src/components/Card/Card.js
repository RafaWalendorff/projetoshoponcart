import { CardContainer } from "../../containers/CardContainer/Card"
import { useAppContext } from "../../store/AppContext"
import { openModalAction } from "../../store/actions"

export const Card = (props) => {
    const { dispatch } = useAppContext();
    const { id } = props; 

    const handleClick = () => {
        console.log('Clicou', id);
        dispatch(openModalAction(id));
    }
    
    return (
        <CardContainer {...props} onClick={handleClick} /> 
    )
}
