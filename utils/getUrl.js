export default function getUrl() {
    return (
        process.env.NODE_ENV === 'development' 
            ? 'http://localhost:3000'
            : 'https://nayakai.vercel.app'
    ) 
}