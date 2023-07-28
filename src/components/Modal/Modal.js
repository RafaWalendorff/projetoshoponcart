import { Button } from '../Button/Button';
import ModalBS from 'react-bootstrap/Modal';

export const Modal = ({ title, children, open, controls = [], onHide }) => {
    return (
        <ModalBS show={open} onHide={onHide}>
            <ModalBS.Header closeButton>
                <ModalBS.Title>{title}</ModalBS.Title>
            </ModalBS.Header>
            <ModalBS.Body>{children}</ModalBS.Body>
            <ModalBS.Footer>
                {controls.map((control, controlIndex) => (
                    <Button
                    key={controlIndex}
                        {...control}
                    />
                ))}
            </ModalBS.Footer>
        </ModalBS>
    );
};