import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp, getApps, cert } from 'firebase-admin/app'

const apps = getApps()

if (!apps.length) {
    initializeApp({
        credential: cert('./deneme-68d0a-firebase-adminsdk-7ve9e-03cc562233.json') // 👈 Path to your JSON Firebase certificate
    })
}

export default async () => {
    const db = getFirestore()
    const categoriesSnap = await db.collection('catagories').get()
    const categoriesData = categoriesSnap.docs.map(doc => {
        return {
            uuid: doc.id,
            ...doc.data()
        }
    })
    
    return categoriesData
}