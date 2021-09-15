const items = [
    { id: 1 , title: "Remera Adidas", descrption: "remera adidas microfibra", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/bd61ea707bf5483d804dac0900e3c37f_9366/Remera_Must_Haves_Badge_of_Sport_Granate_GC6967_21_model.jpg" },
    { id: 2 , title: "Remera Adidas", descrption: "remera adidas microfibra", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/bd61ea707bf5483d804dac0900e3c37f_9366/Remera_Must_Haves_Badge_of_Sport_Granate_GC6967_21_model.jpg" }
]


export const getItem = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(items)
    }, 2000);
})