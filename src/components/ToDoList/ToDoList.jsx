import ToDoItem from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.css';

const ToDoList = ({ data, handleDelete, openUpdateForm }) => {
    return (
        <ul className={styles.todolist}>
            {data.map(({ id, ...rest }) => (
                <ToDoItem
                    key={id}
                    handleDelete={handleDelete}
                    id={id}
                    openUpdateForm={openUpdateForm}
                    {...rest}
                />
            ))}
        </ul>
    );
};

export default ToDoList;
