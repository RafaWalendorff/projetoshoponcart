export const getCart = async () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

export const getProducts = async () => {
    return JSON.parse(localStorage.getItem('products')) || [
        {
            id: '011',
            title: 'Moletom com Capuz e bolso',
            description: 'Frase: "Like a proton, stay positive." Em algodão, possui capuz e bolso canguru. Tamanho único.',
            image: 'https://img.ltwebstatic.com/images3_spmp/2023/06/22/1687438939fd456e0a0f23cac89614a1c74f005db8_thumbnail_720x.webp',
            price: 99.90
        },
        {
            id: '022',
            title: 'Camiseta Feminina Planetas',
            description: 'Estampada com planetas. Em algodão, tamanho único.',
            image: 'https://img.ltwebstatic.com/images3_pi/2022/02/28/16460407227a8b32f2aea1fbdac2043cc4b7f2b715_thumbnail_720x.webp',
            price: 69.90
        },
        {
            id: '033',
            title: 'Camiseta Feminina "Cats and coffe"',
            description: 'Frase "I like cats and coffee, and maybe 3 people." Em algodão, tamanho único.',
            image: 'https://img.ltwebstatic.com/images3_pi/2023/04/18/168178903327ea8e85f16c5ec91db60f6f45cc1078_thumbnail_720x.webp',
            price: 49.90
        },
        {
            id: '044',
            title: 'Camiseta Masculina "Mona Lisa"',
            description: 'Estampa Mona Lisa, em algodão e com tamanho único.',
            image: 'https://img.ltwebstatic.com/images3_pi/2022/02/24/16456980225809c55c3d6ae325e8360da864a4a59a_thumbnail_750x.webp',
            price: 59.90
        },
        {
            id: '055',
            title: 'Camiseta Masculina Gamer',
            description: 'Estampa gamer com a frase "I paused my game to be here". Em algodão, tamanho único.',
            image: 'https://img.ltwebstatic.com/images3_spmp/2023/07/14/1689277192175f227b6495edcf7744c02224075db4_square_thumbnail_720x.webp',
            price: 79.90
        },
        {
            id: '066',
            title: 'Camiseta Masculina Programador',
            description: 'Frase "Keep calm and code on." Algodão, tamanho único.',
            image: 'https://img.ltwebstatic.com/images3_spmp/2023/07/14/16892734835f9dc675026f55247e937088708aa06d_square_thumbnail_720x.webp',
            price: 69.90
        },
        {
            id: '077',
            title: 'Moletom Feminino Gato Lunar',
            description: 'Estampa de gato na lua. Algodão, tamanho único.',
            image: 'https://img.ltwebstatic.com/images3_pi/2022/12/05/1670219807923ee8711f817daf86608bb4d10c67ef_thumbnail_600x.jpg',
            price: 79.90
        },
        {
            id: '088',
            title: 'Moletom Masculino Van Gogh',
            description: 'Frase "The one and only you belong to yourself." Algodão, tamanho único.',
            image: 'https://img.ltwebstatic.com/images3_pi/2022/11/27/1669544103854af978ef3b3551a96b68b1ec2bac95_thumbnail_600x.jpg',
            price: 89.90
        },
        {
            id: '099',
            title: 'Camiseta Masculina Programador',
            description: 'Frase "Keep calm and code on." Algodão, tamanho único.',
            image: 'https://img.ltwebstatic.com/images3_pi/2023/06/30/16881190996c0f837569435a9625bfbee6adb9e015_thumbnail_600x.jpg',
            price: 59.90
        }
    ]
}



