export class Item {
    private id: number;
    private name: string;
    private imageUrl: string;
    private price: number;

    constructor(id: number, name: string, imageUrl: string, price: number) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}
