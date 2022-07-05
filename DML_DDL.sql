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


INSERT INTO public.categoria (NOME_CATEGORIA,IMAGEM) VALUES
	 ('Vestuário','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhZeUNRDBOxAu0QN3O9wBdMDLiIIImlBP1w&usqp=CAU'),
	 ('Jogos','https://static.vecteezy.com/ti/vetor-gratis/p1/2392616-games-or-gamepad-vector-icon-vetor.jpg'),
	 ('Eletrônicos','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkV6Vo4WO8SBKWG4u_VnOSUte7FsVyZ6gbQ&usqp=CAU'),
	 ('Comida','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VrY6gZwVCxlSdsfc8DfCLY8-92HdDDYsfw&usqp=CAU'),
	 ('Serviços','https://cdn.w600.comps.canstockphoto.com.br/servi%C3%A7o-%C3%ADcone-imagem_csp6318907.jpg');	 
	
INSERT INTO public.estoque (ID_PRODUTO,QUANTIDADE) VALUES
	 (1,10),
	 (3,30);
	
INSERT INTO public.fornecedor (TIPO,RAZAO_SOCIAL,CNPJ,UF,TELEFONE,EMAIL,NOME_FANTASIA,STATUS_SITUACAO,BAIRRO,LOGRADOURO,NUMERO,COMPLEMENTO,CEP,MUNICIPIO,DATA_ABERTURA) VALUES
	 ('Matriz','Primeiro Fornecedor','01111222000100','RJ','2125874125','email@mail.com','Nome Fantasia','Ativo','Centro','Rua Principal',10,'','25600000','Petrópolis','2022-05-27 09:23:36.461');
	
INSERT INTO public.perfil (NOME_PERFIL) VALUES
	 ('ROLE_USER');
	
INSERT INTO public.produto (SKU,NOME_PRODUTO,PRECO_PRODUTO,DESCRICAO_PRODUTO,ID_FORNECEDOR,ID_CATEGORIA,IMAGEM_PRODUTO) VALUES
	 ('C1','Camiseta Star Wars',100,'Camisa comemorativa',1,1,'https://www.camisetas4fun.com.br/media/product/2f7/camiseta-star-wars-storm-trooper-selfie-553.jpg'),
	 ('B1','Bermuda',200,'Bermuda comemorativa',1,1,'https://decathlonpro.vteximg.com.br/arquivos/ids/2755190/bermuda-masculina-de-trilha-travel-100-cinza-carbono-382.jpg?v=637532425569300000'),
	 ('C2','Calça Jeans',249,'Calça Jeans',1,1,'https://decathlonpro.vteximg.com.br/arquivos/ids/11226442/16520662066394.jpg?v=637883063565170000'),
	 ('M1','Mario',500,'Jogo do Mario',1,2,'https://super.abril.com.br/wp-content/uploads/2018/07/5746038b0e21634575066b09mario1.jpeg'),
	 ('AUS','Among US',10,'Jogo Among Us',1,2,'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2020/10/among_us_divulga%C3%A7%C3%A3o.jpg'),
	 ('FZHZ','Forza Horizon',250,'Forza Horizon',1,2,'https://store-images.s-microsoft.com/image/apps.33953.13718773309227929.bebdcc0e-1ed5-4778-8732-f4ef65a2f445.9428b75f-2c08-4e70-9f95-281741b15341?q=90&w=480&h=270'),
	 ('MS1','Mouse',99,'Mouse gamer',1,3,'https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/refreshed-g203/g203-hero.png?v=1'),
	 ('MNTR','Monitor',2000,'Monitor Samsung',1,3,'https://images.samsung.com/is/image/samsung/br-c49hg90-lc49hg90dmlxzd-black-308057618?$720_576_PNG$'),
	 ('PCG','Computador Gamer',5000,'PC Gamer',1,3,'https://images.kabum.com.br/produtos/fotos/157435/pc-gamer-concordia-glass-i3-9100f-8gb-ddr4-ssd-120gb-hd-1tb-rx-550-4gb-fonte-500w-linux-40552_1622121615_gg.jpg'),
	 ('CJPN','Comida Japonesa',100,'Comida Japonesa',1,4,'https://culturalizabh.com.br/wp-content/uploads/2021/07/218283699_496391104792100_6873675953089983584_n-1024x683.jpg'),
	 ('PTC','Petisco',100,'Petisco',1,4,'https://antenalivre.pt/pic/850x460/_petiscos_5ab3e7322e995.jpg'),
	 ('HBG','Hamburguer',39.90,'Hamburguer Caseiro',1,4,'https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg'),
	 ('DS','Desenvolvimento',100,'Desenvolvimento de Software',1,5,'https://neilpatel.com/wp-content/uploads/2019/06/maos-femininas-em-teclado-de-laptop-com-bloco-de-n.jpeg'),
	 ('GP','Gestão',100,'Gestão de Pessoas',1,5,'https://fieldcontrol.com.br/blog/wp-content/uploads/2018/02/mkt-de-servicos.png'),
	 ('C1','Serviços',100,'Serviços Gerais',1,5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2-srUPd5WijTARmGROOn3ALuyztBar5Eyw&usqp=CAU');
	
INSERT INTO public.usuario (NOME_USUARIO,EMAIL,SENHA) VALUES
	 ('usuario','usuario@mail.com','$2a$12$3COb/LHNYO/JeLWy1ExGFe6U2iyFczP70/kBUEHbf9miQ4Vp64A42');
	
INSERT INTO public.usuario_rel_perfil  (ID_USUARIO,ID_PERFIL) VALUES
	 (1,1);
