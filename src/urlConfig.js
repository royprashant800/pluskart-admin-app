// const baseUrl = "http://localhost:2000";
const baseUrl = "https://pluskart-rest-server-8a6894d0725f.herokuapp.com";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (filename) => {
    return `${baseUrl}/public/${filename}`;
} 