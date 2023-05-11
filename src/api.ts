export const getBalance = async (id: number | undefined) => {
    if (!id) {
        return;
    }
    const responce = fetch (`https://api.ryodan.dev/getBalance?type=all&id=${id}`);
    console.log(responce);
    // const data = await responce.json()
    // console.log(data);
}