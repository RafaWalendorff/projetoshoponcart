export const getCart = async () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

export const getProducts = async () => {
    return JSON.parse(localStorage.getItem('products')) || [
        {
            id: '011',
            title: 'Camiseta',
            description: 'Camiseta azul',
            image: 'https://img.ltwebstatic.com/images3_spmp/2023/06/22/1687438939fd456e0a0f23cac89614a1c74f005db8_thumbnail_720x.webp',
            price: 79.90
        },
        {
            id: '022',
            title: 'Calça',
            description: 'Camiseta azul',
            image: 'https://img.ltwebstatic.com/images3_pi/2022/02/28/16460407227a8b32f2aea1fbdac2043cc4b7f2b715_thumbnail_720x.webp',
            price: 89.90
        },
        {
            id: '033',
            title: 'Jaqueta',
            description: 'Camiseta azul',
            image: 'https://img.ltwebstatic.com/images3_pi/2023/04/18/168178903327ea8e85f16c5ec91db60f6f45cc1078_thumbnail_720x.webp',
            price: 99.90
        },
        {
            id: '044',
            title: 'Vestido',
            description: 'Camiseta azul',
            image: 'https://img.ltwebstatic.com/images3_pi/2022/02/24/16456980225809c55c3d6ae325e8360da864a4a59a_thumbnail_750x.webp',
            price: 89.90
        },
        {
            id: '055',
            title: 'Bermuda',
            description: 'Camiseta azul',
            image: 'https://img.ltwebstatic.com/images3_spmp/2023/07/14/1689277192175f227b6495edcf7744c02224075db4_square_thumbnail_720x.webp',
            price: 79.90
        },
        {
            id: '066',
            title: 'Carros',
            description: 'Camiseta azul',
            image: 'https://img.ltwebstatic.com/images3_spmp/2023/07/14/16892734835f9dc675026f55247e937088708aa06d_square_thumbnail_720x.webp',
            price: 69.90
        }
    ]
}



