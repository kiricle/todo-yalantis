import { useState } from 'react';
import styles from './ModalWindow.module.css';
import cn from 'classnames';

const ModalWindow = ({ isOpen, closeModal, children }) => {
    const animationDuration = 500;
    const [isClosing, setIsClosing] = useState(false);

    if (!isOpen) {
        return null;
    }

    const handleAnimatedClose = () => {
        setIsClosing(true);

        setTimeout(() => {
            closeModal();
            setIsClosing(false);
        }, animationDuration);
    };

    return (
        <div
            className={cn(styles.modal_window, {
                [styles.modal_window_hide]: isClosing,
            })}
        >
            <div className={styles.content}>
                <button
                    className={styles.close_button}
                    onClick={handleAnimatedClose}
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;
