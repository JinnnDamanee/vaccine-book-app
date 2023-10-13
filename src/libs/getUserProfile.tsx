interface UserProfile {
    name: string,
    email: string,
    tel: string,
    createdAt: string,
}

const getUserProfile = async (token: string) => {
    const resp = await fetch(`http://localhost:5001/api/v1/auth/me`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    if (!resp.ok) {
        throw new Error('Failed to get user profile')
    }
    const data = (await resp.json()).data
    const u: UserProfile = {
        name: data.name,
        email: data.email,
        tel: data.tel,
        createdAt: (new Date(data.createdAt)).toString(),
    }
    return u
}
export default getUserProfile