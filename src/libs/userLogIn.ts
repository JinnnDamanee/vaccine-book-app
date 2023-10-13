const userLogIn = async(email:string, password:string) => {
    const resp = await fetch('http://localhost:5001/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            email, 
            password 
        })
    });
    if (!resp.ok) throw new Error("Failed to log in");
    return await resp.json();
};
export default userLogIn;