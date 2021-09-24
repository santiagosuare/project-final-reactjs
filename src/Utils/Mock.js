const items = [
    { id: 1, title: "Zapatillas Run Falcon 2.0", categoria: "Zapatillas", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d22445aab0423281e2ad1801588db6_9366/Zapatllas_Run_Falcon_2.0_Azul_GZ8077_01_standard.jpg" },
    { id: 2, title: "Camiseta Titular Boca Juniors", categoria: "Camisetas", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/07a1c0d6866c4d138be6ad91013a671c_9366/Camiseta_Titular_Oficial_Boca_Juniors_21-22_Azul_GA7544_01_laydown.jpg" },
    { id: 3, title: "Remera Aeroready Move Sport", categoria: "Remeras", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/922e915a6f4547799dbbac8300b499cd_9366/Remera_AEROREADY_Designed_To_Move_Sport_Negro_GM2090_21_model.jpg" },
    { id: 4, title: "Chomba River Plate", categoria: "Remeras", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b1af05440bf74627b992abc700b258c3_9366/Chomba_River_Plate_Gris_FQ7687_21_model.jpg" },
    { id: 5, title: "Nemeziz .3 TF", categoria: "Botines", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a41b76ea77b9464a8b84ac920089e820_9366/NEMEZIZ_.3_TF_Blanco_FW7345_01_standard.jpg" },
    { id: 6, title: "Botines X Ghosted", categoria: "Botines", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9e7c3c5728db4d11955dab50011d4935_9366/Botines_X_Ghosted+_Terreno_Suave_Blanco_EG8253_01_standard.jpg" },
    { id: 7, title: "Camiseta Titular Seleccion Argentina", categoria: "Camisetas", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6d85036726614f5a9b69ab7d014920bf_9366/Camiseta_Titular_Seleccion_Argentina_Blanco_FS6565_01_laydown.jpg" },
    { id: 8, title: "Botines Predator 19.3", categoria: "Botines", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/393ae13281814f55a263acc2010dc1ce_9366/Botines_Predator_19.3_Sin_Cordones_Terreno_Firme_Rojo_FY6295_01_standard.jpg" },
    { id: 9, title: "Camiseta Uniforme Titular Juventus", categoria: "Camisetas", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6a8e5ed538544c6d9ffbaa250114e25e_9366/Camiseta_Uniforme_Titular_Juventus_Negro_DW5455_01_laydown.jpg" },
    { id: 10, title: "Camiseta Tercer Uniforme Juventus", categoria: "Camisetas", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7d08265dd49b4063a249aa2c00fb9344_9366/Camiseta_Tercer_Uniforme_Juventus_Azul_DW5471_01_laydown.jpg" },
    { id: 11, title: "Remera Gran Trifolio Boxy", categoria: "Remeras", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/43dd4739608a4bcb90e3ab0b0135ee9e_9366/Remera_Gran_Trifolio_Boxy_Azul_FM9902_21_model.jpg" },
    { id: 12, title: "Zapatillas ASWEEMOVE", categoria: "Zapatillas", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/eb721294a2fe45e6b1b6aba201272923_9366/Zapatillas_ASWEEMOVE_Negro_FW1681_01_standard.jpg" },
    { id: 13, title: "Botines Predator Mutator 20.3", categoria: "Botines", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/124d03854c3c4b998efeabd50081a6ae_9366/Botines_Predator_Mutator_20.3_Sin_Cordones_Terreno_Firme_Blanco_FW9198_01_standard.jpg"},
    { id: 14, title: "M FI CAMO TEE", categoria: "Remeras", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5bfcae0e09c743ac91e9acf70120aa5e_9366/M_FI_CAMO_TEE_Multicolor_HA8707_21_model.jpg" },
    { id: 15, title: "Zapatillas Grand Court", categoria: "Zapatillas", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c2d548d5dbb2449a86e2ad0b00fe94fd_9366/Zapatillas_Grand_Court_Base_Beyond_Blanco_H04558_01_standard.jpg" },
    { id: 16, title: "Zapatillas DELPALA", categoria: "Zapatillas", price: 1300, pictureURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/23bc594bb7674ead9ab5aba301414969_9366/Zapatillas_Delpala_Blanco_FV0639_01_standard.jpg" }
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