const productos = [
    {
        nombre: 'Camiseta Hombre',
        precio: 48.000,
        categoria: 'Hombre',
        codigo: 'Aa123456',
        imagen: '/img/CamisetaHombre.jpg',
        color:'Azul',
        talla: 'L',
        material: 'Tela Fria'

    },
    {
        nombre: 'Polo',
        precio: 70.000,
        categoria: 'Hombre',
        codigo: 'Ab123456',
        imagen: '/img/Polo.jpg',
        color:'Negro',
        talla: 'XL',
        material: 'Algodon'

    },
    {
        nombre: 'ChaquetaHombre',
        precio: 80.000,
        categoria: 'Hombre',
        codigo: 'Ac123456',
        imagen: '/img/ChaquetaHombre.jpg',
        color:'Rojo',
        talla: 'M',
        material: 'Poliester'

    },
    {
        nombre: 'Pantalon',
        precio: 95.000,
        categoria: 'Hombre',
        codigo: 'Ad123456',
        imagen: '/img/Pantalon.jpg',
        color:'Azul',
        talla: 'L',
        material: 'Algodon'

    },
    {
        nombre: 'Camisa Formal',
        precio: 70.000,
        categoria: 'Hombre',
        codigo: 'Ae123456',
        imagen: '/img/CamisaFormal.jpg',
        color:'Blanca',
        talla: 'M',
        material: 'Algodon'

    },
    {
        nombre: 'Saco',
        precio: 75.000,
        categoria: 'Hombre',
        codigo: 'Af123456',
        imagen: '/img/Saco.jpg',
        color:'Verde',
        talla: 'L',
        material: 'Algodon'

    },
    {
        nombre: 'Sudadera',
        precio: 70.000,
        categoria: 'Hombre',
        codigo: 'Ag123456',
        imagen: '/img/Sudadera.jpg',
        color:'Negro',
        talla: 'L',
        material: 'Piel De Durazno'

    },
    {
        nombre: 'Oversize',
        precio: 60.000,
        categoria: 'Hombre',
        codigo: 'Ah123456',
        imagen: '/img/Oversize.jpg',
        color:'Rojo',
        talla: 'XL',
        material: 'Tela Fria'

    },
    {
        nombre: 'Pantaloneta',
        precio: 50.000,
        categoria: 'Hombre',
        codigo: 'Ai123456',
        imagen: '/img/Pantaloneta.jpg',
        color:'Blanco',
        talla: 'M',
        material: 'Piel De Durazno'

    },
    {
        nombre: 'Mocho',
        precio: 85.000,
        categoria: 'Hombre',
        codigo: 'Aj123456',
        imagen: '/img/Mocho.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },
    {
        nombre: 'Blusa',
        precio: 50.000,
        categoria: 'Mujer',
        codigo: 'Ba123456',
        imagen: '/img/Blusa.jpg',
        color:'Blanco',
        talla: 'S',
        material: 'Satin'

    },
    {
        nombre: 'Falda',
        precio: 80.000,
        categoria: 'Mujer',
        codigo: 'Bb123456',
        imagen: '/img/Falda.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Seda'

    },
    {
        nombre: 'Camiseta Mujer',
        precio: 48.000,
        categoria: 'Mujer',
        codigo: 'Bc123456',
        imagen: '/img/CamisetaMujer.jpg',
        color:'Verde',
        talla: 'S',
        material: 'Tela Fria'

    },
    {
        nombre: 'JeanMujer',
        precio: 95.000,
        categoria: 'Mujer',
        codigo: 'Bd123456',
        imagen: '/img/JeanMujer.jpg',
        color:'Blanco',
        talla: 'XL',
        material: 'Algodon'

    },
    {
        nombre: 'Short',
        precio: 85.000,
        categoria: 'Mujer',
        codigo: 'Be123456',
        imagen: '/img/Short.jpg',
        color:'Negro',
        talla: 'L',
        material: 'Algodon'

    },
    {
        nombre: 'Conjunto',
        precio: 105.000,
        categoria: 'Mujer',
        codigo: 'bf123456',
        imagen: '/img/ConjuntoMujer.jpg',
        color:'Verde',
        talla: 'M',
        material: 'Seda'

    },
    {
        nombre: 'Enterizo',
        precio: 100.000,
        categoria: 'Mujer',
        codigo: 'Bg123456',
        imagen: '/img/Enterizo.jpg',
        color:'Negro',
        talla: 'M',
        material: 'Algodon'

    },
    {
        nombre: 'Saco Corto',
        precio: 65.000,
        categoria: 'Mujer',
        codigo: 'Bh123456',
        imagen: '/img/SacoCorto.jpg',
        color:'Blanco',
        talla: 'XL',
        material: 'Algodon'

    },
    {
        nombre: 'Licra',
        precio: 55.000,
        categoria: 'Mujer',
        codigo: 'Bi123456',
        imagen: '/img/Licra.jpg',
        color:'Negro',
        talla: 'S',
        material: 'Nylon'

    },
    {
        nombre: 'Chaqueta Mujer',
        precio: 85.000,
        categoria: 'Mujer',
        codigo: 'Bj123456',
        imagen: '/img/ChaquetaMujer.jpg',
        color:'Blanco',
        talla: 'M',
        material: 'Poliester'

    },
    {
        nombre: 'Pijama',
        precio: 80.000,
        categoria: 'Niños',
        codigo: 'Ca123456',
        imagen: '/img/Pijama.jpg',
        color:'Verde',
        talla: 'S',
        material: 'Satin'

    },
    {
        nombre: 'Sudadera Niños',
        precio: 65.000,
        categoria: 'Niños',
        codigo: 'Cb123456',
        imagen: '/img/SudaderaNiños.jpg',
        color:'Rojo',
        talla: 'M',
        material: 'Piel De Durazno'

    },
    
    {
        nombre: 'Falda Niña',
        precio: 70.000,
        categoria: 'Niños',
        codigo: 'Cc123456',
        imagen: '/img/FaldaNiña.jpg',
        color:'Negro',
        talla: 'S',
        material: 'Algodon'

    },
    
    {
        nombre: 'Camiseta Niña',
        precio: 45.000,
        categoria: 'Niños',
        codigo: 'Cd123456',
        imagen: '/img/CamisetaNiña.jpg',
        color:'Rojo',
        talla: 'L',
        material: 'Tela Fria'

    },
    
    {
        nombre: 'Camiseta Niño',
        precio: 45.000,
        categoria: 'Niños',
        codigo: 'Ce123456',
        imagen: '/img/CamisetaNiño.jpg',
        color:'Verde',
        talla: 'M',
        material: 'Tela fria'

    },
    
    {
        nombre: 'Overol',
        precio: 75.000,
        categoria: 'Niños',
        codigo: 'Cf123456',
        imagen: '/img/Overol.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },
    
    {
        nombre: 'Vestido de baño',
        precio: 80.000,
        categoria: 'Niños',
        codigo: 'Cg123456',
        imagen: '/img/VestidoDeBaño.jpg',
        color:'Negro',
        talla: 'S',
        material: 'Poliester'

    },
    
    {
        nombre: 'Pantalon Niño',
        precio: 75.000,
        categoria: 'Niños',
        codigo: 'Ch123456',
        imagen: '/img/PantalonetaNiño.jpg',
        color:'Blanco',
        talla: 'L',
        material: 'Algodon'

    },
    
    {
        nombre: 'Short Niña',
        precio: 70.000,
        categoria: 'Niños',
        codigo: 'Ci123456',
        imagen: '/img/ShortNiña.jpg',
        color:'Azul',
        talla: 'S',
        material: 'Algodon'

    },
    
    {
        nombre: 'Medias',
        precio: 5.000,
        categoria: 'Niños',
        codigo: 'Cj123456',
        imagen: '/img/Medias.jpg',
        color:'Verde',
        talla: 'L',
        material: 'Algodon'

    },
    
    {
        nombre: 'Falda Deportiva',
        precio: 65.000,
        categoria: 'Deportivo',
        codigo: 'Da123456',
        imagen: '/img/FaldaDeportiva.jpg',
        color:'Negro',
        talla: 'XL',
        material: 'Nylon'

    },

    {
        nombre: 'Sosten De Deporte',
        precio: 55.000,
        categoria: 'Deportivo',
        codigo: 'Db123456',
        imagen: '/img/SostenDeDeporte.jpg',
        color:'Rojo',
        talla: 'M',
        material: 'Poliester'

    },

    {
        nombre: 'Pantaloneta Running',
        precio: 55.000,
        categoria: 'Deportivo',
        codigo: 'Dc123456',
        imagen: '/img/PantalonetaRunning.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Piel de Durazno'

    },

    {
        nombre: 'Camiseta Sin Mangas',
        precio: 60.000,
        categoria: 'Deportivo',
        codigo: 'Dd123456',
        imagen: '/img/CamisetaSinMangas.jpg',
        color:'Verde',
        talla: 'M',
        material: 'Poliester'

    },

    {
        nombre: 'Camiseta Fit',
        precio: 70.000,
        categoria: 'Deportivo',
        codigo: 'De123456',
        imagen: '/img/CamisetaFit.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Camiseta De Entrenamiento Manga Larga',
        precio: 70.000,
        categoria: 'Deportivo',
        codigo: 'Df123456',
        imagen: '/img/CamisetaDeEntrenamientoMangaLarga.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Conjunto Deportivo',
        precio: 70.000,
        categoria: 'Deportivo',
        codigo: 'Dg123456',
        imagen: '/img/ConjuntoDeportivo.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Saco Deportivo',
        precio: 70.000,
        categoria: 'Deportivo',
        codigo: 'Dh123456',
        imagen: '/img/SacoDeportivo.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Sudadera Deportiva',
        precio: 70.000,
        categoria: 'Deportivo',
        codigo: 'Di123456',
        imagen: '/img/SudaderaDeportiva.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Licra Corta',
        precio: 70.000,
        categoria: 'Deportivo',
        codigo: 'Dj123456',
        imagen: '/img/LicraCorta.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Reloj',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ea123456',
        imagen: '/img/Reloj.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Gorra',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Eb123456',
        imagen: '/img/Gorra.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Billetera',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ec123456',
        imagen: '/img/Billetera.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Aretes',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ed123456',
        imagen: '/img/Aretes.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Correa',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ee123456',
        imagen: '/img/Correa.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Bolso',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ef123456',
        imagen: '/img/Bolso.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Maletin',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Eg123456',
        imagen: '/img/Maletin.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Canguro',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Eh123456',
        imagen: '/img/Canguro.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Carriel',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ei123456',
        imagen: '/img/Carriel.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },

    {
        nombre: 'Gafas De Sol',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ej123456',
        imagen: '/img/GafasDeSol.jpg',
        color:'Azul',
        talla: 'M',
        material: 'Algodon'

    },
    
]

