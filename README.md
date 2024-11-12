<h1>🍔 DevBurguer API - Back-End</h1>
<p>Este repositório contém a API que alimenta o <strong>DevBurguer</strong>, uma plataforma completa para pedidos online de uma hamburgueria. A API foi construída em <strong>Node.js</strong> utilizando o <strong>Express</strong> para criação de rotas e <strong>Sequelize</strong> como ORM para gerenciamento do banco de dados <strong>PostgreSQL</strong>. Além disso, a API também integra o <strong>MongoDB</strong> para funcionalidades específicas e implementa o processamento de pagamentos via <strong>Stripe</strong>.</p>

<h2>⚙️ Funcionalidades:</h2>
<ul>
  <li><strong>🔐 Autenticação e Autorização</strong>: Sistema completo de cadastro e login de usuários com criptografia de senhas (<em>bcrypt</em>) e autenticação <em>JWT</em>.</li>
  <li><strong>🛒 Gestão de Pedidos e Carrinho de Compras</strong>: Controle total do carrinho de compras, incluindo a persistência dos itens adicionados, mesmo após o logout.</li>
  <li><strong>💳 Processamento de Pagamentos</strong>: Integração com a API do <strong>Stripe</strong> para gerenciamento seguro de pagamentos online.</li>
  <li><strong>📦 Manutenção de Produtos</strong>: CRUD completo para gerenciamento dos produtos disponíveis no cardápio, incluindo criação, edição e exclusão.</li>
  <li><strong>🗄️ Banco de Dados Relacional</strong>: Utilização de <strong>PostgreSQL</strong> para armazenamento dos dados da aplicação, com mapeamento objeto-relacional feito pelo Sequelize.</li>
  <li><strong>🛠️ MongoDB</strong>: Implementação de banco de dados não-relacional para complementar a estrutura de dados, utilizado para logs ou outras funcionalidades.</li>
  <li><strong>🐳 Docker</strong>: Contêinerização da aplicação para facilitar o deploy e garantir consistência nos ambientes de desenvolvimento e produção.</li>
</ul>

<h2>🔧 Tecnologias Utilizadas:</h2>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Sequelize</li>
  <li>PostgreSQL</li>
  <li>MongoDB</li>
  <li>JWT (JSON Web Tokens)</li>
  <li>bcrypt</li>
  <li>Stripe</li>
  <li>Docker</li>
</ul>
<h2>🚀 Instalação e Execução:</h2>
<ol>
  <li>Clone o repositório:
    <pre><code>git clone https://github.com/seuusuario/devburger-api.git</code></pre>
  </li>
  <li>Instale as dependências:
    <pre><code>npm install</code></pre>
  </li>
  <li>Configure as variáveis de ambiente no arquivo <code>.env</code>, incluindo credenciais para banco de dados e Stripe.</li>
  <li>Inicie a aplicação:
    <pre><code>npm start</code></pre>
  </li>
</ol>

<p>Sinta-se à vontade para explorar o código e sugerir melhorias! 🚀</p>
