export function getMessage() {
    return fetch("http://localhost:3000/message").then((res) => {
        return res.json();
    });
}
