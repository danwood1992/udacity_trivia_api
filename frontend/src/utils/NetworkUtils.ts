
export function getApiUrl() {
    if (process.env.NODE_ENV === 'development') {
        console.log("Using development API URL");
        return "http://localhost:5125";
    }
    else {
        console.log("Using production API URL");
        return "https://trivia.imperisoft.co.uk";
    }
}
