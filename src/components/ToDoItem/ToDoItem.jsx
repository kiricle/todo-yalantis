import EditLogo from './edit.svg';
import styles from './ToDoItem.module.css';
import cn from 'classnames';
import { useState } from 'react';

const ToDoItem = ({
    id,
    title,
    status,
    created_at,
    description,
    handleDelete,
    openUpdateForm,
}) => {
    const animationDuration = 300;
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteWithAnimation = () => {
        setIsDeleting(true)
        setTimeout(() => {
            handleDelete(id);
        }, animationDuration);
    };

    return (
        <li className={cn(styles.item, {
            [styles.item_hide]: isDeleting
        })}>
            <div className={styles.header}>
                <h2 className={styles.todotitle}>{title}</h2>
                <div>
                    <span className={styles.status}>{status}</span>
                    <span className={styles.date}>{created_at}</span>
                </div>
            </div>

            <div className={styles.content}>
                <p className={styles.description}>{description}</p>
            </div>
            <button
                className={styles.edit_button}
                onClick={() => openUpdateForm(id)}
            >
                <EditLogo className={styles.edit_logo} />
            </button>
            <button
                onClick={handleDeleteWithAnimation}
                className={styles.delete_button}
            >
                &#9747;
            </button>
        </li>
    );
};

export default ToDoItem;
