import { useState } from 'react';
import styles from './ItemForm.module.css';
import statuses from '../../utils/status';
import getDate from '../../utils/getDate';

const ItemForm = ({ item, handleOnSubmit }) => {
    const [title, setTitle] = useState(item?.title || '');
    const [description, setDescription] = useState(item?.description || '');
    const [itemStatus, setItemStatus] = useState(item?.status || 'completed');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '' || description.trim() === '') {
            return;
        }

        const created_at = item?.created_at || getDate();
        const id = item?.id || crypto.randomUUID();

        handleOnSubmit({
            id,
            title,
            description,
            status: itemStatus,
            created_at,
        });
    };

    return (
        <form className={styles.form}>
        <h2>{item ? 'Update the task' : 'Create a task'}</h2>
            <input
                className={styles.input}
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                className={styles.input + ' ' + styles.textarea}
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <select
                defaultValue={itemStatus}
                className={styles.select}
                onChange={(e) => {
                    setItemStatus(e.target.value);
                }}
            >
                {statuses.map((status) => (
                    <option
                        key={status}
                        value={status}
                    >
                        {status}
                    </option>
                ))}
            </select>

            <button
                className={styles.button}
                onClick={handleSubmit}
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};

export default ItemForm;
