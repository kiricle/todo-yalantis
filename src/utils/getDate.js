const getDate = () => {
    return new Date().toLocaleDateString('ua', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });
};


export default getDate;