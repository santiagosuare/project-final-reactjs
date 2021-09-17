const items = [
    { id: 1 , title: "Zapatillas Run Falcon 2.0", descrption: "Hombre Zapatillas Running", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d22445aab0423281e2ad1801588db6_9366/Zapatllas_Run_Falcon_2.0_Azul_GZ8077_01_standard.jpg" },
    { id: 2 , title: "Camiseta Titular Boca Juniors", descrption: "Hombre Camiseta", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/07a1c0d6866c4d138be6ad91013a671c_9366/Camiseta_Titular_Oficial_Boca_Juniors_21-22_Azul_GA7544_01_laydown.jpg" },
    { id: 3 , title: "Remera Aeroready Move Sport", descrption: "Hombre Remera", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/922e915a6f4547799dbbac8300b499cd_9366/Remera_AEROREADY_Designed_To_Move_Sport_Negro_GM2090_21_model.jpg" },
    { id: 4 , title: "Chomba River Plate", descrption: "Hombre Remera", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b1af05440bf74627b992abc700b258c3_9366/Chomba_River_Plate_Gris_FQ7687_21_model.jpg" },
    { id: 5 , title: "Nemeziz .3 TF", descrption: "Hombre Botines", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a41b76ea77b9464a8b84ac920089e820_9366/NEMEZIZ_.3_TF_Blanco_FW7345_01_standard.jpg" },
    { id: 6 , title: "Botines X Ghosted", descrption: "Hombre Botines", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9e7c3c5728db4d11955dab50011d4935_9366/Botines_X_Ghosted+_Terreno_Suave_Blanco_EG8253_01_standard.jpg" },
    { id: 7 , title: "Camiseta Titular Seleccion Argentina", descrption: "Hombre Camiseta", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6d85036726614f5a9b69ab7d014920bf_9366/Camiseta_Titular_Seleccion_Argentina_Blanco_FS6565_01_laydown.jpg" },
]


export const getItem = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(items)
    }, 2000);
})


const item = { id: 8 , descrption: "Hombre Zapatillas Running" }

export const getItemUno = new Promise ((resolve) =>{
    setTimeout(() => {
        resolve(item)
    }, 2000);
})