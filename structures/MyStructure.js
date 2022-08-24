class MyStructure{
    add(name, dpi, element){
        console.log("add name ", name)
        console.log("add dpi ", dpi)
        console.log("add element ", element)
    }
    delete(name, dpi){
        console.log("remove name ", name)
        console.log("remove dpi ", dpi)
    }
    update(name, dpi, element){
        console.log("update name ", name)
        console.log("update dpi ", dpi)
        console.log("update element ", element)
    }
}

module.exports = MyStructure