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
            'cookDetail': [CookDetailView, CategoryListView, UserView],
            'map': [UserView, CategoryListView]
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
                password: 'admin',
                type: 'admin',
                kitchenPoints: 1000,
                sportPoints: 1000,
                bookPoints: 1000,

            },
            {
                id: 1,
                username: 'user1',
                password: 'pass1',
                type: 'user',
                kitchenPoints: 65,
                sportPoints: 65,
                bookPoints: 65,

            },
            {
                id: 2,
                username: 'user2',
                password: 'pass2',
                type: 'user',
                kitchenPoints: 0,
                sportPoints: 0,
                bookPoints: 0,

            }
        ];


        const trophies = [
            {
                name: 'Aprendiz',
                trophyType: 'kitchen',
                text: 'ver 2 receitas',
                points: 10,
            },
            {
                name: 'Gosto na cozinha',
                trophyType: 'kitchen',
                text: 'ver 4 receitas',
                points: 20,
            },
            {
                name: 'Mestre da culinária',
                trophyType: 'kitchen',
                text: 'ver 10 receitas',
                points: 50,
            },
            {
                name: 'Não sedentário',
                trophyType: 'sport',
                text: 'ver 2 desportos',
                points: 10,
            },
            {
                name: 'Inquieto',
                trophyType: 'sport',
                text: 'ver 4 desportos',
                points: 20,
            },
            {
                name: 'Elétrico',
                trophyType: 'sport',
                text: 'ver 10 desportos',
                points: 50,
            },
            {
                name: 'Curioso',
                trophyType: 'book',
                text: 'ver 2 livros',
                points: 10,
            },
            {
                name: 'Aprendedor',
                trophyType: 'book',
                text: 'ver 4 livros',
                points: 20,
            },
            {
                name: 'Estudioso',
                trophyType: 'book',
                text: 'ver 5 livros',
                points: 50,
            }
        ];




        const categorys = [
            {
                name: 'Bolachas Chips de Chocolate',
                categoryType: 'kitchen',
                description: 'Coloque a manteiga em uma tigela, adicione o açúcar branco e o açúcar mascavado.É bom misturar a manteiga com o açúcar, juntar os ovos e a baunilha e bater novamente para criar um creme grosso e homogêneo,  reservamos.Além disso, misturamos a farinha com sal e fermento em pó.Agora começamos a adicionar a farinha e batemos pouco a pouco. Em seguida, adicione as gotas de chocolate e bata um pouco mais.Faça bolinhas tomando porções com uma colher e, em seguida, arredondando com as mãos, coloque em uma assadeira forrada com papel manteiga e leve ao freezer por 1 hora.Quando faltam 10 minutos para terminar a hora, coloque o forno a uma temperatura de 180ºc para aquecê-lo.Retire do congelador distribuído em 2 tabuleiros para que eles tenham uma separação de cerca de 3 cm entre cada um.Leve o forno a uma temperatura de 180 º C ou 352 º F por mais ou menos de 10 a 18 minutos, tudo depende de cada forno, retire do forno deixe esfriar e aproveite. (a massa pode ser congelada para uso posterior, pode ser armazenada por até 1 mês.)',
                videoLink: 'https://www.youtube.com/embed/2ubeFrWM66g',
                themes: '',
                ingridients: 'manteiga;120g/ovo;1/pepitas de chocolate; 280g/sal;meia colher de chá/fermento em pó;1 colher de chá/essência de baunilha;1 colher de chá/açúcar mascavado;72g/açúcar normal refinado;72g/farinha de trigo;186g/amido de milho(maizena);1 colher de sopa',
                duration: '1 hora e 20 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Bolo de bolacha',
                categoryType: 'kitchen',
                description: 'Para o creme: Num tacho pequeno coloque o leite condensado, junte as gemas, e mexa até as misturar e  desfazer. Adicione a medida de leite e misture tudo muito bem.  Leve a lume brando, mexendo sempre, para as gemas não cozerem, e o creme não pegar no fundo. Mexa sempre até engrossar o creme.Retire do lume e verta para uma tigela (se ainda achar um pouco liquido e que têm alguns grumos, não se preocupe porque ao arrefecer o creme vai engrossar). Mas se preferir pode usar a varinha mágica para tornar o creme homogéneo.  Deixe arrefecer completamente o creme, para isso coloque no frigorífico (serão precisas umas 4 horas). Depois de bem frio, mexa o creme com uma colher para ficar mais fácil de espalhar. Para as natas: Para as natas ficarem mais firmes e serem mais fáceis de bater colocar por uns bons minutos no congelador a taça e as varas da batedeira. Bata bem as natas até estarem bem firmes. A meio, junte a colher do açúcar. Aqueça café bem forte, e coloque numa tigela. Mas não demasiado quente para as bolachas não desfazerem. Uma temperatura que dê para as bolachas embeberem o café. Vamos colocar á disposição o creme, as natas, as bolachas e o café. Use uma forma de aro removível de cerca de 24 cm, e coloque diretamente no prato onde vai servir o bolo por forma a começar a fazer as camadas. Primeiro cobre-se ligeiramente o fundo com o creme. Molha-se as bolachas e dispõe-se no fundo (não molhar muito, mas também não retirar logo). Uma camada de natas, bolachas embebidas em café de novo, o creme, as bolachas, e assim sucessivamente intercalando até todo os ingredientes estarem usados.Sirva bem frio. Deixe no frigorífico por umas horas, ou de um dia para o outro.Desenforme retirando a forma com cuidado.Polvilhe com um pouco de bolacha ralada.',
                videoLink: 'https://www.youtube.com/embed/toD_A8_1-sc',
                themes: '',
                ingridients: 'gemas;3/leite condensado;1 lata/leite;1 chávena/natas para bater;1 pacote/bolacha Maria;1 pacote e meio/café forte;1 tigela larga/canela em pó e bolacha ralada;quantidade a seu gosto',
                duration: '25 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Bolo de laranja',
                categoryType: 'kitchen',
                description: 'Retire as pontas da laranja.Corte em 4 partes.Retire a casca de uma das laranjas. A outra fica com a casca.A laranja sem as pontas e com a casca pesa 167 gramas. Ainda com a parte branca e semente.E a laranja sem as pontas e sem a casca pesa 120 gramas. Ainda com a parte branca e semente.Pique as laranjas.Coloque no liquidificador.Acrescente o óleo e os ovos.Bata por 3 minutos.Coloque em uma vasilha.Acrescente o fermento, o açúcar e a farinha peneirada.Mexa bem e depois bata bem manualmente, por mais ou menos 3 minutos.Leve para assar em forma untada e polvilhada. Assadeira de mais ou menos 22 por 32 cm.Ou se quiser o bolo de buraco, coloque em assadeira de mais ou menos 22 cm por 9 de altura.Forno a 160 graus. Se for elétrico ligar em cima e embaixo.Asse por mais ou menos 35 minutos ou até ficar dourado.Reserve e faça a calda.Coloque os ingredientes na panela e mexa.Ferva por 1 minuto ou até dissolver o açúcar.Jogue a calda quente no bolo.Deixe o bolo esfriar para servir.',
                videoLink: 'https://www.youtube.com/embed/vW9gAF-58O0',
                themes: '',
                ingridients: 'laranjas;2/óleo;1 xícara de chá/ovos;2/fermento;1 colher de sopa/açúcar;2 xícaras de chá/farinha em trigo;2 xícaras de chá/suco de laranja(para a calda);2 laranjas/açúcar;1 xícara e meia de chá',
                duration: '40 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Mousse de Chocolate',
                categoryType: 'kitchen',
                description: 'Em uma panela em banho-maria, aqueça o NESTLÉ Creme de Leite.Junte o Chocolate NESTLÉ CLASSIC e mexa até que fique uma mistura homogênea. Reserve.Em uma panela, misture as claras e o açúcar e leve ao fogo baixo, mexendo vigorosamente sem parar, por cerca de 3 minutos, tirando a panela do fogo por alguns instantes a cada minuto, continuando a mexer, para não cozinhar.Transfira para uma batedeira e bata por 5 minutos ou até dobrar de volume.Misture levemente ao creme de Chocolate.Coloque em taças e leve à geladeira por cerca de 3 horas.Decore com cerejas, chantilly ou raspas de chocolate.',
                videoLink: 'https://www.youtube.com/embed/rG1osb8STH0',
                themes: '',
                ingridients: 'NESTLÉ creme de leite;1 lata/chocolate NESTLÉ CLASSIC;200g/claras;3/açúcar;3 colheres de sopa',
                duration: '10 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Arroz de polvo',
                categoryType: 'kitchen',
                description: 'Num tacho leve o polvo a cozer, sem água e em lume baixo entre 50 minutos a 1 hora.O polvo irá cozer na própria água que vai largando.Depois de cozido corte em pedacinhos.Num tacho faça o refogado com o azeite, a cebola, os alhos e as folhas de louro.Deixe refogar um pouco e junte o tomate cortado em cubinhos.Deixe refogar tudo.Junte o arroz e deixe fritar um pouco.Junte o vinho, a água de cozer o polvo e aproximadamente 0,5L de água.Tempere com sal e pimenta.Deixe cozer 15 minutos.Adicione o polvo.Deixe ferver e junte os coentros picados.Tape, apague o lume e deixe estar assim dois minutos antes de servir.',
                videoLink: 'https://www.youtube.com/embed/JaEOkDjzxrs',
                themes: '',
                ingridients: 'Polvo;1200g/cebola picada;1/dentes de alho picados;1/folhas de louro;2/azeite;1dl/arroz;400g/molho de coentros;1/tomates pelados;2/vinho branco;1 copo/sal;quantidade a seu gosto/pimenta;quantidade a seu gosto',
                duration: '1 hora e 20 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Hambúrguer no prato',
                categoryType: 'kitchen',
                description: ' Em um prato, coloque os pães picados e umedece com um pouco de leite. Em uma vasilha, coloque a carne moída, os pedaços de pão, o sal, a pimenta-do-reino, a cebola e misture bem. Misture com as mãos e molde os hambúrgueres. Em uma frigideira, ao fogo baixo, coloque um pouco de óleo e distribua os hambúrgueres, vá apertando para que saia o excesso de água da carne. Vire para que doure dos dois lados. Depois que estiver bem douradinho é só retirar e servir.',
                videoLink: 'https://www.youtube.com/embed/h2COlbAJczU',
                themes: '',
                ingridients: 'carne moída bovina;500g/pão francês umedecido em leite;1/Sal;quantidade a seu gosto/pimenta-do-reino;quantidade a seu gosto/cebola picadinha;quantidade a seu gosto/óleo para grelhar;1 fiozinho',
                duration: '20 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Filetes de pescada',
                categoryType: 'kitchen',
                description: 'Se usar filetes de pescada congelados, deixe-os descongelar num prato fundo cobertos com leite, 2 rodelas de limão e 1 colher de sopa de óleo. Este processo torna-os mais suculentos.Seque os filetes de pescada com papel de cozinha e tempere-os com sal, pimenta e umas gotas de sumo de limão. Deixe repousar cerca de 30 minutos.Aqueça bem o óleo.Passe os filetes pela farinha, sacudindo o excesso. Passe depois por ovo batido e frite-os em óleo abundante.Quando estiverem douradinhos, coloque os filetes de pescada sobre papel absorvente. Retire-os do papel antes de servir.',
                videoLink: 'https://www.youtube.com/embed/e2RfamJB81A',
                themes: '',
                ingridients: 'filetes de pescada;500g/farinha;quantidade a seu gosto/limão;1/ovos;2/óleo;quantidade a seu gosto/sal;quantidade a seu gosto/pimenta;quantidade a seu gosto',
                duration: '40 minutos',
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
                name: 'Treino para perder barriga',
                categoryType: 'sport',
                description: 'O nosso objetivo é deixar sua barriga tanquinho e te fazer suar a camisa, que tal? A prof. Dani vai trabalhar os seus abdominais nesse treino gostoso de fazer. A aula é curta , mas intensa e ideal para você que quer perder a barriga e eliminar a flacidez!',
                videoLink: 'https://www.youtube.com/embed/8cYBuKJk6Yo',
                themes: '',
                ingridients: '',
                duration: '',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Desafio de flexões (nível iniciante a avançado)',
                categoryType: 'sport',
                description: 'A flexão não é apenas um exercício simples e eficaz para combater a gordura corporal – ela também é ótima para manter o corpo inteiro em forma. Mas quando ouvimos a palavra “flexão”, geralmente só pensamos naquelas flexões convencionais que todo mundo faz. Essa define os ombros, peito, abdome, costas e até os glúteos, mas há outras variações desse exercício que trabalham músculos diferentes. Mas não faça esse treino todos os dias, caso contrário você acabará com um peitoral gigante, tríceps e ombros definidos, mas com pernas magricelas!É importante queimar um pouco de gordura e acelerar o metabolismo antes de definir o corpo. Então, inclua mais exercícios aeróbicos no seu treino na primeira semana. Faça as flexões mais fáceis primeiro. Quando estiver pronto para desafios maiores, aumente as repetições antes de fazer os exercícios avançados. Com o passar das semanas, inclua mais exercícios de levantamento de peso corporal no seu treino, e os alterne todos os dias. Bom treino!',
                videoLink: 'https://www.youtube.com/embed/aCziptmEyL8',
                themes: '',
                ingridients: '',
                duration: '',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Treino de glúteos',
                categoryType: 'sport',
                description: 'Nesse Vídeo o Master Coach Bruno Bartholo mostra os 20 melhores exercícios para os Glúteos e como intensificar os treinos para conquistar um bumbum durinho e firme.',
                videoLink: 'https://www.youtube.com/embed/oQtIY4gGD3w',
                themes: '',
                ingridients: '',
                duration: '',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Treino de costas',
                categoryType: 'sport',
                description: 'Nosso time é composto por pessoas que fazem acontecer e sabem fazer barulho.Reunimos atletas e influenciadores que se importam com qualidade, são transparentes, possuem grandes objetivos e, mais do que isso, entendem o caminho que é necessário percorrer para você conquistar seus sonhos, porque percorrem por ele também.',
                videoLink: 'https://www.youtube.com/embed/wUBbe8Oh40Y',
                themes: '',
                ingridients: '',
                duration: '',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Treino para secar os braços',
                categoryType: 'sport',
                description: 'Que tal aí, fazermos um treino bacana para trabalharmos os braços nesse período em casa? Não é porque estamos aqui que não precisamos fortalecer os braços também não é? Então, fica tranquila(o) que hoje não vamos precisar de nada, só de um espacinho aí pra você sentar e trabalhar bem os braços!',
                videoLink: 'https://www.youtube.com/embed/kJfXMTgpEeQ',
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
            },
            {
                name: 'O anjo caído',
                categoryType: 'book',
                description: 'Depois de ter sobrevivido por um triz à sua mais recente missão, Gabriel Allon, o herói dos serviços secretos israelitas, refugiou-se por detrás dos muros do Vaticano, onde se encontra a restaurar uma das obras-primas de Caravaggio. Mas certa manhã, bem cedo, é chamado à Basílica de São Pedro por monsenhor Luigi Donati, o influente secretário privado de Sua Santidade o Papa Paulo VII. Foi encontrado o cadáver de uma bela mulher debaixo da magnífica abóbada de Miguel Ângelo. A polícia do Vaticano suspeita de suicídio, mas Gabriel não concorda.E, segundo parece, o mesmo se passa com Donati, que receia que uma investigação pública possa vir provocar no seio da Igreja e, por isso, chama Gabriel para que ele descubra discretamente a verdade. Com uma advertência: «Regra número um no Vaticano», diz Donati. «Não faça demasiadas perguntas.»Gabriel descobre que a mulher morta desvendara um segredo perigoso, que ameaça uma organização criminosa que anda a pilhar tesouros da Antiguidade e a vendê-los a quem oferecer mais dinheiro. Mas não se trata apenas de ganância. Um agente misterioso planeia uma sabotagem que irá mergulhar o mundo num conflito de proporções apocalípticas…',
                videoLink: 'https://images.portoeditora.pt/getresourcesservlet/image?EBbDj3QnkSUjgBOkfaUbsKsSern6YbistoGkJVqXmrak2NZxyCaoIzMn76Knj790&width=300',
                themes: 'Livros em Português/Livros/Literatura/Policial e thriller',
                ingridients: '',
                duration: '',
                storeLink: 'Bertrand;https://www.bertrandeditora.pt/produtos/ficha/o-anjo-caido/15237133|Wook;https://www.wook.pt/livro/o-anjo-caido-daniel-silva/15237133',
                likes: 0,
                comments: []
            },
            {
                name: 'A Ordem',
                categoryType: 'book',
                description: 'Gabriel Allon está a passar umas discretas e muito necessárias férias familiares em Veneza. O seu sossego é interrompido quando o papa Paulo VII morre de forma inesperada e o leal secretário pessoal do Santo Padre, o arcebispo Luigi Donati, chama Gabriel a Roma.Mil milhões de católicos foram informados de que a morte do papa se ficou a dever a um ataque cardíaco. Contudo, Donati tem duas boas razões para pensar que o Sumo Pontífice foi assassinado. A primeira é o estranho desaparecimento do guarda suíço que nessa noite estava de serviço nos aposentos pontifícios. A segunda, a carta que o Santo Padre estava a escrever nas suas derradeiras horas de vida uma carta dirigida a Gabriel.«Enquanto pesquisava no Arquivo Secreto do Vaticano, deparei-me com um livro absolutamente notável» O livro em questão é um Evangelho há muito suprimido, um Evangelho que questiona a precisão da imagem dada pelo Novo Testamento de um dos acontecimentos mais prodigiosos da história da Humanidade.Por essa razão, a Ordem de Santa Helena uma obscura sociedade católica com ligações à extrema-direita europeia não se deterá perante nada para evitar que caia nas mãos de Gabriel. Em paralelo, conspiram para se apropriarem do trono de São Pedro. E isso é apenas a ponta do icebergue.À medida que, em Roma, os cardeais se vão reunindo para o conclave, Gabriel embrenha-se numa investigação desesperada para reunir provas da conspiração da Ordem e para encontrar o Evangelho há muito desaparecido que poderia pôr termo a dois mil anos de ódio mortal.O ritmo e elegância de A Ordem prenderá os leitores desde o princípio até a um fim de cortar a respiração. É um romance de amizade e fé num mundo perigoso e repleto de incertezas. É a mais recente constatação de que Daniel Silva é o melhor escritor de suspense internacional da sua geração.',
                videoLink: 'https://img.wook.pt/images/a-ordem-daniel-silva/MXwyNDU5MjkwN3wyMDcxNDEwMHwxNjEyMzk2ODAwMDAwfHdlYnA=/502x',
                themes: 'Livros em Português/Livros/Literatura/Policial e thriller',
                ingridients: '',
                duration: '',
                storeLink: 'Bertrand;https://www.bertrand.pt/autor/daniel-silva/29152|Wook;https://www.wook.pt/livro/a-ordem-daniel-silva/24592907|Fnac;https://www.fnac.pt/A-Ordem-Daniel-Silva/a8456203',
                likes: 0,
                comments: []
            },
            {
                name: 'Uma Marcha De Reis (Livro #2 O Anel Do Feiticeiro)',
                categoryType: 'book',
                description: 'UMA MARCHA DE REIS nos leva um passo adiante na jornada épica de Thor à sua maturidade, quando ele começa a discernir mais sobre quem ele é, quais são seus poderes, quando ele embarca para se tornar um guerreiro.',
                videoLink: 'https://m.media-amazon.com/images/I/41Tf3iQ+SmS._SY346_.jpg',
                themes: 'Fantasia/Ficção',
                ingridients: '',
                duration: '',
                storeLink: 'Apple Books;https://books.apple.com/pt/book/uma-marcha-de-reis-livro-2-o-anel-do-feiticeiro/id894696191|Amazon;https://www.amazon.com/Marcha-Reis-Livro-Feiticeiro-Portuguese-ebook/dp/B00LE4QPUK',
                likes: 0,
                comments: []
            },
            {
                name: 'Slava, Warrior, Queen',
                categoryType: 'book',
                description: 'Ceres, de 17 anos, uma linda e pobre garota na cidade do Império de Delos, vive a dura e implacável vida de um plebeu.De dia, ela entrega as armas forjadas de seu pai para o campo de treinamento do palácio, e à noite ela secretamente treina com eles,anseiando por ser uma guerreira em uma terra onde as meninas são proibidas de lutar. Com sua venda pendente para a escravidão, ela está desesperada.',
                videoLink: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1455142273l/29064737._SY475_.jpg',
                themes: 'Fantasia/Ficção/Romance/Aventura',
                ingridients: '',
                duration: '',
                storeLink: 'Goodreads;https://www.goodreads.com/book/show/29064737-slave-warrior-queen|Amazon;https://www.amazon.com.br/Slave-Warrior-Queen-Crowns-Glory-Book/dp/1632916835',
                likes: 0,
                comments: []
            },
            {
                name: 'The Outsider',
                categoryType: 'book',
                description: 'Na pequena cidade de Flint City, no sul do Texas, Frank Peterson, de 11 anos, é assassinado da forma mais hedionda possível e toda a investigação do Detetive Ralph Anderson leva a crer que foi o querido treinador do time juvenil de beisebol da cidade, Terry Maitland, quem cometeu o crime. O problema é que conforme a investigação avança, tanto a acusação, comandada pelo procurador Bill Samuels, como a defesa, comandada pelo advogado Howie Gold, chegam a um impasse: Há testemunhas pela cidade que viram Terry na noite do crime, sujo de sangue e tentando fugir. Mas também existe um grupo de professores que viajou com Terry, um dia antes do crime, para participar de um encontro na cidade vizinha. Durante essa viagem há várias provas do técnico, na hora do crime, participando de um evento há quilômetros de onde o corpo de Frank foi encontrado. Como poderia Terry estar em dois lugares diferentes e bem distantes, ao mesmo tempo?',
                videoLink: 'https://cheirodelivro.com/wp-content/uploads/2018/05/outsider-usCAPA.png',
                themes: 'Crime/Ficção/Horror',
                ingridients: '',
                duration: '',
                storeLink: 'Goodreads;https://www.goodreads.com/book/show/36124936-the-outsider|Amazon;https://www.amazon.com/Outsider-Novel-Stephen-King/dp/1501180983',
                likes: 0,
                comments: []
            },
            {
                name: 'Orgulho e Preconceito',
                categoryType: 'book',
                description: 'A história gira em torno de Jane,Elizabeth, MAry, Kitty e Lydia, a família vive na zona rural da Inglaterra no início do século XIX.A obra tem como personagem principal Elizabeth, remetendo ao período em questão onde a função da mulher era ser mãe e esposa.Após conhecer os irmãos Mr.Bingley e Mr. Darcy, Mr.Bingey repentinamente some da cidade e volta apenas após Elizabeth aceitar o pedido de casamento, Ao retornar ele pede para casar com Jane que aceita o pedido e vivem juntos ao final.',
                videoLink: 'https://static.fnac-static.com/multimedia/Images/PT/NR/d2/5d/0b/744914/1540-1/tsp20160814150448/Orgulho-e-Preconceito.jpg',
                themes: 'Livros em Português/Literatura/Romance',
                ingridients: '',
                duration: '',
                storeLink: 'Wook;https://www.wook.pt/livro/orgulho-e-preconceito-jane-austen/65436|Fnac;https://www.fnac.pt/Orgulho-e-Preconceito-Jane-Austen/a750122',
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