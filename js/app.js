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
            'sportDetail': [UserView, SportDetailView, CategoryListView],
            'bookDetail': [UserView, BookDetailView, CategoryListView],
            'cookDetail': [UserView, CookDetailView, CategoryListView],
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
                name: 'Mestre da culin??ria',
                trophyType: 'kitchen',
                text: 'ver 10 receitas',
                points: 50,
            },
            {
                name: 'N??o sedent??rio',
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
                name: 'El??trico',
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
                description: 'Coloque a manteiga em uma tigela, adicione o a????car branco e o a????car mascavado.?? bom misturar a manteiga com o a????car, juntar os ovos e a baunilha e bater novamente para criar um creme grosso e homog??neo,  reservamos.Al??m disso, misturamos a farinha com sal e fermento em p??.Agora come??amos a adicionar a farinha e batemos pouco a pouco. Em seguida, adicione as gotas de chocolate e bata um pouco mais.Fa??a bolinhas tomando por????es com uma colher e, em seguida, arredondando com as m??os, coloque em uma assadeira forrada com papel manteiga e leve ao freezer por 1 hora.Quando faltam 10 minutos para terminar a hora, coloque o forno a uma temperatura de 180??c para aquec??-lo.Retire do congelador distribu??do em 2 tabuleiros para que eles tenham uma separa????o de cerca de 3 cm entre cada um.Leve o forno a uma temperatura de 180 ?? C ou 352 ?? F por mais ou menos de 10 a 18 minutos, tudo depende de cada forno, retire do forno deixe esfriar e aproveite. (a massa pode ser congelada para uso posterior, pode ser armazenada por at?? 1 m??s.)',
                videoLink: 'https://www.youtube.com/embed/2ubeFrWM66g',
                themes: '',
                ingridients: 'manteiga;120g/ovo;1/pepitas de chocolate; 280g/sal;meia colher de ch??/fermento em p??;1 colher de ch??/ess??ncia de baunilha;1 colher de ch??/a????car mascavado;72g/a????car normal refinado;72g/farinha de trigo;186g/amido de milho(maizena);1 colher de sopa',
                duration: '1 hora e 20 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Bolo de bolacha',
                categoryType: 'kitchen',
                description: 'Para o creme: Num tacho pequeno coloque o leite condensado, junte as gemas, e mexa at?? as misturar e  desfazer. Adicione a medida de leite e misture tudo muito bem.  Leve a lume brando, mexendo sempre, para as gemas n??o cozerem, e o creme n??o pegar no fundo. Mexa sempre at?? engrossar o creme.Retire do lume e verta para uma tigela (se ainda achar um pouco liquido e que t??m alguns grumos, n??o se preocupe porque ao arrefecer o creme vai engrossar). Mas se preferir pode usar a varinha m??gica para tornar o creme homog??neo.  Deixe arrefecer completamente o creme, para isso coloque no frigor??fico (ser??o precisas umas 4 horas). Depois de bem frio, mexa o creme com uma colher para ficar mais f??cil de espalhar. Para as natas: Para as natas ficarem mais firmes e serem mais f??ceis de bater colocar por uns bons minutos no congelador a ta??a e as varas da batedeira. Bata bem as natas at?? estarem bem firmes. A meio, junte a colher do a????car. Aque??a caf?? bem forte, e coloque numa tigela. Mas n??o demasiado quente para as bolachas n??o desfazerem. Uma temperatura que d?? para as bolachas embeberem o caf??. Vamos colocar ?? disposi????o o creme, as natas, as bolachas e o caf??. Use uma forma de aro remov??vel de cerca de 24 cm, e coloque diretamente no prato onde vai servir o bolo por forma a come??ar a fazer as camadas. Primeiro cobre-se ligeiramente o fundo com o creme. Molha-se as bolachas e disp??e-se no fundo (n??o molhar muito, mas tamb??m n??o retirar logo). Uma camada de natas, bolachas embebidas em caf?? de novo, o creme, as bolachas, e assim sucessivamente intercalando at?? todo os ingredientes estarem usados.Sirva bem frio. Deixe no frigor??fico por umas horas, ou de um dia para o outro.Desenforme retirando a forma com cuidado.Polvilhe com um pouco de bolacha ralada.',
                videoLink: 'https://www.youtube.com/embed/toD_A8_1-sc',
                themes: '',
                ingridients: 'gemas;3/leite condensado;1 lata/leite;1 ch??vena/natas para bater;1 pacote/bolacha Maria;1 pacote e meio/caf?? forte;1 tigela larga/canela em p?? e bolacha ralada;quantidade a seu gosto',
                duration: '25 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Bolo de laranja',
                categoryType: 'kitchen',
                description: 'Retire as pontas da laranja.Corte em 4 partes.Retire a casca de uma das laranjas. A outra fica com a casca.A laranja sem as pontas e com a casca pesa 167 gramas. Ainda com a parte branca e semente.E a laranja sem as pontas e sem a casca pesa 120 gramas. Ainda com a parte branca e semente.Pique as laranjas.Coloque no liquidificador.Acrescente o ??leo e os ovos.Bata por 3 minutos.Coloque em uma vasilha.Acrescente o fermento, o a????car e a farinha peneirada.Mexa bem e depois bata bem manualmente, por mais ou menos 3 minutos.Leve para assar em forma untada e polvilhada. Assadeira de mais ou menos 22 por 32 cm.Ou se quiser o bolo de buraco, coloque em assadeira de mais ou menos 22 cm por 9 de altura.Forno a 160 graus. Se for el??trico ligar em cima e embaixo.Asse por mais ou menos 35 minutos ou at?? ficar dourado.Reserve e fa??a a calda.Coloque os ingredientes na panela e mexa.Ferva por 1 minuto ou at?? dissolver o a????car.Jogue a calda quente no bolo.Deixe o bolo esfriar para servir.',
                videoLink: 'https://www.youtube.com/embed/vW9gAF-58O0',
                themes: '',
                ingridients: 'laranjas;2/??leo;1 x??cara de ch??/ovos;2/fermento;1 colher de sopa/a????car;2 x??caras de ch??/farinha em trigo;2 x??caras de ch??/suco de laranja(para a calda);2 laranjas/a????car;1 x??cara e meia de ch??',
                duration: '40 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Mousse de Chocolate',
                categoryType: 'kitchen',
                description: 'Em uma panela em banho-maria, aque??a o NESTL?? Creme de Leite.Junte o Chocolate NESTL?? CLASSIC e mexa at?? que fique uma mistura homog??nea. Reserve.Em uma panela, misture as claras e o a????car e leve ao fogo baixo, mexendo vigorosamente sem parar, por cerca de 3 minutos, tirando a panela do fogo por alguns instantes a cada minuto, continuando a mexer, para n??o cozinhar.Transfira para uma batedeira e bata por 5 minutos ou at?? dobrar de volume.Misture levemente ao creme de Chocolate.Coloque em ta??as e leve ?? geladeira por cerca de 3 horas.Decore com cerejas, chantilly ou raspas de chocolate.',
                videoLink: 'https://www.youtube.com/embed/rG1osb8STH0',
                themes: '',
                ingridients: 'NESTL?? creme de leite;1 lata/chocolate NESTL?? CLASSIC;200g/claras;3/a????car;3 colheres de sopa',
                duration: '10 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Arroz de polvo',
                categoryType: 'kitchen',
                description: 'Num tacho leve o polvo a cozer, sem ??gua e em lume baixo entre 50 minutos a 1 hora.O polvo ir?? cozer na pr??pria ??gua que vai largando.Depois de cozido corte em pedacinhos.Num tacho fa??a o refogado com o azeite, a cebola, os alhos e as folhas de louro.Deixe refogar um pouco e junte o tomate cortado em cubinhos.Deixe refogar tudo.Junte o arroz e deixe fritar um pouco.Junte o vinho, a ??gua de cozer o polvo e aproximadamente 0,5L de ??gua.Tempere com sal e pimenta.Deixe cozer 15 minutos.Adicione o polvo.Deixe ferver e junte os coentros picados.Tape, apague o lume e deixe estar assim dois minutos antes de servir.',
                videoLink: 'https://www.youtube.com/embed/JaEOkDjzxrs',
                themes: '',
                ingridients: 'Polvo;1200g/cebola picada;1/dentes de alho picados;1/folhas de louro;2/azeite;1dl/arroz;400g/molho de coentros;1/tomates pelados;2/vinho branco;1 copo/sal;quantidade a seu gosto/pimenta;quantidade a seu gosto',
                duration: '1 hora e 20 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Hamb??rguer no prato',
                categoryType: 'kitchen',
                description: ' Em um prato, coloque os p??es picados e umedece com um pouco de leite. Em uma vasilha, coloque a carne mo??da, os peda??os de p??o, o sal, a pimenta-do-reino, a cebola e misture bem. Misture com as m??os e molde os hamb??rgueres. Em uma frigideira, ao fogo baixo, coloque um pouco de ??leo e distribua os hamb??rgueres, v?? apertando para que saia o excesso de ??gua da carne. Vire para que doure dos dois lados. Depois que estiver bem douradinho ?? s?? retirar e servir.',
                videoLink: 'https://www.youtube.com/embed/h2COlbAJczU',
                themes: '',
                ingridients: 'carne mo??da bovina;500g/p??o franc??s umedecido em leite;1/Sal;quantidade a seu gosto/pimenta-do-reino;quantidade a seu gosto/cebola picadinha;quantidade a seu gosto/??leo para grelhar;1 fiozinho',
                duration: '20 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Filetes de pescada',
                categoryType: 'kitchen',
                description: 'Se usar filetes de pescada congelados, deixe-os descongelar num prato fundo cobertos com leite, 2 rodelas de lim??o e 1 colher de sopa de ??leo. Este processo torna-os mais suculentos.Seque os filetes de pescada com papel de cozinha e tempere-os com sal, pimenta e umas gotas de sumo de lim??o. Deixe repousar cerca de 30 minutos.Aque??a bem o ??leo.Passe os filetes pela farinha, sacudindo o excesso. Passe depois por ovo batido e frite-os em ??leo abundante.Quando estiverem douradinhos, coloque os filetes de pescada sobre papel absorvente. Retire-os do papel antes de servir.',
                videoLink: 'https://www.youtube.com/embed/e2RfamJB81A',
                themes: '',
                ingridients: 'filetes de pescada;500g/farinha;quantidade a seu gosto/lim??o;1/ovos;2/??leo;quantidade a seu gosto/sal;quantidade a seu gosto/pimenta;quantidade a seu gosto',
                duration: '40 minutos',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Pernas',
                categoryType: 'sport',
                description: 'Se voc?? gosta de treinar perna com intensidade, voc?? vai adorar esse treino de perna. Separei 4 exerc??cios ou seja um treino completo de pernas para voc?? fazer na sua casa.',
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
                description: 'O nosso objetivo ?? deixar sua barriga tanquinho e te fazer suar a camisa, que tal? A prof. Dani vai trabalhar os seus abdominais nesse treino gostoso de fazer. A aula ?? curta , mas intensa e ideal para voc?? que quer perder a barriga e eliminar a flacidez!',
                videoLink: 'https://www.youtube.com/embed/8cYBuKJk6Yo',
                themes: '',
                ingridients: '',
                duration: '',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Desafio de flex??es (n??vel iniciante a avan??ado)',
                categoryType: 'sport',
                description: 'A flex??o n??o ?? apenas um exerc??cio simples e eficaz para combater a gordura corporal ??? ela tamb??m ?? ??tima para manter o corpo inteiro em forma. Mas quando ouvimos a palavra ???flex??o???, geralmente s?? pensamos naquelas flex??es convencionais que todo mundo faz. Essa define os ombros, peito, abdome, costas e at?? os gl??teos, mas h?? outras varia????es desse exerc??cio que trabalham m??sculos diferentes. Mas n??o fa??a esse treino todos os dias, caso contr??rio voc?? acabar?? com um peitoral gigante, tr??ceps e ombros definidos, mas com pernas magricelas!?? importante queimar um pouco de gordura e acelerar o metabolismo antes de definir o corpo. Ent??o, inclua mais exerc??cios aer??bicos no seu treino na primeira semana. Fa??a as flex??es mais f??ceis primeiro. Quando estiver pronto para desafios maiores, aumente as repeti????es antes de fazer os exerc??cios avan??ados. Com o passar das semanas, inclua mais exerc??cios de levantamento de peso corporal no seu treino, e os alterne todos os dias. Bom treino!',
                videoLink: 'https://www.youtube.com/embed/aCziptmEyL8',
                themes: '',
                ingridients: '',
                duration: '',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Treino de gl??teos',
                categoryType: 'sport',
                description: 'Nesse V??deo o Master Coach Bruno Bartholo mostra os 20 melhores exerc??cios para os Gl??teos e como intensificar os treinos para conquistar um bumbum durinho e firme.',
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
                description: 'Nosso time ?? composto por pessoas que fazem acontecer e sabem fazer barulho.Reunimos atletas e influenciadores que se importam com qualidade, s??o transparentes, possuem grandes objetivos e, mais do que isso, entendem o caminho que ?? necess??rio percorrer para voc?? conquistar seus sonhos, porque percorrem por ele tamb??m.',
                videoLink: 'https://www.youtube.com/embed/wUBbe8Oh40Y',
                themes: '',
                ingridients: '',
                duration: '',
                storeLink: '',
                likes: 0,
                comments: []
            },
            {
                name: 'Treino para secar os bra??os',
                categoryType: 'sport',
                description: 'Que tal a??, fazermos um treino bacana para trabalharmos os bra??os nesse per??odo em casa? N??o ?? porque estamos aqui que n??o precisamos fortalecer os bra??os tamb??m n??o ??? Ent??o, fica tranquila(o) que hoje n??o vamos precisar de nada, s?? de um espacinho a?? pra voc?? sentar e trabalhar bem os bra??os!',
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
                description: 'Est??s sozinho num misterioso mundo novo, cheio de perigos ocultos. Tens poucos minutos para encontrar comida e abrigo, pois em breve anoitece e os monstros v??m ?? tua procura. O que fazer? Minecraft: Principiantes oficial pode salvar-te a vida. Aprende a localizar recursos, fazer abrigos, criar ferramentas, armas e armaduras para te protegeres dos monstros. Com dicas de peritos em Minecraft, bem como do programador Jeb e do criador Notch, este ?? o guia definitivo para sobreviveres aos teus primeiros dias no Minecraft.',
                videoLink: 'https://static.fnac-static.com/multimedia/Images/PT/NR/97/c9/0d/903575/1540-1/tsp20160819021233/Minecraft-Principiantes.jpg',
                themes: 'Livros em Portugu??s/Infantis e Juvenis/Livros de Atividades',
                ingridients: '',
                duration: '',
                storeLink: 'Wook;https://www.wook.pt/livro/minecraft-principiantes-stephanie-milton/15968271',
                likes: 0,
                comments: []
            },
            {
                name: 'O anjo ca??do',
                categoryType: 'book',
                description: 'Depois de ter sobrevivido por um triz ?? sua mais recente miss??o, Gabriel Allon, o her??i dos servi??os secretos israelitas, refugiou-se por detr??s dos muros do Vaticano, onde se encontra a restaurar uma das obras-primas de Caravaggio. Mas certa manh??, bem cedo, ?? chamado ?? Bas??lica de S??o Pedro por monsenhor Luigi Donati, o influente secret??rio privado de Sua Santidade o Papa Paulo VII. Foi encontrado o cad??ver de uma bela mulher debaixo da magn??fica ab??bada de Miguel ??ngelo. A pol??cia do Vaticano suspeita de suic??dio, mas Gabriel n??o concorda.E, segundo parece, o mesmo se passa com Donati, que receia que uma investiga????o p??blica possa vir provocar no seio da Igreja e, por isso, chama Gabriel para que ele descubra discretamente a verdade. Com uma advert??ncia: ??Regra n??mero um no Vaticano??, diz Donati. ??N??o fa??a demasiadas perguntas.??Gabriel descobre que a mulher morta desvendara um segredo perigoso, que amea??a uma organiza????o criminosa que anda a pilhar tesouros da Antiguidade e a vend??-los a quem oferecer mais dinheiro. Mas n??o se trata apenas de gan??ncia. Um agente misterioso planeia uma sabotagem que ir?? mergulhar o mundo num conflito de propor????es apocal??pticas???',
                videoLink: 'https://images.portoeditora.pt/getresourcesservlet/image?EBbDj3QnkSUjgBOkfaUbsKsSern6YbistoGkJVqXmrak2NZxyCaoIzMn76Knj790&width=300',
                themes: 'Livros em Portugu??s/Livros/Literatura/Policial e thriller',
                ingridients: '',
                duration: '',
                storeLink: 'Bertrand;https://www.bertrandeditora.pt/produtos/ficha/o-anjo-caido/15237133|Wook;https://www.wook.pt/livro/o-anjo-caido-daniel-silva/15237133',
                likes: 0,
                comments: []
            },
            {
                name: 'A Ordem',
                categoryType: 'book',
                description: 'Gabriel Allon est?? a passar umas discretas e muito necess??rias f??rias familiares em Veneza. O seu sossego ?? interrompido quando o papa Paulo VII morre de forma inesperada e o leal secret??rio pessoal do Santo Padre, o arcebispo Luigi Donati, chama Gabriel a Roma.Mil milh??es de cat??licos foram informados de que a morte do papa se ficou a dever a um ataque card??aco. Contudo, Donati tem duas boas raz??es para pensar que o Sumo Pont??fice foi assassinado. A primeira ?? o estranho desaparecimento do guarda su????o que nessa noite estava de servi??o nos aposentos pontif??cios. A segunda, a carta que o Santo Padre estava a escrever nas suas derradeiras horas de vida uma carta dirigida a Gabriel.??Enquanto pesquisava no Arquivo Secreto do Vaticano, deparei-me com um livro absolutamente not??vel?? O livro em quest??o ?? um Evangelho h?? muito suprimido, um Evangelho que questiona a precis??o da imagem dada pelo Novo Testamento de um dos acontecimentos mais prodigiosos da hist??ria da Humanidade.Por essa raz??o, a Ordem de Santa Helena uma obscura sociedade cat??lica com liga????es ?? extrema-direita europeia n??o se deter?? perante nada para evitar que caia nas m??os de Gabriel. Em paralelo, conspiram para se apropriarem do trono de S??o Pedro. E isso ?? apenas a ponta do icebergue.?? medida que, em Roma, os cardeais se v??o reunindo para o conclave, Gabriel embrenha-se numa investiga????o desesperada para reunir provas da conspira????o da Ordem e para encontrar o Evangelho h?? muito desaparecido que poderia p??r termo a dois mil anos de ??dio mortal.O ritmo e eleg??ncia de A Ordem prender?? os leitores desde o princ??pio at?? a um fim de cortar a respira????o. ?? um romance de amizade e f?? num mundo perigoso e repleto de incertezas. ?? a mais recente constata????o de que Daniel Silva ?? o melhor escritor de suspense internacional da sua gera????o.',
                videoLink: 'https://img.wook.pt/images/a-ordem-daniel-silva/MXwyNDU5MjkwN3wyMDcxNDEwMHwxNjEyMzk2ODAwMDAwfHdlYnA=/502x',
                themes: 'Livros em Portugu??s/Livros/Literatura/Policial e thriller',
                ingridients: '',
                duration: '',
                storeLink: 'Bertrand;https://www.bertrand.pt/autor/daniel-silva/29152|Wook;https://www.wook.pt/livro/a-ordem-daniel-silva/24592907|Fnac;https://www.fnac.pt/A-Ordem-Daniel-Silva/a8456203',
                likes: 0,
                comments: []
            },
            {
                name: 'Uma Marcha De Reis (Livro #2 O Anel Do Feiticeiro)',
                categoryType: 'book',
                description: 'UMA MARCHA DE REIS nos leva um passo adiante na jornada ??pica de Thor ?? sua maturidade, quando ele come??a a discernir mais sobre quem ele ??, quais s??o seus poderes, quando ele embarca para se tornar um guerreiro.',
                videoLink: 'https://m.media-amazon.com/images/I/41Tf3iQ+SmS._SY346_.jpg',
                themes: 'Fantasia/Fic????o',
                ingridients: '',
                duration: '',
                storeLink: 'Apple Books;https://books.apple.com/pt/book/uma-marcha-de-reis-livro-2-o-anel-do-feiticeiro/id894696191|Amazon;https://www.amazon.com/Marcha-Reis-Livro-Feiticeiro-Portuguese-ebook/dp/B00LE4QPUK',
                likes: 0,
                comments: []
            },
            {
                name: 'Slava, Warrior, Queen',
                categoryType: 'book',
                description: 'Ceres, de 17 anos, uma linda e pobre garota na cidade do Imp??rio de Delos, vive a dura e implac??vel vida de um plebeu.De dia, ela entrega as armas forjadas de seu pai para o campo de treinamento do pal??cio, e ?? noite ela secretamente treina com eles,anseiando por ser uma guerreira em uma terra onde as meninas s??o proibidas de lutar. Com sua venda pendente para a escravid??o, ela est?? desesperada.',
                videoLink: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1455142273l/29064737._SY475_.jpg',
                themes: 'Fantasia/Fic????o/Romance/Aventura',
                ingridients: '',
                duration: '',
                storeLink: 'Goodreads;https://www.goodreads.com/book/show/29064737-slave-warrior-queen|Amazon;https://www.amazon.com.br/Slave-Warrior-Queen-Crowns-Glory-Book/dp/1632916835',
                likes: 0,
                comments: []
            },
            {
                name: 'The Outsider',
                categoryType: 'book',
                description: 'Na pequena cidade de Flint City, no sul do Texas, Frank Peterson, de 11 anos, ?? assassinado da forma mais hedionda poss??vel e toda a investiga????o do Detetive Ralph Anderson leva a crer que foi o querido treinador do time juvenil de beisebol da cidade, Terry Maitland, quem cometeu o crime. O problema ?? que conforme a investiga????o avan??a, tanto a acusa????o, comandada pelo procurador Bill Samuels, como a defesa, comandada pelo advogado Howie Gold, chegam a um impasse: H?? testemunhas pela cidade que viram Terry na noite do crime, sujo de sangue e tentando fugir. Mas tamb??m existe um grupo de professores que viajou com Terry, um dia antes do crime, para participar de um encontro na cidade vizinha. Durante essa viagem h?? v??rias provas do t??cnico, na hora do crime, participando de um evento h?? quil??metros de onde o corpo de Frank foi encontrado. Como poderia Terry estar em dois lugares diferentes e bem distantes, ao mesmo tempo?',
                videoLink: 'https://cheirodelivro.com/wp-content/uploads/2018/05/outsider-usCAPA.png',
                themes: 'Crime/Fic????o/Horror',
                ingridients: '',
                duration: '',
                storeLink: 'Goodreads;https://www.goodreads.com/book/show/36124936-the-outsider|Amazon;https://www.amazon.com/Outsider-Novel-Stephen-King/dp/1501180983',
                likes: 0,
                comments: []
            },
            {
                name: 'Orgulho e Preconceito',
                categoryType: 'book',
                description: 'A hist??ria gira em torno de Jane,Elizabeth, MAry, Kitty e Lydia, a fam??lia vive na zona rural da Inglaterra no in??cio do s??culo XIX.A obra tem como personagem principal Elizabeth, remetendo ao per??odo em quest??o onde a fun????o da mulher era ser m??e e esposa.Ap??s conhecer os irm??os Mr.Bingley e Mr. Darcy, Mr.Bingey repentinamente some da cidade e volta apenas ap??s Elizabeth aceitar o pedido de casamento, Ao retornar ele pede para casar com Jane que aceita o pedido e vivem juntos ao final.',
                videoLink: 'https://static.fnac-static.com/multimedia/Images/PT/NR/d2/5d/0b/744914/1540-1/tsp20160814150448/Orgulho-e-Preconceito.jpg',
                themes: 'Livros em Portugu??s/Literatura/Romance',
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