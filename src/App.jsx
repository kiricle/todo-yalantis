import { useEffect, useReducer, useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

import styles from './App.module.css';

import ItemForm from './components/ItemForm/ItemForm';
import ModalWindow from './components/ModalWindow/ModalWindow';
import ToDoList from './components/ToDoList/ToDoList';

import modalReducer from './state/modalReducer';
import todoReducer from './state/todoReducer';

function App() {
    const [itemToUpdate, setItemToUpdate] = useState(null);

    const [storedData, setStoredData] = useLocalStorage('todoListData', []);
    const [todoListData, dispatchTodoListData] = useReducer(
        todoReducer,
        storedData
    );
    const [isCreateFormModalOpen, isCreateFormModalDispatch] = useReducer(
        modalReducer,
        { isOpen: false }
    );
    const [isUpdateFormModalOpen, isUpdateFormModalDispatch] = useReducer(
        modalReducer,
        { isOpen: false }
    );

    useEffect(() => {
        setStoredData(todoListData);
    }, [todoListData, setStoredData]);

    const createItem = (item) => {
        isCreateFormModalDispatch({ type: 'CLOSE_MODAL' });
        dispatchTodoListData({ type: 'CREATE_ITEM', payload: item });
    };

    const handleDelete = (id) => {
        dispatchTodoListData({ type: 'DELETE_ITEM', payload: id });
    };

    const openUpdateForm = (id) => {
        isUpdateFormModalDispatch({ type: 'OPEN_MODAL' });
        setItemToUpdate(todoListData.find((item) => item.id === id));
    };

    const handleUpdate = (item) => {
        dispatchTodoListData({ type: 'UPDATE_ITEM', payload: item });
        isUpdateFormModalDispatch({ type: 'CLOSE_MODAL' });
    };

    return (
        <div className={styles.wrapper}>
            <h1>ToDo List for Yalantis practice</h1>
            <button
                className={styles.open_btn}
                onClick={() =>
                    isCreateFormModalDispatch({ type: 'OPEN_MODAL' })
                }
            >
                +
            </button>
            <ModalWindow
                isOpen={isCreateFormModalOpen.isOpen}
                closeModal={() =>
                    isCreateFormModalDispatch({ type: 'CLOSE_MODAL' })
                }
            >
                <ItemForm handleOnSubmit={createItem} />
            </ModalWindow>
            <ModalWindow
                isOpen={isUpdateFormModalOpen.isOpen}
                closeModal={() =>
                    isUpdateFormModalDispatch({ type: 'CLOSE_MODAL' })
                }
            >
                <ItemForm
                    item={itemToUpdate}
                    handleOnSubmit={handleUpdate}
                />
            </ModalWindow>
            {todoListData && (
                    <ToDoList
                        data={todoListData}
                        handleDelete={handleDelete}
                        openUpdateForm={openUpdateForm}
                    />
            )}
        </div>
    );
}

export default App;
