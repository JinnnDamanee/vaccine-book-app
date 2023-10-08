const getHospitals = async () => {

    await new Promise(resolve => setTimeout(resolve, 5000))

    const resp = await fetch('http://localhost:5001/api/v1/hospitals')
    if (!resp.ok) {
        throw new Error('Error, cannot fetch hospitals')
    }
    const hospitals = await resp.json()
    return hospitals.data
}
export default getHospitals