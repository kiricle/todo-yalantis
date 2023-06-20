import ToDoItem from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.css';

const ToDoList = ({ data, handleDelete, openUpdateForm }) => {

    const sortedData = data.sort((a, b) => {
        return a.created_at > b.created_at ? -1 : 1;
    });

    return (
        <ul className={styles.todolist}>
            {sortedData.map(({ id, ...rest }) => (
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
