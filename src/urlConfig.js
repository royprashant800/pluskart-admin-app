// const baseUrl = "http://localhost:2000";
const baseUrl = "https://web-production-9bb41.up.railway.app";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (filename) => {
    return `${baseUrl}/public/${filename}`;
} 