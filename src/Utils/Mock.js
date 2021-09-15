const items = [
    { id: 1 , title: "Zapatillas Run Falcon 2.0", descrption: "Hombre Zapatillas Running", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d22445aab0423281e2ad1801588db6_9366/Zapatllas_Run_Falcon_2.0_Azul_GZ8077_01_standard.jpg" },
    { id: 2 , title: "Camiseta Titular Boca Juniors", descrption: "Hombre Camiseta", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/07a1c0d6866c4d138be6ad91013a671c_9366/Camiseta_Titular_Oficial_Boca_Juniors_21-22_Azul_GA7544_01_laydown.jpg" }
]


export const getItem = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(items)
    }, 2000);
})