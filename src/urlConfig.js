// const baseUrl = "http://localhost:2000";
const baseUrl = "https://pluskart-rest-server.vercel.app/";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (filename) => {
    return `${baseUrl}/public/${filename}`;
} 