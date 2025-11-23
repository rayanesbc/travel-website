# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Visão Geral do Projeto

Site estático de turismo e viagens chamado "Travol" - uma aplicação de página única apresentando pacotes de viagem, destinos, depoimentos e conteúdo de blog de viagens. O site é construído com HTML, CSS e JavaScript puro, sem processo de build ou dependências além de recursos externos via CDN.

## Arquitetura

### Stack Tecnológica
- **HTML5**: Aplicação de página única (index.html)
- **CSS3**: Folhas de estilo modulares com arquivo separado para design responsivo
- **JavaScript**: Vanilla JS sem frameworks
- **Bibliotecas Externas**:
  - Swiper.js (via CDN) para funcionalidade de carrosséis/sliders
  - Font Awesome (via CDN) para ícones

### Estrutura de Arquivos
```
/
├── index.html           # Arquivo HTML principal com todas as seções
├── css/
│   ├── style.css        # Folha de estilos principal
│   └── responsive.css   # Media queries para design responsivo
├── js/
│   ├── script.js        # Funcionalidades principais (menu, scroll, animações)
│   └── swiper.js        # Configurações dos carrosséis Swiper
└── img/                 # Todos os assets de imagem
```

### Arquitetura das Seções

O site de página única está estruturado com seções semânticas nesta ordem:

1. **Header** - Navegação fixa com comportamento sticky no scroll
2. **Showcase** (main) - Slider hero com 3 slides usando Swiper
3. **Location Search** - Formulário de busca com filtros de destino/duração
4. **About** - Layout de duas colunas com informações da agência e imagem
5. **Choose Place** - Grid de pacotes turísticos com efeitos hover
6. **Static Counter** - Estatísticas animadas com background parallax
7. **Top Destination** - Carrossel de destinos populares (Swiper2)
8. **Video Background** - Seção de vídeo full-width com overlay de conteúdo
9. **Travel Countries** - Duas showcases de países (Itália e França) com carrosséis de cidades (Swiper3)
10. **Travel Blog** - Carrossel de posts do blog (Swiper4)
11. **Testimonials** - Carrossel de avaliações de clientes com background parallax (Swiper5)
12. **Footer** - Informações de contato, links rápidos e inscrição para newsletter

## Padrões de Design Principais

### Arquitetura CSS
- **Variáveis CSS**: Definidas em `:root` para tematização consistente (primary-color, white-color, light-gray-color, blue-color)
- **Classes Utilitárias**: Classes reutilizáveis como `.container`, `.headings`, `.lead`, `.primary-btn`
- **Design Responsivo**: Breakpoints em 1024px e 900px no responsive.css
- **Efeitos Parallax**: Background attachment fixo nas seções counter e testimonials

### Padrões JavaScript
- **Navegação Mobile**: Toggle de classes para exibir/ocultar menu hamburguer
- **Header Sticky**: Adiciona classe `.sticky` ao rolar mais de 20px
- **Animação de Números**: Padrão intersection observer dispara animação de contadores uma vez quando 70% da viewport está visível
- **Instâncias Swiper**: Cinco configurações Swiper separadas para diferentes carrosséis

### Efeitos Interativos
- **Overlays no Hover**: Overlays escuros aparecem ao passar o mouse sobre imagens com revelação de conteúdo oculto
- **Contadores Animados**: Números animam ao rolar para a área visível (script.js:29-65)
- **Animações Transform**: Texto desliza com animações CSS na seção hero
- **Carrosséis Auto-play**: Todas as instâncias Swiper têm autoplay com delay de 5s

## Workflow de Desenvolvimento

### Executando o Projeto
Este é um site estático - simplesmente abra `index.html` em um navegador. Nenhum processo de build é necessário.

### Desenvolvimento com Live Reload
Use qualquer servidor de desenvolvimento local para visualizar alterações:
```bash
# Python 3
python -m http.server 8000

# Node.js (se http-server estiver instalado)
npx http-server

# Extensão Live Server do VS Code
Clique com botão direito em index.html → "Open with Live Server"
```

### Adicionando Novas Seções
Ao adicionar novas seções:
1. Adicione estrutura HTML ao index.html seguindo o padrão semântico existente
2. Adicione estilos específicos da seção ao style.css com seletor de ID da seção
3. Adicione estilos responsivos ao responsive.css para ambos os breakpoints
4. Se adicionar carrosséis, crie nova instância Swiper em swiper.js

### Modificando Estilos
- Estilos principais organizados por seção com comentários: `/* *****************Nome da Seção Start***************** */`
- Sempre atualize tanto style.css quanto responsive.css ao modificar layouts
- Use variáveis CSS para cores para manter tematização consistente
- Layouts Grid são preferidos sobre flexbox para estruturas principais de seções

### Trabalhando com Imagens
- Todas as imagens armazenadas no diretório `/img` sem subdiretórios
- Imagens nomeadas descritivamente (ex: `travel-countries-rome.jpg`, `top-destination-maldives1.jpg`)
- Use dimensionamento responsivo: imagens são 100% de largura com object-fit: cover

## Padrões Comuns

### Adicionando Novo Destino Turístico
1. Adicione imagem ao diretório `/img`
2. Copie estrutura existente `.lg-img` ou `.carousel` no HTML
3. Atualize src da imagem, nome do destino, duração, preço
4. Efeitos hover são automáticos via classes CSS existentes

### Modificando Comportamento dos Carrosséis
Todas as configurações Swiper estão em `swiper.js`:
- `swiper`: Showcase hero (efeito criativo, autoplay 5s)
- `swiper2`: Destinos principais (efeito coverflow, breakpoints responsivos)
- `swiper3`: Tours de cidades dos países (2 slides por visualização)
- `swiper4`: Blog de viagens (3 slides no desktop)
- `swiper5`: Depoimentos (slide único)

### Comportamento do Header Sticky
Header se torna fixo com fundo azul ao rolar. Modifique comportamento em script.js:20-27.

### Animação dos Contadores
Contadores animam uma vez ao rolar para área visível. Edite velocidade da animação em script.js:46 (atualmente 25ms * random).

## Nota sobre Idioma
O site usa português e inglês misturados:
- Atributo lang do HTML: `pt-br`
- Conteúdo principal: Inglês
- Alguns elementos de UI (texto do footer): Português

Ao editar conteúdo, mantenha essa abordagem de idioma misto ou discuta com stakeholders antes de alterar.
