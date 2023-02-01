export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        title: data.title,
        category: data.category,
        price: data.price,
        description: data.description,
        image: data.image,
        stock: data.stock

    }
    return productAdapted
}

//Este adaptador puede ser útil a futuro si llegan a cambiar los datos de la db

