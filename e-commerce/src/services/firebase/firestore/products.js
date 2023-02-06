import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { createAdaptedProductFromFirestore } from '../../../components/adapters/productAdapted'

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })

            resolve(productsAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getProductById = (producId) => {
    return new Promise((resolve, reject) => {

        const docRef = doc(db, 'products', producId)

        getDoc(docRef).then(response => {
            const productAdapted = createAdaptedProductFromFirestore(response)
            resolve(productAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}
