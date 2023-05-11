export const getBalance = async (id: number | undefined) => {
    if (!id) {
        return;
    }
    const responce = await fetch (`https://api.ryodan.dev/getBalance?type=all&id=${id}`);
    const data = await responce.json()
    console.log(data);
}