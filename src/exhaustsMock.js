const products = [
    {id:"1",img:"https://em-moto.com/media/catalog/product/cache/3bcba23d6b71b01ccb4c6be8af496a50/akrapovic/S-B10R4-APLT_02.jpg",name:"Akrapovic",category:"akrapovic",model:"Evolution Line",price:"1500 Usd"},
    {id:"2",img:"https://www.ramirezmoto.es/admin/pictures/zoom/Akrapovic-S-B10SO6-HDVDZT.jpg",name:"Akrapovic",category:"akrapovic",model:"Racing Line",price:"1000 Usd"},
    {id:"3",img:"https://all2bikes.com/cdn/shop/products/Akrapovic-Yamaha-Yzf-R6-2017-Evolution-Full-Exhaust-System__16640.1497968431.jpg?v=1571749757",name:"Akrapovic",category:"akrapovic",model:"Carbon Line",price:"1800 Usd"},
    {id:"4",img:"https://http2.mlstatic.com/D_NQ_NP_741379-MLA31588146842_072019-O.webp",name:"Akrapovic",category:"akrapovic",model:"Titanium Line",price:"500 Usd"},
    {id:"5",img:"https://scmedia.sc-project.com/images/thumbs/0035842_gp70-r-titanium-exhaust-with-de-cat-link-pipe_900.jpeg",name:"SC-Projet",category:"SC-Projet",model:"GP70-R",price:"600 Usd"},
    {id:"6",img:"https://scmedia.sc-project.com/images/thumbs/0035838_cr-t-carbon-exhaust-with-stoneguard-grid_900.jpeg",name:"SC-Projet",category:"SC-Projet",model:"CR-T",price:"750 Usd"},
    {id:"7",img:"https://scmedia.sc-project.com/images/thumbs/0035841_sc1-r-titanium-exhaust-250-mm-with-de-cat-link-pipe_900.jpeg",name:"SC-Projet",category:"SC-Projet",model:"SC1-R",price:"1000 Usd"},
    {id:"8",img:"https://www.motorraiz.com/images/products/arrow_71179ckz_6.jpg",name:"Arrow",category:"Arrow",model:"Competition",price:"1700 Usd"},
    {id:"9",img:"https://www.powerbikes.com.ar/wp-content/uploads/2020/07/8019799081611.jpg",name:"Arrow",category:"Arrow",model:"Pista",price:"1100Uds"},
    {id:"10",img:"https://www.nilmoto.com/imagenes/Image/Productos/72X10SK_1_4.jpg",name:"Arrow",category:"Arrow",model:"Pro Race",price:"950 Usd"},
    {id:"11",img:"https://www.termignoni.it/wp-content/uploads/2021/02/D088_8-19_Carb-Exhaust-kit_Evidenza-2.jpg",name:"Termignoni",category:"Termignoni",model:"S4R",price:"1500 Usd"},
    {id:"12",img:"https://www.termignoni.it/wp-content/uploads/2021/02/D103_D119_D120_Evidenza.jpg",name:"Termignoni",category:"Termignoni",model:"SBK 1098",price:"1850 Usd"},
    {id:"13",img:"https://www.termignoni.it/wp-content/uploads/2021/04/H116CV-1.jpg",name:"Termignoni",category:"Termignoni",model:"STTR-3",price:"1100 Usd"},
    {id:"14",img:"https://www.yoshimura-rd.com/cdn/shop/products/150-50A-A18G0_GSXR1_17-19_R11_FS_TI_TI_CF_1_720x.jpg?v=1658859962",name:"Yoshimura",category:"Yoshimura",model:"Race-R",price:"2000Usd"},
    {id:"15",img:"https://www.yoshimura-rd.com/cdn/shop/products/ROAD_ALPHA-T_Ti_Muffler_a1c0b2d7-8dec-4d6a-a6f0-5aa2db6b65b2_720x.jpg?v=1581530442",name:"Yoshimura",category:"Yoshimura",model:"Alpha-T",price:"1000Usd"},
    {id:"16",img:"https://www.yoshimura-rd.com/cdn/shop/products/AT2_Muffler_Gray_4500_720x.jpg?v=1661554103",name:"Yoshimura",category:"Yoshimura",model:"AT2",price:"1200Usd"}
]

export const addProducts = () =>{
    return new Promise((resolve , reject) =>{
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        }else{
            reject("Error a cargar la pagina")
        }
    })
}