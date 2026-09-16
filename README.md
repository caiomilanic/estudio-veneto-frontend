# ⚛️ Studios Veneto — Frontend

**Landing page** do empreendimento Studios Veneto (RAC Imóveis / MK2 Incorporadora), construída em React + TypeScript, com identidade visual autoral derivada dos materiais reais do prédio — fachada, acabamentos e a placa de identificação do empreendimento.

> 🔗 Repositório do backend: [`estudio-veneto-backend`](https://github.com/caiomilanic/estudio-veneto-backend)
> 🌐 **Produção:** [`www.studiosveneto.com.br`](https://www.studiosveneto.com.br) — 🎉 projeto no ar, domínio próprio ativo

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
- [Analytics e rastreamento (GTM)](#-analytics-e-rastreamento-gtm)
- [Roadmap](#-roadmap)
- [Aprendizados técnicos](#-aprendizados-técnicos)

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| ⚛️ **React 18** | Biblioteca de UI |
| 🔷 **TypeScript** | Tipagem estática |
| ⚡ **Vite** | Build tool e dev server |
| 🧭 **React Router** | Roteamento (landing + página de Política de Privacidade) |
| 🎨 **Tailwind CSS v4** | Estilização utility-first (config CSS-first via `@theme`) |
| 🖼️ **[Cloudinary](https://cloudinary.com)** | Armazenamento e otimização das fotos do empreendimento |
| 🗺️ **Google Maps Embed** | Mapa de localização, sem custo/API key |
| 📊 **Google Tag Manager** | Container de analytics/rastreamento (tags configuradas externamente) |
| 🎯 **[Simple Icons](https://www.npmjs.com/package/@icons-pack/react-simple-icons)** | Logos de marca (Instagram, WhatsApp) |
| 🧹 **Oxlint** | Linter (padrão do create-vite) |
| ▲ **Vercel** | Hospedagem, com domínio próprio e SSL |

---

## ✨ Funcionalidades

- 🏠 10 seções na landing: Header, Hero, Localização, Para Morar/Investir, Diferenciais, Galeria, Preços, Formulário de Lead, Sobre (MK2 + RAC lado a lado) e Footer
- 📝 Formulário de lead com validação client-side (nome, telefone com máscara automática, e-mail), **seletor de preferência de contato** (WhatsApp, e-mail ou ligação) e **checkbox de consentimento LGPD** vinculado à Política de Privacidade — botão de envio só habilita com o aceite marcado
- 📄 **Página própria de Política de Privacidade** (`/politica-de-privacidade`), com índice navegável por seção, aviso de transferência internacional de dados (Neon, Brevo) e seção de avisos legais
- 📊 **Google Tag Manager** instalado (`GTM-M26NLBHZ`), pronto para receber tags de Analytics/Ads configuradas pela equipe de mídia, sem necessidade de novo deploy a cada tag criada
- 💀 Estados de carregamento (skeleton) nas seções que dependem da API
- 🖼️ Galeria com **lightbox** — clique em qualquer foto pra ampliar, fecha com `Esc`, clique fora, ou botão
- ⚖️ Disclaimer de "imagens meramente ilustrativas" nas fotos de renderização
- 💰 Cards de tipologia com área total e área de jardim (quando aplicável), sempre alinhados entre si
- 📱 Responsivo, incluindo tratamento específico para celular em orientação paisagem (media query por altura de viewport)
- 🗺️ Mapa incorporado via iframe (sem API key)
- 💬 Link de WhatsApp gerado dinamicamente com mensagem pré-preenchida (`wa.me`)
- 📧 E-mail próprio `contato@studiosveneto.com.br` operacional (recebimento e envio via Gmail — configuração de infraestrutura, não de código; veja Aprendizados)
- 🏢 CNPJ da MK2 e da RAC, e crédito de desenvolvimento (com `mailto:` e assunto pré-preenchido) no footer
- 🔍 Meta tags de SEO, Open Graph e Twitter Card configuradas com a URL de produção real

---

## 📂 Estrutura do projeto

```
src/
├── 📁 assets/                    → imagens estruturais do design (fachada do Hero)
│
├── 📁 pages/
│   ├── Home.tsx                    🏠 composição da landing page completa
│   └── PoliticaPrivacidade.tsx     📄 política de privacidade, com índice por seção
│
├── 📁 components/
│   ├── Header.tsx                 🧭 navegação, ícones sociais, menu mobile
│   ├── Logo.tsx                    🔖 monograma "SV" reutilizável
│   ├── Skeleton.tsx                💀 bloco de carregamento reutilizável
│   ├── Hero.tsx                    🖼️ fachada real + CTA + badge de entrega (com tratamento p/ paisagem)
│   ├── Localizacao.tsx             📍 texto + mapa incorporado
│   ├── ParaMorarInvestir.tsx       🏠 dois blocos: morar vs. investir
│   ├── Diferenciais.tsx            ✅ lista dinâmica via API (com skeleton)
│   ├── Galeria.tsx                 🖼️ fotos + lightbox + disclaimer (com skeleton)
│   ├── Precos.tsx                  💰 cards comparativos, com link para avisos legais
│   ├── FormularioLead.tsx          📝 captação com validação, máscara, preferência de contato e consentimento LGPD
│   ├── SobreIncorporadora.tsx      🏢 MK2 e RAC lado a lado (com skeleton)
│   └── Footer.tsx                  🔗 logo, redes sociais, CNPJs, crédito de desenvolvimento
│
├── 📁 services/
│   └── api.ts                      🔌 todas as chamadas fetch ao backend
│
├── 📁 types/                       🔷 tipos espelhando os DTOs do backend
│   ├── Content.ts
│   ├── Photo.ts
│   ├── Highlight.ts
│   ├── Unit.ts
│   └── SocialLink.ts
│
├── App.tsx                         🧩 definição das rotas (React Router)
├── main.tsx
└── index.css                       🎨 tema Tailwind (@theme) + fontes
```

**Fora do `src/`:**
```
index.html   → contém o script do Google Tag Manager (<head>) e o <noscript> (logo após <body>)
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

> O Google Tag Manager também carrega normalmente em `localhost` (o container não tem restrição de domínio). Veja a seção [Analytics e rastreamento](#-analytics-e-rastreamento-gtm) para testar.

---

## ☁️ Deploy em produção

Hospedado na **Vercel**, com deploy automático a cada push na branch `main`.

- **URL de produção:** `https://www.studiosveneto.com.br` (domínio raiz redireciona automaticamente para o `www`)
- Build detectado automaticamente (Vite) — sem configuração manual de build/output directory
- Domínio próprio `studiosveneto.com.br` registrado no Registro.br, com DNS totalmente propagado:
  - `A` (`@`) → IP da Vercel
  - `CNAME` (`www`) → destino fornecido pela Vercel
- SSL emitido e renovado automaticamente pela Vercel

---

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto (ou configure em **Settings → Environment Variables** na Vercel para produção):

```bash
VITE_API_URL=http://localhost:8080
```

Em produção:
```bash
VITE_API_URL=https://api.studiosveneto.com.br
```

> ⚠️ No Vite, variáveis expostas ao cliente **precisam** começar com `VITE_`. Alterar essa variável na Vercel exige um novo deploy para ter efeito — não basta salvar (`git commit --allow-empty` força isso, se necessário).

> 🔒 O `.env` já está no `.gitignore` — nunca commite valores reais de produção.

---

## 📊 Analytics e rastreamento (GTM)

O site tem o **Google Tag Manager** instalado (container `GTM-M26NLBHZ`), com o script padrão no `<head>` e o `<noscript>` de fallback após `<body>` — sem nenhuma tag específica hardcoded no código do site.

**Como funciona a divisão de responsabilidades:**
- O código do site só carrega o *container* do GTM — isso é o que está versionado neste repositório
- As tags específicas (Google Analytics, Google Ads, Meta Pixel, conversões, etc.) são criadas e publicadas **direto no painel do GTM**, pela equipe de mídia/ads — sem precisar de novo deploy do site

**Como testar se o container está funcionando:**
1. No [painel do GTM](https://tagmanager.google.com), abre o container e clica em **Visualizar**
2. Conecta a uma URL do site (local ou produção)
3. Confirma que os eventos `Container Loaded`, `DOM Ready` e `Window Loaded` aparecem na linha do tempo, sem erros — isso confirma que a implementação do site está correta, independente de quantas tags existam configuradas dentro do container

> ⚠️ Sempre que uma tag de rastreamento/analytics real for publicada no GTM, a seção 09 (Cookies) da Política de Privacidade precisa refletir isso — ver `PoliticaPrivacidade.tsx`.

---

## 🗺️ Roadmap

### ✅ Concluído
- [x] 10 seções completas, consumindo dados reais da API
- [x] Formulário de lead com validação, máscara de telefone, preferência de contato e consentimento LGPD
- [x] Página própria de Política de Privacidade, com roteamento via React Router
- [x] Seção "Sobre" com MK2 e RAC lado a lado
- [x] Galeria com lightbox e disclaimer legal
- [x] Estados de skeleton/loading nas seções dependentes de API
- [x] Cards de tipologia simplificados (área total + jardim), alinhados
- [x] CNPJs e crédito de desenvolvimento no footer
- [x] Correção de layout do Hero em mobile paisagem
- [x] Deploy em produção na Vercel, com domínio próprio e SSL
- [x] `VITE_API_URL` e `og:url` apontando para os endereços finais de produção
- [x] Google Tag Manager instalado e validado via modo Preview
- [x] Política de Privacidade (seção Cookies) atualizada refletindo o uso do GTM
- [x] E-mail `contato@studiosveneto.com.br` operacional via Gmail (ImprovMX + SMTP relay)

### 🚧 Pendente (baixa prioridade)
- [ ] 🖼️ Tratamento visual da imagem de planta baixa na galeria (fundo branco destoa das fotos reais)
- [ ] 📱 Revisão de responsividade em mais dispositivos reais além do já corrigido (paisagem mobile)
- [ ] 📊 Configuração das tags específicas dentro do GTM (Analytics, Ads) — a cargo da equipe de mídia

---

## 💡 Aprendizados técnicos

- 🎨 No Tailwind v4, `@theme` gera classes utilitárias automaticamente (`bg-charcoal`, etc.); `:root` (CSS puro) não
- 🎯 A Lucide removeu ícones de marca na v1.0 — para logos como Instagram/WhatsApp, a alternativa é `@icons-pack/react-simple-icons`
- 💀 Substituir "seção desaparece se a API demorar" por um **estado de skeleton explícito** evita que um cold start do backend pareça um site quebrado
- 📐 Pra alinhar cards com quantidade de informação diferente, reservar o espaço com `opacity-0` em vez de simplesmente não renderizar a linha mantém a altura dos cards idêntica
- 📱 `min-h-screen` quebra em celulares na orientação paisagem (pouca altura de viewport comprime o conteúdo). Solução: variante de media query por `max-height` (`[@media(max-height:500px)]:...`)
- 🌐 Ao configurar DNS no Registro.br, a tela "Alterar Servidores DNS" é para *delegar* o DNS a outro provedor — os registros individuais (`A`, `CNAME`, `MX`, `TXT`) ficam em "Configurar zona DNS" (modo avançado)
- 🔗 Reconectar um repositório errado na Vercel pode não gerar um novo deploy sozinho — um commit vazio (`git commit --allow-empty`) força a reconstrução a partir da conexão corrigida
- ⚖️ Seções de política de privacidade que citam operadores internacionais (Neon, Brevo) devem declarar explicitamente a transferência internacional de dados, conforme art. 33 da LGPD; o mesmo vale para ferramentas de rastreamento via GTM (seção de Cookies)
- 📧 Um domínio pode ter **apenas um** registro SPF (`TXT` começando com `v=spf1`) — ao adicionar um segundo serviço de e-mail (ex: ImprovMX, além do Brevo já configurado), os `include:` precisam ser mesclados numa única linha, nunca em registros `TXT` separados
- 📧 O Gmail não permite mais pular a configuração de SMTP ao adicionar "Enviar e-mail como" — mas é possível usar o **próprio `smtp.gmail.com`** como relay (autenticando com uma senha de app da conta que já recebe o e-mail via encaminhamento), sem precisar de um SMTP pago de terceiros
- 📊 O Google Tag Manager funciona normalmente em `localhost` — o container não tem nenhuma restrição de domínio, o que facilita testar antes de ir para produção

---

## 🏢 Sobre a incorporadora

**MK2 Incorporadora** e **RAC Imóveis** — parceria conjunta neste empreendimento, unindo experiência de mercado e expertise técnica em incorporação.

---

<p align="center">Feito com ⚛️ React + 🎨 Tailwind CSS</p>