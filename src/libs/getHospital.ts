const getHospital = async (id: string) => {
    const resp = await fetch(`http://localhost:5001/api/v1/hospitals/${id}`)
    if (!resp.ok) {
        throw new Error('Error, cannot fetch hospital')
    }
    const hospitals = await resp.json()
    return hospitals.data
}
export default getHospital