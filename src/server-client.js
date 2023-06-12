export class HttpClient {
    baseUrl = "http://localhost:3000"
    shoppingCartGeneralUrl = `${this.baseUrl}/shoppingCart`
    async getAllDishes() {
        return await fetch(this.shoppingCartGeneralUrl).then(response => response.json())
    }

    addNewDish(name, price,picture, success) {
        const data = {
            name: name,
            price: price,
            picture: picture
        }

        fetch(this.shoppingCartGeneralUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(() => success)
    }
}