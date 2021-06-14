import UserView from './views/UserView.js'
import ProfileView from './views/ProfileView.js'
import InitialPageView from './views/InitialPageView.js'
import CategoryListView from './views/CategoryListView.js'
import SportDetailView from './views/SportDetailView.js'
import BookDetailView from './views/BookDetailView.js'
import CookDetailView from './views/CookDetailView.js'

class App {
    constructor() {
        this.routes = {
            '': [UserView],
            'register': [UserView],
            'login': [UserView],
            'profile': [UserView, ProfileView, CategoryListView],
            'initialPage': [UserView, InitialPageView, CategoryListView],
            'categoryList': [UserView, CategoryListView],
            'sportDetail': [SportDetailView, CategoryListView, UserView],
            'bookDetail': [BookDetailView, CategoryListView, UserView],
            'cookDetail': [CookDetailView, CategoryListView, UserView]
        };

        // import dummy data for testing purposes
        this.#importDataFixtures();

        // instantiate the views mapped in the routes object
        this.#instantiateViews();
    }

    #importDataFixtures() {
        const users = [
            {
                id: 0,
                username: 'admin',
                email: 'admin@gmail.com',
                password: 'admin',
                type: 'admin',
                kitchenPoints: 0,
                sportPoints: 0,
                bookPoints: 0,

            },
            {
                id: 1,
                username: 'user1',
                email: 'doidinhos@gmail.com',
                password: 'pass1',
                type: 'user',
                kitchenPoints: 65,
                sportPoints: 65,
                bookPoints: 65,

            },
            {
                id: 2,
                username: 'user2',
                email: 'gostoEtomo@gmail.com',
                password: 'pass2',
                type: 'user',
                kitchenPoints: 0,
                sportPoints: 0,
                bookPoints: 0,

            }
        ];


        const trophies = [
            {
                name: 'Aprendiz Comilão',
                trophyType: 'kitchen',
                text: 'ver 2 receitas',
                points: 10,
            },
            {
                name: 'Não sdentário',
                trophyType: 'sport',
                text: 'ver 2 desportos',
                points: 10,
            },
            {
                name: 'Jovem aprendedor',
                trophyType: 'book',
                text: 'ver 2 livros',
                points: 10,
            }
        ];




        const categorys = [
            {
                name: 'Tosta',
                categoryType: 'kitchen',
                description: 'por o queijo e o fiambre no pao po-lo a aquecer e ja esta pronto para comer',
                videoLink: 'https://www.youtube.com/embed/dAPUPgC3h-w',
                themes: '',
                ingridients: 'pao;1/queijo;1 fatia/fiambre;1 fatia',
                duration: '5 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Torrada',
                categoryType: 'kitchen',
                description: 'e a vida meu puto',
                videoLink: 'https://www.youtube.com/embed/1yhP1yvOPbs',
                themes: '',
                ingridients: 'pao;1/queijo;1 fatia/fiambre;1 fatia',
                duration: '5 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Pernas',
                categoryType: 'sport',
                description: 'Se você gosta de treinar perna com intensidade, você vai adorar esse treino de perna. Separei 4 exercícios ou seja um treino completo de pernas para você fazer na sua casa.',
                videoLink: 'https://www.youtube.com/embed/txJ1HR9H398',
                themes: '',
                ingridients: '',
                duration: '',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Minecraft: Principiantes',
                categoryType: 'book',
                description: 'Estás sozinho num misterioso mundo novo, cheio de perigos ocultos. Tens poucos minutos para encontrar comida e abrigo, pois em breve anoitece e os monstros vêm à tua procura. O que fazer? Minecraft: Principiantes oficial pode salvar-te a vida. Aprende a localizar recursos, fazer abrigos, criar ferramentas, armas e armaduras para te protegeres dos monstros. Com dicas de peritos em Minecraft, bem como do programador Jeb e do criador Notch, este é o guia definitivo para sobreviveres aos teus primeiros dias no Minecraft.',
                videoLink: 'https://static.fnac-static.com/multimedia/Images/PT/NR/97/c9/0d/903575/1540-1/tsp20160819021233/Minecraft-Principiantes.jpg',
                themes: 'Livros em Português/Infantis e Juvenis/Livros de Atividades',
                ingridients: '',
                duration: '',
                storeLink: 'Wook;https://www.wook.pt/livro/minecraft-principiantes-stephanie-milton/15968271',
                likes: 0,
                comments: []
            }
        ];
        // Load the fixtures in case there is no data in the local storage 
        if (!localStorage.users) {
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('trophies', JSON.stringify(trophies));
            localStorage.setItem('categorys', JSON.stringify(categorys));
        }
    }

    #instantiateViews() {
        const path = window.location.pathname
        const file = path.substr(path.lastIndexOf('/') + 1);
        const route = file.split('.')[0];
        const views = this.#getViews(route);
        for (const view of views) {
            new view();
        }
    }

    #getViews(route) {
        return typeof this.routes[route] === 'undefined' ? [] : this.routes[route];
    }


}

new App();