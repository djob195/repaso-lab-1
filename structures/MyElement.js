class MyElement{
    constructor(element){
        this.dpi = element.dpi;
        this.name = element.name;
        this.datebirth = element.datebirth;
        this.address = element.address;
    }

    toStringifyJson (){
        return JSON.stringify({
            dpi: this.dpi,
            name: this.name,
            datebirth: this.datebirth,
            address: this.address,
        });
    }
}
module.exports = MyElement