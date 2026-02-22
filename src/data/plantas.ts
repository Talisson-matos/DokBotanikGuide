export interface PlantaData {
    id: number
    nome: string
    nomecientifico: string
    thumb: string
    imagens: string[]
    txtPath: string
}

export const plantas: PlantaData[] = [
    {
        id: 1,
        nome: 'Abacate',
        nomecientifico: 'Persea americana',
        thumb: '/plantas/planta1/abacate1.jpg',
        imagens: [
            '/plantas/planta1/abacate1.jpg',
            '/plantas/planta1/abacate2.jpeg',
            '/plantas/planta1/abacate3.jpeg',
            '/plantas/planta1/abacate4.jpg'
        ],
        txtPath: '/plantas/planta1/consumado.txt'
    },
    {
        id: 2,
        nome: 'Abacaxi',
        nomecientifico: 'Ananas comosus',
        thumb: '/plantas/planta2/Abacaxi1.jpeg',
        imagens: [
            '/plantas/planta2/Abacaxi1.jpeg',
            '/plantas/planta2/Abacaxi2.jpg',
            '/plantas/planta2/Abacaxi3.jpg',
            '/plantas/planta2/Abacaxi4.jpg',
            '/plantas/planta2/Abacaxi5.jpg'
        ],
        txtPath: '/plantas/planta2/consumado.txt'
    },
    {
        id: 3,
        nome: 'Abricó-do-pará',
        nomecientifico: 'Mammea americana',
        thumb: '/plantas/planta3/Abricó-do-pará1.jpg',
        imagens: [
            '/plantas/planta3/Abricó-do-pará1.jpg',
            '/plantas/planta3/Abricó-do-pará2.jpg',
            '/plantas/planta3/Abricó-do-pará3.jpg',
            '/plantas/planta3/Abricó-do-pará4.jpg'
        ],
        txtPath: '/plantas/planta3/consumado.txt'
    },
    {
        id: 4,
        nome: 'Abrotano',
        nomecientifico: 'Artemisia abrotanum',
        thumb: '/plantas/planta4/Abrótano1.jpg',
        imagens: [            
            '/plantas/planta4/Abrótano1.jpg',
            '/plantas/planta4/Abrótano2.jpg',
            '/plantas/planta4/Abrótano3.jpg',
            '/plantas/planta4/Abrótano4.jpg'
        ],
        txtPath: '/plantas/planta4/consumado.txt'
    },
    {
        id: 5,
        nome: 'Abrótea',
        nomecientifico: 'Plectranthus amboinicus',
        thumb: '/plantas/planta5/Abrótea1.jpg',
        imagens: [            
            '/plantas/planta5/Abrótea1.jpg',
            '/plantas/planta5/Abrótea2.jpg',
            '/plantas/planta5/Abrótea3.jpg',
            '/plantas/planta5/Abrótea4.jpg'
        ],
        txtPath: '/plantas/planta5/consumado.txt'
    },
    {
        id: 6,
        nome: 'Absinto',
        nomecientifico: 'Artemisia absinthium',
        thumb: '/plantas/planta6/Absinto1.jpeg',
        imagens: [
            '/plantas/planta6/Absinto1.jpeg',
            '/plantas/planta6/Absinto2.jpg',
            '/plantas/planta6/Absinto3.jpg',
            '/plantas/planta6/Absinto4.jpg'
        ],
        txtPath: '/plantas/planta6/consumado.txt'
    }
// 
    ,
    {
        id: 7,
        nome: 'Acacia',
        nomecientifico: 'Acacia dealbata',
        thumb: '/plantas/planta7/acacia1.jpeg',
        imagens: [
            '/plantas/planta7/acacia1.jpeg',
            '/plantas/planta7/acacia2.jpg',
            '/plantas/planta7/acacia3.jpg',
            '/plantas/planta7/acacia4.jpg'
        ],
        txtPath: '/plantas/planta7/consumado.txt'
    }

    ,
    {
        id: 8,
        nome: 'Acafrão',
        nomecientifico: 'Artemisia absinthium',
        thumb: '/plantas/planta8/acafrao1.jpg',
        imagens: [
            '/plantas/planta8/acafrao1.jpg',
            '/plantas/planta8/acafrao2.jpeg',
            '/plantas/planta8/acafrao3.jpeg',
            '/plantas/planta8/acafrao4.jpg'
        ],
        txtPath: '/plantas/planta8/consumado.txt'
    }

    ,
    {
        id: 9,
        nome: 'Aconito',
        nomecientifico: 'Aconitum napellus',
        thumb: '/plantas/planta9/aconito1.jpg',
        imagens: [
            '/plantas/planta9/aconito1.jpg',
            '/plantas/planta9/aconito2.jpeg',
            '/plantas/planta9/aconito3.jpg',
            '/plantas/planta9/aconito4.jpg'
        ],
        txtPath: '/plantas/planta9/consumado.txt'
    }

    ,
    {
        id: 10,
        nome: 'Açoro',
        nomecientifico: 'Artemisia absinthium',
        thumb: '/plantas/planta10/açoro1.jpg',
        imagens: [
            '/plantas/planta10/açoro1.jpg',
            '/plantas/planta10/açoro2.jpeg',
            '/plantas/planta10/açoro3.jpg',
            '/plantas/planta10/açoro4.jpg'
        ],
        txtPath: '/plantas/planta10/consumado.txt'
    }

    ,
    {
        id: 11,
        nome: 'Acteia',
        nomecientifico: 'Actaea rubra',
        thumb: '/plantas/planta11/acteia1.jpg',
        imagens: [
            '/plantas/planta11/acteia1.jpg',
            '/plantas/planta11/acteia2.jpg',
            '/plantas/planta11/acteia3.jpeg',
            '/plantas/planta11/acteia4.jpeg'
        ],
        txtPath: '/plantas/planta11/consumado.txt'
    }

    ,
    {
        id: 12,
        nome: 'Babaçu',
        nomecientifico: 'Attalea speciosa',
        thumb: '/plantas/planta12/babaçu1.jpg',
        imagens: [
            '/plantas/planta12/babaçu1.jpg',
            '/plantas/planta12/babaçu2.jpeg',
            '/plantas/planta12/babaçu3.jpeg',
            '/plantas/planta12/babaçu4.jpg'
        ],
        txtPath: '/plantas/planta12/consumado.txt'
    }

    ,
    {
        id: 13,
        nome: 'Zimbro',
        nomecientifico: 'Artemisia absinthium',
        thumb: '/plantas/planta13/zimbro1.jpg',
        imagens: [
            '/plantas/planta13/zimbro1.jpg',
            '/plantas/planta13/zimbro2.jpg',
            '/plantas/planta13/zimbro3.jpg',
            '/plantas/planta13/zimbro4.jpg'
        ],
        txtPath: '/plantas/planta13/consumado.txt'
    }

    ,
    {
        id: 14,
        nome: 'Barbatimao',
        nomecientifico: 'Himatanthus drasticus',
        thumb: '/plantas/planta14/barbatimao1.jpg',
        imagens: [
            '/plantas/planta14/barbatimao1.jpg',
            '/plantas/planta14/barbatimao2.jpg',
            '/plantas/planta14/barbatimao3.jpg',
            '/plantas/planta14/barbatimao4.jpg'
        ],
        txtPath: '/plantas/planta14/consumado.txt'
    }

    ,
    {
        id: 15,
        nome: 'Boldo',
        nomecientifico: 'Peumus boldus',
        thumb: '/plantas/planta15/boldo1.jpg',
        imagens: [
            '/plantas/planta15/boldo1.jpg',
            '/plantas/planta15/boldo2.jpeg',
            '/plantas/planta15/boldo3.jpg',
            '/plantas/planta15/boldo4.jpeg'
        ],
        txtPath: '/plantas/planta15/consumado.txt'
    }

    ,
    {
        id: 16,
        nome: 'Borragem',
        nomecientifico: 'Borrago officinalis',
        thumb: '/plantas/planta16/borragem1.jpg',
        imagens: [
            '/plantas/planta16/borragem1.jpg',
            '/plantas/planta16/borragem2.jpg',
            '/plantas/planta16/borragem3.jpeg',
            '/plantas/planta16/borragem4.jpg'
        ],
        txtPath: '/plantas/planta16/consumado.txt'
    }
    ,
    {
        id: 17,
        nome: 'Caju',
        nomecientifico: 'Anacardium occidentale',
        thumb: '/plantas/planta17/caju1.jpg',
        imagens: [
            '/plantas/planta17/caju1.jpg',
            '/plantas/planta17/caju2.jpeg',
            '/plantas/planta17/caju3.jpg',
            '/plantas/planta17/caju4.jpg'
        ],
        txtPath: '/plantas/planta17/consumado.txt'
    }
    ,
    {
        id: 18,
        nome: 'Calêndula',
        nomecientifico: 'Calendula officinalis',
        thumb: '/plantas/planta18/calendula1.jpg',
        imagens: [
            '/plantas/planta18/calendula1.jpg',
            '/plantas/planta18/calendula2.jpg',
            '/plantas/planta18/calendula3.jpg',
            '/plantas/planta18/calendula4.jpg'
        ],
        txtPath: '/plantas/planta18/consumado.txt'
    }
    ,
    {
        id: 19,
        nome: 'Camomila',
        nomecientifico: 'Chamaemelum nobile',
        thumb: '/plantas/planta19/camomila1.jpg',
        imagens: [
            '/plantas/planta19/camomila1.jpg',
            '/plantas/planta19/camomila2.jpg',
            '/plantas/planta19/camomila3.jpg',
            '/plantas/planta19/camomila4.jpg'
        ],
        txtPath: '/plantas/planta19/consumado.txt'
    }
    ,
    {
        id: 20,
        nome: 'Carqueja',
        nomecientifico: 'Baccharis trimera',
        thumb: '/plantas/planta20/carqueja1.jpg',
        imagens: [
            '/plantas/planta20/carqueja1.jpg',
            '/plantas/planta20/carqueja2.jpg',
            '/plantas/planta20/carqueja3.jpg',
            '/plantas/planta20/carqueja4.jpg'
        ],
        txtPath: '/plantas/planta20/consumado.txt'
    }
    ,
    {
        id: 21,
        nome: 'Cavalinha',
        nomecientifico: 'Equisetum arvense',
        thumb: '/plantas/planta21/cavalinha1.jpg',
        imagens: [
            '/plantas/planta21/cavalinha1.jpg',
            '/plantas/planta21/cavalinha2.jpg',
            '/plantas/planta21/cavalinha3.jpg',
            '/plantas/planta21/cavalinha4.jpg'
        ],
        txtPath: '/plantas/planta21/consumado.txt'
    }
    ,
    {
        id: 22,
        nome: 'Copaiba',
        nomecientifico: 'Copaiba officinalis',
        thumb: '/plantas/planta22/copaiba1.jpg',
        imagens: [
            '/plantas/planta22/copaiba1.jpg',
            '/plantas/planta22/copaiba2.jpg',
            '/plantas/planta22/copaiba3.jpg',
            '/plantas/planta22/copaiba4.jpeg'
        ],
        txtPath: '/plantas/planta22/consumado.txt'
    }
    ,
    {
        id: 23,
        nome: 'Cravo-de-defunto',
        nomecientifico: 'Tagetes minuta',
        thumb: '/plantas/planta23/cravodefunto1.jpg',
        imagens: [
            '/plantas/planta23/cravodefunto1.jpg',
            '/plantas/planta23/cravodefunto2.jpg',
            '/plantas/planta23/cravodefunto3.jpg',
            '/plantas/planta23/cravodefunto4.jpg'
        ],
        txtPath: '/plantas/planta23/consumado.txt'
    }
    ,
    {
        id: 24,
        nome: 'Erva cidreira',
        nomecientifico: 'Melissa officinalis',
        thumb: '/plantas/planta24/ervacidreira1.jpg',
        imagens: [
            '/plantas/planta24/ervacidreira1.jpg',
            '/plantas/planta24/ervacidreira2.jpg',
            '/plantas/planta24/ervacidreira3.jpg',
            '/plantas/planta24/ervacidreira4.jpg'
        ],
        txtPath: '/plantas/planta24/consumado.txt'
    }
    ,
    {
        id: 25,
        nome: 'Erva doce',
        nomecientifico: 'Foeniculum vulgare',
        thumb: '/plantas/planta25/ervadoce1.png',
        imagens: [
            '/plantas/planta25/ervadoce1.png',
            '/plantas/planta25/ervadoce2.jpg',
            '/plantas/planta25/ervadoce3.jpg',
            '/plantas/planta25/ervadoce4.jpg'
        ],
        txtPath: '/plantas/planta25/consumado.txt'
    }
    ,
    {
        id: 26,
        nome: 'Açai',
        nomecientifico: 'Euterpe oleracea',
        thumb: '/plantas/planta26/açai1.jpg',
        imagens: [
            '/plantas/planta26/açai1.jpg',
            '/plantas/planta26/açai2.jpg',
            '/plantas/planta26/açai3.jpg',
            '/plantas/planta26/açai4.jpg'
        ],
        txtPath: '/plantas/planta26/consumado.txt'
    }
    ,
    {
        id: 27,
        nome: 'Gravata',
        nomecientifico: 'Cissus verticillata',
        thumb: '/plantas/planta27/gravata1.jpg',
        imagens: [
            '/plantas/planta27/gravata1.jpg',
            '/plantas/planta27/gravata2.jpg',
            '/plantas/planta27/gravata3.jpg',
            '/plantas/planta27/gravata4.jpg'
        ],
        txtPath: '/plantas/planta27/consumado.txt'
    }
    ,
    {
        id: 28,
        nome: 'Jenipapo',
        nomecientifico: 'Genipa americana',
        thumb: '/plantas/planta28/jenipapo1.jpg',
        imagens: [
            '/plantas/planta28/jenipapo1.jpg',
            '/plantas/planta28/jenipapo2.jpg',
            '/plantas/planta28/jenipapo3.jpg',
            '/plantas/planta28/jenipapo4.jpg',
            '/plantas/planta28/jenipapo5.jpg'
        ],
        txtPath: '/plantas/planta28/consumado.txt'
    }
    ,
    {
        id: 29,
        nome: 'Guarana',
        nomecientifico: 'Paullinia cupana',
        thumb: '/plantas/planta29/guarana1.jpg',
        imagens: [
            '/plantas/planta29/guarana1.jpg',
            '/plantas/planta29/guarana2.jpg',
            '/plantas/planta29/guarana3.jpg',
            '/plantas/planta29/guarana4.jpg'
        ],
        txtPath: '/plantas/planta29/consumado.txt'
    }
    ,
    {
        id: 30,
        nome: 'Ype',
        nomecientifico: 'Handroanthus impetiginosus',
        thumb: '/plantas/planta30/ype1.jpg',
        imagens: [
            '/plantas/planta30/ype1.jpg',
            '/plantas/planta30/ype2.jpg',
            '/plantas/planta30/ype3.jpeg',
            '/plantas/planta30/ype4.jpeg'
        ],
        txtPath: '/plantas/planta30/consumado.txt'
    }
]

