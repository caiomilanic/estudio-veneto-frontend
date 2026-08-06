# ⚛️ Studios Veneto — Frontend

**Landing page** do empreendimento Studios Veneto (MK2 Incorporadora), construída em React + TypeScript, com identidade visual autoral derivada dos materiais reais do prédio — fachada, acabamentos e a placa de identificação do empreendimento.

> 🔗 Repositório do backend: [`estudio-veneto-backend`](https://github.com/caiomilanic/estudio-veneto-backend)

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

---

## ✨ Funcionalidades

- 🏠 10 seções: Header, Hero, Localização, Para Morar/Investir, Diferenciais, Galeria, Preços, Formulário de Lead, Sobre a Incorporadora e Footer
- 📝 Formulário de lead com validação client-side (nome, telefone com máscara automática, e-mail) e estados de loading/sucesso/erro
- 🖼️ Galeria com **lightbox** — clique em qualquer foto pra ampliar, fecha com `Esc`, clique fora, ou botão
- ⚖️ Disclaimer de "imagens meramente ilustrativas" nas fotos de renderização
- 📱 Totalmente responsivo, com menu hambúrguer dedicado para mobile
- 🗺️ Mapa incorporado via iframe (sem API key)
- 💬 Link de WhatsApp gerado dinamicamente com mensagem pré-preenchida (`wa.me`)
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
│   ├── Hero.tsx                    🖼️ fachada real + CTA principal
│   ├── Localizacao.tsx             📍 texto + mapa incorporado
│   ├── ParaMorarInvestir.tsx       🏠 dois blocos: morar vs. investir
│   ├── Diferenciais.tsx            ✅ lista dinâmica via API
│   ├── Galeria.tsx                 🖼️ fotos + lightbox + disclaimer
│   ├── Precos.tsx                  💰 cards comparativos das tipologias
│   ├── FormularioLead.tsx          📝 captação com validação e máscara
│   ├── SobreIncorporadora.tsx      🏢 texto institucional
│   └── Footer.tsx                  🔗 logo, redes sociais, endereço
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

Configuração em `src/index.css`:
```css
@theme {
  --color-base: #F7F3EC;
  --color-charcoal: #2A2721;
  --color-terracota: #B9764F;
  --color-oliva: #565A40;
  --color-madeira: #D9C3A0;
  --color-surface: #FDFBF7;

  --font-display: "Fraunces", serif;
  --font-sans: "Inter", sans-serif;
}
```

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

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
VITE_API_URL=http://localhost:8080
```

> ⚠️ No Vite, variáveis expostas ao cliente **precisam** começar com `VITE_` — é uma exigência de segurança da própria ferramenta, para não vazar acidentalmente variáveis sensíveis do servidor.

> 🔒 O `.env` já está no `.gitignore` — nunca commite valores reais de produção.

---

## 🗺️ Roadmap

### ✅ Concluído
- [x] 10 seções completas, consumindo dados reais da API
- [x] Formulário de lead com validação e máscara de telefone
- [x] Galeria com lightbox e disclaimer legal
- [x] Responsividade com menu mobile
- [x] Metadados de SEO, favicon e identidade de marca (Header/Footer)

### 🚧 Pendente
- [ ] 📱 Revisão completa de responsividade em dispositivos reais
- [ ] ▲ Hospedagem em produção (Vercel ou Netlify)
- [ ] 🌐 Atualizar `VITE_API_URL` e `og:url` com os endereços de produção, após domínio registrado

---

## 💡 Aprendizados técnicos

- 🎨 No Tailwind v4, `@theme` gera classes utilitárias automaticamente (`bg-charcoal`, etc.); `:root` (CSS puro) não. O aviso "Unknown at rule @theme" que aparece em algumas IDEs é apenas falha de reconhecimento do linter CSS, não um erro real de build
- 🎯 A Lucide removeu ícones de marca na v1.0 (questões de trademark) — para logos como Instagram/WhatsApp, a alternativa é `@icons-pack/react-simple-icons`
- 🔧 CORS precisa ser liberado no **backend** para a origem do Vite (`http://localhost:5173`) — sem isso, todas as chamadas `fetch` são bloqueadas silenciosamente pelo navegador
- 🖼️ Imagens de fundo estruturais do design (ex: Hero) fazem mais sentido como assets locais; conteúdo editável de verdade (galeria, textos, preços) vem da API — mistura intencional, não inconsistência
- ⚖️ Imagens de renderização/simulação devem ter aviso visível de "imagem meramente ilustrativa" — requisito comum em publicidade imobiliária

---

## 🏢 Sobre a incorporadora

**MK2 Incorporadora** — atuação desde 2010, desenvolvendo empreendimentos residenciais pautados em planejamento, responsabilidade e qualidade construtiva.

---

<p align="center">Feito com ⚛️ React + 🎨 Tailwind CSS</p>