export const initializeApp = jest.fn()
export const auth = jest.fn()
export const firestore = jest.fn(() => ({
    collection: jest.fn()
}))