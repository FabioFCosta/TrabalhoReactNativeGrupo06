-- DDL
CREATE TABLE public.categoria (
	id_categoria serial4 NOT NULL,
	nome_categoria varchar(255) NULL,
	imagem varchar(100) NULL,
	CONSTRAINT categoria_pkey PRIMARY KEY (id_categoria)
);


CREATE TABLE public.estoque (
	id_estoque serial4 NOT NULL,
	id_produto int8 NULL,
	quantidade int8 NULL,
	CONSTRAINT estoque_pkey PRIMARY KEY (id_estoque)
);


CREATE TABLE public.fornecedor (
	id_fornecedor serial4 NOT NULL,
	tipo varchar(255) NULL,
	razao_social varchar(255) NULL,
	cnpj varchar(14) NOT NULL,
	uf varchar(2) NULL,
	telefone varchar(100) NULL,
	email varchar(255) NULL,
	nome_fantasia varchar(255) NULL,
	status_situacao varchar(100) NULL,
	bairro varchar(255) NULL,
	logradouro varchar(255) NULL,
	numero int8 NULL,
	complemento varchar(100) NULL,
	cep varchar(10) NULL,
	municipio varchar(255) NULL,
	data_abertura timestamp NULL,
	CONSTRAINT fornecedor_pkey PRIMARY KEY (id_fornecedor)
);

CREATE TABLE public.perfil (
	id_perfil serial4 NOT NULL,
	nome_perfil varchar(100) NULL,
	CONSTRAINT perfil_pkey PRIMARY KEY (id_perfil)
);

CREATE TABLE public.usuario (
	id_usuario serial4 NOT NULL,
	nome_usuario varchar(100) NULL,
	email varchar(100) NULL,
	senha varchar(255) NULL,
	foto_perfil varchar(255) NULL,
	CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario)
);

CREATE TABLE public.produto (
	id_produto serial4 NOT NULL,
	sku varchar(255) NULL,
	nome_produto varchar(255) NULL,
	preco_produto numeric(21,2) NULL,
	descricao_produto varchar(255) NULL,
	id_fornecedor int8 NOT NULL,
	id_categoria int8 NOT NULL,
	imagem_produto varchar(255) NULL,
	CONSTRAINT produto_pkey PRIMARY KEY (id_produto),
	CONSTRAINT produto_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categoria(id_categoria),
	CONSTRAINT produto_id_fornecedor_fkey FOREIGN KEY (id_fornecedor) REFERENCES public.fornecedor(id_fornecedor)
);


CREATE TABLE public.usuario_rel_perfil (
	id_usuario int8 NULL,
	id_perfil int8 NULL,
	CONSTRAINT usuario_rel_perfil_id_perfil_fkey FOREIGN KEY (id_perfil) REFERENCES public.perfil(id_perfil),
	CONSTRAINT usuario_rel_perfil_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario)
);

-- DML
INSERT INTO public.categoria (NOME_CATEGORIA,IMAGEM) VALUES
	 ('City Bilding','https://cf.geekdo-images.com/z6HeK7YtEFSxtG1WAp0bjw__imagepage/img/tUD9w0-rVS2LM47jvnRwJN8Et7E=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3697699.jpg'),
	 ('Civil War','https://cf.geekdo-images.com/BL_0iMzl9TpWWI6WNNxQ2g__imagepage/img/m7QuWUHzatnKMjjzENV8roaDMLc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3900820.png'),
	 ('Fantasy','https://cf.geekdo-images.com/O46eJo-YYM5QyK415rtGKg__imagepage/img/LUQyN8Pxj__SRXf2GVJvLrolvz8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6570838.png'),
     	 ('Humor','https://cf.geekdo-images.com/LkvIaYn1UJg3vZSiEQp9xQ__imagepage/img/_JZCLFuOfv80V0ZYbW_Oms0fUo4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6570841.png'),
	 ('Mythology','https://cf.geekdo-images.com/yAqp7RfIEvNGbjfhfgA-WQ__imagepage/img/jcX6UHcBD_Pt85g-VehN0zJetmM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6570849.png'),
	 ('Science Fiction','https://cf.geekdo-images.com/gq4oTgA-Tb_rbGj6HgyhPQ__imagepage/img/95LDRsAkLnV8aFyay0Pj7gaYbnQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3901229.png');

INSERT INTO public.estoque (ID_PRODUTO,QUANTIDADE) VALUES
	 (1,10),
	 (3,30);

INSERT INTO public.fornecedor (TIPO,RAZAO_SOCIAL,CNPJ,UF,TELEFONE,EMAIL,NOME_FANTASIA,STATUS_SITUACAO,BAIRRO,LOGRADOURO,NUMERO,COMPLEMENTO,CEP,MUNICIPIO,DATA_ABERTURA) VALUES
	 ('Matriz','Primeiro Fornecedor','01111222000100','RJ','2125874125','email@mail.com','Nome Fantasia','Ativo','Centro','Rua Principal',10,'','25600000','Petrópolis','2022-05-27 09:23:36.461');

INSERT INTO public.perfil (NOME_PERFIL) VALUES
	 ('ROLE_USER');

INSERT INTO public.produto (SKU,NOME_PRODUTO,PRECO_PRODUTO,DESCRICAO_PRODUTO,ID_FORNECEDOR,ID_CATEGORIA,IMAGEM_PRODUTO) VALUES
     ('WD1', '7 Wonders Duel', 141.00, 'De muitas maneiras, 7 Wonders Duel se assemelha ao seu jogo pai 7 Wonders.', 1, 1, 'https://cf.geekdo-images.com/zdagMskTF7wJBPjX74XsRw__imagepage/img/HdJ4d4O1P89V4UIhZnL3zoYnjow=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2576399.jpg' ),
     ('AB1', 'Above and Below', 260.00, 'Construa sua aldeia recém-fundada acima enquanto explora as cavernas e histórias abaixo.', 1, 1, 'https://cf.geekdo-images.com/U0wpvRmBe65e4vwGf0Jbpg__imagepage/img/ClaTwQwPLZPNAP_QRKKP_iY75-Y=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2398773.jpg'),
     ('OM1', 'On Mars', 560.00, 'Após o sucesso das missões de rover não tripulados, as Nações Unidas estabeleceram em Marte.', 1, 1, 'https://cf.geekdo-images.com/qzT7-GxSbW-200AwLIoXWw__imagepage/img/3d9Nta2Pv2HEtO8rJ3cbWdST1QA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5993103.png'),
     ('E1', 'Everdell', 325.00, 'Dentro do encantador vale de Everdell, sob os galhos de árvores altas, entre riachos sinuosos.', 1, 1, 'https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__imagepage/img/ijYTk6KGtxLRdIvLsGar13ZHs4c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3918905.png'),
     ('LH1', 'Le Havre', 300.00, 'Le Havre faz parte da série de jogos de colheita de Uwe Rosenberg.', 1, 1, 'https://cf.geekdo-images.com/O8VV5J8Kr6P5DhPjLOH1zg__imagepage/img/6oNxQgLu-VQeQPInJvTkKPYa5gQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1418324.jpg'),
     ('RFG2', 'Roll for the Galaxy', 700.00, 'Utilize sua população de dados para desenvolver tecnologias, estabelecer mundos e enviar mercadorias', 1, 2, 'https://cf.geekdo-images.com/nhoyoLpYPC2b3UiJ5kJ0yg__imagepage/img/BzS2PYOAIB4Ei-FHDyPm7Q0PoyU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1473629.jpg'),
     ('PP2', 'Pax Porfiriana', 500.00, 'Como um rico empresário nas turbulentas fronteiras pré-revolucionárias dos EUA e do México.', 1, 2, 'https://cf.geekdo-images.com/eSfBPvoLiAKvCMBzovAnIA__imagepage/img/dpov-SoqO3ixDeeectKfQmEqsh8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1395308.jpg'),
     ('GCW2', 'Goblin Civil War', 2000.00, 'Uma campanha de fantasia inspirada nos acontecimentos históricos da Guerra Civil Espanhola', 1, 2, 'https://cf.geekdo-images.com/d8JH8Wf_7N7U_6G0GdUBgg__imagepage/img/5p9Y_wVZKjIhU6oINM4pojRQPo4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6370539.jpg'),
     ('BW2', 'Bitwa Warszawska', 165.40, 'Salve a Europa do comunismo. Ou traga a chama da revolução!', 1, 2, 'https://cf.geekdo-images.com/e3JgrmzPwP6MohRIJfsdOg__imagepage/img/tvHXdm5-V2eJzkhw_UjYasvlzWg=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5580919.jpg'),
     ('C2', 'Caesar!', 315.15, 'César e Pompeu implantam unidades em campos de batalha através de Roma para tomar o controle!', 1, 2, 'https://cf.geekdo-images.com/Mw_WmNeSTRgEgiQG87YPgQ__imagepage/img/L5JRrs-plvyqe8RBMNQTJImRxww=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6228356.png'),
     ('MHS3', '10 Minute Heist: Scarab', 721.17, 'Até o início da próxima curva, os jogadores não podem roubar cartas do chão que seu token Thief ocupa.', 1, 3, 'https://cf.geekdo-images.com/SDwEIxUM25CLCHmgYBul7A__imagepage/img/R5h-8HibaLOLRY32tKY-0awK_pE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3903797.jpg'),
     ('R3', '12 Realms', 78.75, 'Joguem como heróis inspirados em literatura para defender terras de fantasia de exércitos invasores.', 1, 3, 'https://cf.geekdo-images.com/zL4SanlRGdnxiSZkYkMZvw__imagepage/img/VxchcRm2OMcRGXk-Zx_F2tJY6as=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2761491.jpg'),
     ('SI3', 'Spirit Island', 362.85, 'Island Spirits unem forças usando poderes elementais para defender sua casa dos invasores.', 1, 3, 'https://cf.geekdo-images.com/a13ieMPP2s0KEaKNYmtH5w__imagepage/img/rOgQ2nxh9prgVBamT00eueWS2TA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3615739.png'),
     ('AH3', 'Arkham Horror', 125.84, 'Investigue os horrores de Arkham enquanto corteja a destruição cósmica.', 1, 3, 'https://cf.geekdo-images.com/9cJf4kd_HZQo6NunfJlo9w__imagepage/img/4fGg2gHz6qyElFGShhz5LOUjxuU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic175966.jpg'),
     ('TA3', 'The Abandons', 309.02, 'Fuga do labirinto para um jogador.', 1, 3, 'https://cf.geekdo-images.com/7KPVvDZfg5bodHiUBrsCew__imagepage/img/J5oCcXU_7A_134d2fWXRarMXGjU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4561473.png'),
     ('A4', 'Abetto', 508.00, 'Tornam-se senhores e senhoras de Arsen Lupin e competem uns com os outros pelo nome do maior ladrão, amante e esgrimista do submundo do Nobel.', 1, 4, 'https://cf.geekdo-images.com/_re3uFZ0BU5TCGBoZ8uXWg__imagepage/img/HrdEIpb3Mm0Nevpe0j-9Y_IEFXM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic861940.jpg'),
     ('M4', 'Mysterium', 175.00, 'Torne-se uma visão espectral psíquica e divina para resolver o assassinato de um fantasma inquieto.', 1, 4, 'https://cf.geekdo-images.com/wfeAiLK5n5hD1omhnlYLLA__imagepage/img/FAbfi09ZD0NHVa9psSeSrBZPgms=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2601683.jpg'),
     ('T4', 'Telestrations', 150.25, 'É um jogo envolvente que pode ser jogado repetidamente com diferentes idades e tipos de galera.', 1, 4, 'https://cf.geekdo-images.com/lxSrSu2-x2PcDwi78SACjA__imagepage/img/xMWIWQeCYlxwzWXqaZY6v8ThoMU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2564213.jpg'),
     ('DP4', 'Dungeon Petz', 215.00, 'Torne-se o líder de uma família de imps que acaba de começar um novo negócio.', 1, 4, 'https://cf.geekdo-images.com/7JjAm9RM8E2pbu5KCCbsTQ__imagepage/img/7iEpNMiGT-SAQMfKy4BjNMxS_Yc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1103979.jpg'),
     ('DO4', 'Dixit: Odyssey', 145.00, 'A cada turno, um jogador é o contador de histórias.', 1, 4, 'https://cf.geekdo-images.com/7b75ZZJQ4EEbDsKLi6kYSw__imagepage/img/31NVIHVznDrZNAy7aPw7Ik9Gf5k=/fit-in/900x600/filters:no_upscale():strip_icc()/pic918568.jpg'),
     ('KDM5', 'Kingdom Death: Moster', 1945.09, 'Tente sobreviver em um mundo de pesadelo que está sob a escuridão eterna.', 1, 5, 'https://cf.geekdo-images.com/LenzJBOHboAGU0cUIqAZPQ__imagepage/img/1dWKP2ZffsqsveQk8vq8aV33XUs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2931007.jpg'),
     ('A5', 'Abyss', 448.00, 'Controlar facções, influenciar a corte e reinar sobre reinos subaquáticos!', 1, 5, 'https://cf.geekdo-images.com/O9nPs9wrCghDF4izqFtoGQ__imagepage/img/MN9EkBI65dK1U5sv-EvpnuP7Els=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1965255.jpg'),
     ('FT5', 'Five Tribes', 275.33, 'Mova assassinos, anciões e construtores por Naqala para reivindicar oásis e controlar djinns.', 1, 5, 'https://cf.geekdo-images.com/dmo-WD6HZHVUPrbVHunaTw__imagepage/img/6Zrd6v5Z7gukQ-18akZ2hesGr_c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2055255.jpg'),
     ('TI5', 'Tzolk in', 273.12, 'Lidere seu povo, construa monumentos e faça oferendas para ganhar o favor dos deuses.', 1, 5, 'https://cf.geekdo-images.com/kXf7mDyDYuHg6oe8yTUIEA__imagepagezoom/img/35zcZELLN_G1scMXzIdHstj2IO0=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4604439.jpg'),
     ('TG5', 'Tainted Grail', 1081.70, 'Exploração, batalha e diplomacia em um reino arturiano sombrio.', 1, 5, 'https://cf.geekdo-images.com/aAwBzPzta4joKfFZt05hCw__imagepage/img/VTB2LcmXNC4XPpCOVfkfa4qO0cY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4385726.jpg'),
     ('TM6', 'Terraforming Mars', 244.63, 'Competir com CEOs rivais para tornar Marte habitável e construir seu império corporativo.', 1, 6, 'https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__imagepage/img/FS1RE8Ue6nk1pNbPI3l-OSapQGc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3536616.jpg'),
     ('GP6', 'Gaia Project', 368.98, 'Expanda, pesquise, atualize e colonize a galáxia com uma das 14 espécies alienígenas.', 1, 6, 'https://cf.geekdo-images.com/hGWFm3hbMlCDsfCsauOQ4g__imagepage/img/l0fffSKu6wscHhUNGWRh-0n-bqQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5375625.png'),
     ('S6', '7 Sectors', 579.51, 'Astronautas escapam de uma nave Alien Pickle em uma corrida competitiva para vencer!', 1, 6, 'https://cf.geekdo-images.com/wTyKAauj6a9JyMFESvDfxg__imagepage/img/TwSgkKu6XShs9klywQZfZTiiwG0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6296275.jpg'),
     ('STR6', 'Star Wars Rebellion', 511.00, 'Ataque de sua base oculta como os rebeldes - ou encontre e destrua-a como o Império.', 1, 6, 'https://cf.geekdo-images.com/7SrPNGBKg9IIsP4UQpOi8g__imagepage/img/89ViRUkHkCJhvZA5fay7A9-46mY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4325841.jpg'),
     ('DI6', 'Dune: Imperium', 305.00, 'Influência, intriga e combate no universo de Dune.', 1, 6, 'https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepage/img/BjM3LyahJ4IQ2ov5MkzkHatbmUc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5666597.jpg');
	
INSERT INTO public.usuario (NOME_USUARIO,EMAIL,SENHA) VALUES
	 ('usuario','usuario@mail.com','$2a$12$3COb/LHNYO/JeLWy1ExGFe6U2iyFczP70/kBUEHbf9miQ4Vp64A42');
	
INSERT INTO public.usuario_rel_perfil  (ID_USUARIO,ID_PERFIL) VALUES
	 (1,1);
