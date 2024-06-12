export default async function uploadMedia(file) {
    const response = await fetch('/api/createPost',{method: 'GET'});
        const body = await response.json();
        const signData = body.result;
        const url = "https://api.cloudinary.com/v1_1/" + signData.cloudname + "/auto/upload";
        const formData = new FormData();
    
        // Append parameters to the form data. The parameters that are signed using 
        // the signing function (signuploadform) need to match these.
            formData.append("file", file);
            formData.append("api_key", signData.apikey);
            formData.append("timestamp", signData.timestamp);
            formData.append("signature", signData.signature);
            formData.append("folder", "posts");
    
           try {
            const res = await fetch(url, {
                method: "POST",
                body: formData
            })
            if(!res.ok){
                throw new Error(`Something went wrong: ${res.status}`);
            }
            const data = await res.json();
            return {
                url: data.secure_url,
                filetype: file.type
            };
           } catch (error) {
            console.log(error);
           }
}