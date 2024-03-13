
export function getApiUrl() {
    if (process.env.NODE_ENV === 'development') {
        return "http://localhost:5125";
    }
    else {
        return "https://trivia.imperisoft.co.uk:5125";
    }
}
