# ⚛️ Studios Veneto — Frontend

**Landing page** do empreendimento Studios Veneto (MK2 Incorporadora), construída em React + TypeScript, com identidade visual autoral derivada dos materiais reais do prédio — fachada, acabamentos e a placa de identificação do empreendimento.

> 🔗 Repositório do backend: [`estudio-veneto-backend`](https://github.com/caiomilanic/estudio-veneto-backend)
> 🌐 Produção: hospedado na Vercel · domínio próprio [`studiosveneto.com.br`](https://studiosveneto.com.br) em configuração (DNS)

---

## 📖 Sobre

Landing page de captação de leads, com todo o conteúdo (textos, preços, diferenciais, fotos e links sociais) consumido dinamicamente da API do backend — nada de texto hardcoded no componente. Único elemento de design fixo no código é a imagem de fundo do Hero, tratada como parte estrutural do layout, não como "dado".

---

## 📑 Índice

- [Tecnologias](#️-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Identidade visual](#-identidade-visual)
- [Como rodar localmente](#-como-rodar-localmente)
- [Deploy em produção](#-deploy-em-produção)
- [Variáveis de ambiente](#-variáveis-de-ambiente)
- [Roadmap](#-roadmap)
- [Aprendizados técnicos](#-aprendizados-técnicos)

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| ⚛️ **React 18** | Biblioteca de UI |
| 🔷 **TypeScript** | Tipagem estática |
| ⚡ **Vite** | Build tool e dev server |
| 🎨 **Tailwind CSS v4** | Estilização utility-first (config CSS-first via `@theme`) |
| 🖼️ **[Cloudinary](https://cloudinary.com)** | Armazenamento e otimização das fotos do empreendimento |
| 🗺️ **Google Maps Embed** | Mapa de localização, sem custo/API key |
| 🎯 **[Simple Icons](https://www.npmjs.com/package/@icons-pack/react-simple-icons)** | Logos de marca (Instagram, WhatsApp) |
| 🧹 **Oxlint** | Linter (padrão do create-vite) |
| ▲ **Vercel** | Hospedagem |

---

## ✨ Funcionalidades

- 🏠 10 seções: Header, Hero, Localização, Para Morar/Investir, Diferenciais, Galeria, Preços, Formulário de Lead, Sobre a Incorporadora e Footer
- 📝 Formulário de lead com validação client-side (nome, telefone com máscara automática, e-mail) e **seletor de preferência de contato** (WhatsApp, e-mail ou ligação)
- 💀 **Estados de carregamento (skeleton)** nas seções que dependem da API — evita seções "somem da tela" durante cold start do backend
- 🖼️ Galeria com **lightbox** — clique em qualquer foto pra ampliar, fecha com `Esc`, clique fora, ou botão
- ⚖️ Disclaimer de "imagens meramente ilustrativas" nas fotos de renderização
- 💰 Cards de tipologia com área privativa, área total e área de jardim (quando aplicável), alinhados independente de qual card tem mais linhas de informação
- 📱 Totalmente responsivo, com menu hambúrguer dedicado para mobile
- 🗺️ Mapa incorporado via iframe (sem API key)
- 💬 Link de WhatsApp gerado dinamicamente com mensagem pré-preenchida (`wa.me`)
- 🏢 CNPJ da incorporadora e crédito de desenvolvimento (com `mailto:` e assunto pré-preenchido) no footer
- 🔍 Meta tags de SEO, Open Graph e Twitter Card configuradas para preview em redes sociais

---

## 📂 Estrutura do projeto

```
src/
├── 📁 assets/                    → imagens estruturais do design (fachada do Hero)
│
├── 📁 components/
│   ├── Header.tsx                 🧭 navegação, ícones sociais, menu mobile
│   ├── Logo.tsx                    🔖 monograma "SV" reutilizável
│   ├── Skeleton.tsx                💀 bloco de carregamento reutilizável
│   ├── Hero.tsx                    🖼️ fachada real + CTA + badge de entrega
│   ├── Localizacao.tsx             📍 texto + mapa incorporado
│   ├── ParaMorarInvestir.tsx       🏠 dois blocos: morar vs. investir
│   ├── Diferenciais.tsx            ✅ lista dinâmica via API (com skeleton)
│   ├── Galeria.tsx                 🖼️ fotos + lightbox + disclaimer (com skeleton)
│   ├── Precos.tsx                  💰 cards comparativos das tipologias (com skeleton)
│   ├── FormularioLead.tsx          📝 captação com validação, máscara e preferência de contato
│   ├── SobreIncorporadora.tsx      🏢 texto institucional (com skeleton)
│   └── Footer.tsx                  🔗 logo, redes sociais, CNPJ, crédito de desenvolvimento
│
├── 📁 services/
│   └── api.ts                      🔌 todas as chamadas fetch ao backend
│
├── 📁 types/                       🔷 tipos espelhando os DTOs do backend
│   ├── Content.ts
│   ├── Photo.ts
│   ├── Highlight.ts
│   ├── Unit.ts                      tipo, areaPrivativa, areaTotal, areaJardim, precoAPartirDe
│   └── SocialLink.ts
│
├── App.tsx                         🧩 composição de todas as seções
├── main.tsx
└── index.css                       🎨 tema Tailwind (@theme) + fontes
```

---

## 🎨 Identidade visual

Paleta e tipografia derivadas diretamente dos materiais reais do empreendimento — não é uma paleta genérica de "site imobiliário".

### Paleta

| Cor | Hex | Origem |
|---|---|---|
| 🟫 `charcoal` | `#2A2721` | Painéis grafite da fachada |
| 🟧 `terracota` | `#B9764F` | Revestimento externo do prédio |
| 🫒 `oliva` | `#565A40` | Parede de cabeceira dos studios |
| 🟨 `madeira` | `#D9C3A0` | Marcenaria e ripado interno |
| ⬜ `base` / `surface` | `#F7F3EC` / `#FDFBF7` | Paredes e bancadas |

### Tipografia

- 🖋️ **Fraunces** (serifada) — wordmark e títulos, inspirada na placa de identificação do prédio
- 🔤 **Inter** (sans-serif) — corpo de texto e elementos de UI

---

## 🚀 Como rodar localmente

### Pré-requisitos
- 📦 Node.js 24 (LTS)
- ☕ Backend rodando em `http://localhost:8080` ([veja o repositório do backend](https://github.com/caiomilanic/estudio-veneto-backend))

### Passos

```bash
git clone https://github.com/caiomilanic/estudio-veneto-frontend.git
cd estudio-veneto-frontend

npm install

# configure o .env (ver seção abaixo)
npm run dev
```

O site sobe em `http://localhost:5173`.

---

## ☁️ Deploy em produção

Hospedado na **Vercel**, com deploy automático a cada push na branch `main`.

- Build detectado automaticamente (Vite) — sem configuração manual de build/output directory
- Domínio próprio `studiosveneto.com.br` registrado no Registro.br, DNS em configuração:
  - `A` (`@`) → IP da Vercel
  - `CNAME` (`www`) → destino fornecido pela Vercel
  - Produção "oficial" aponta para `www.studiosveneto.com.br` (domínio raiz redireciona para o `www`)

---

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto (ou configure em **Settings → Environment Variables** na Vercel para produção):

```bash
VITE_API_URL=http://localhost:8080
```

> ⚠️ No Vite, variáveis expostas ao cliente **precisam** começar com `VITE_`.

> 🔒 O `.env` já está no `.gitignore` — nunca commite valores reais de produção.

---

## 🗺️ Roadmap

### ✅ Concluído
- [x] 10 seções completas, consumindo dados reais da API
- [x] Formulário de lead com validação, máscara de telefone e preferência de contato
- [x] Galeria com lightbox e disclaimer legal
- [x] Estados de skeleton/loading nas seções dependentes de API
- [x] Cards de tipologia com área privativa, total e jardim, alinhados
- [x] CNPJ e crédito de desenvolvimento no footer
- [x] Deploy em produção na Vercel
- [x] Domínio `studiosveneto.com.br` registrado

### 🚧 Pendente
- [ ] 🌐 Finalizar propagação DNS do domínio próprio
- [ ] ✏️ Atualizar `VITE_API_URL` e `og:url` com os endereços finais de produção, após domínio propagado
- [ ] 📱 Revisão completa de responsividade em dispositivos reais

---

## 💡 Aprendizados técnicos

- 🎨 No Tailwind v4, `@theme` gera classes utilitárias automaticamente (`bg-charcoal`, etc.); `:root` (CSS puro) não
- 🎯 A Lucide removeu ícones de marca na v1.0 — para logos como Instagram/WhatsApp, a alternativa é `@icons-pack/react-simple-icons`
- 🔧 CORS precisa ser liberado no **backend** para a origem do frontend — em produção, a URL de preview da Vercel muda a cada deploy, então vale usar `allowedOriginPatterns` com wildcard (`*.vercel.app`) até o domínio próprio estar pronto
- 💀 Substituir "seção desaparece se a API demorar" por um **estado de skeleton explícito** (`loading` / `success` / `error`) evita que um cold start do backend pareça um site quebrado
- 📐 Pra alinhar cards com quantidade de informação diferente (ex: um card tem "área de jardim", o outro não), reservar o espaço com `opacity-0` em vez de simplesmente não renderizar a linha mantém a altura dos cards idêntica
- 🔗 Reconectar um repositório errado na Vercel pode não dever gerar um novo deploy sozinho — um commit vazio (`git commit --allow-empty`) força a Vercel a reconstruir do zero a partir da conexão corrigida
- 🌐 Ao configurar DNS no Registro.br, a tela "Alterar Servidores DNS" é para *delegar* o DNS a outro provedor — os registros individuais (`A`, `CNAME`) ficam em uma seção separada ("Configurar zona DNS" / "Configurar endereçamento")

---

## 🏢 Sobre a incorporadora

**MK2 Incorporadora** — atuação desde 2010, desenvolvendo empreendimentos residenciais pautados em planejamento, responsabilidade e qualidade construtiva.

---

<p align="center">Feito com ⚛️ React + 🎨 Tailwind CSS</p>