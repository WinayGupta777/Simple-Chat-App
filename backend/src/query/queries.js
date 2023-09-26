export const QUERY = {
    messages:{
        getMessages: 'SELECT * FROM Messages LIMIT 10',
        postMessage: 'INSERT INTO Messages (ip, message) VALUES (?,?)',
    },
}
