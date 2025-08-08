
# 🚀 Teste Front-End Cakto - Livia Valverde

---

## 📌 Sobre o Projeto

Este mini-checkout foi desenvolvido para o desafio técnico da Cakto, simulando a experiência real de compra de um curso digital. Foco total em **UX mobile-first**, validações robustas, cálculo dinâmico de taxas e parcelas, com destaque especial para o **PIX**, opção estratégica para aumentar conversão.

O código é escrito em **React + TypeScript + Next.js**, usando TailwindCSS para design responsivo e elegante, além de incluir tema claro/escuro para melhor experiência do usuário.

---

## 💡 Decisões Técnicas

- **Next.js + React + TypeScript**: arquitetura moderna com tipagem forte, SSR/SSG e performance.
- **TailwindCSS**: estilização rápida, responsiva e personalizável com dark mode.
- **Validação com lógica própria** para CPF, mais máscara dinâmica e feedback visual.
- **Componentização clara e reutilizável**: fácil manutenção e escalabilidade.
- **Estado gerenciado localmente com React Hooks**, otimizando re-renderizações.
- **Feedback instantâneo no formulário**: loading no botão, mensagens de erro inline e validação em tempo real.
- **Acessibilidade**: inputs com labels, navegação por teclado e contraste adequado.
- **Testes unitários e e2e** implementados para garantir qualidade.

---

## 🛠 Funcionalidades

- Formulário com campos: Email, CPF (com máscara e validação), método de pagamento e parcelas
- Cálculo inteligente de taxas:
  - PIX: 0% de taxa
  - Cartão à vista: 3.99%
  - Cartão parcelado: 4.99% + 2% por parcela extra
- Resumo dinâmico do pedido atualizado em tempo real
- Destaque visual para opção PIX, incentivando a escolha que gera maior conversão
- Loading state no botão “Finalizar Compra”
- Design responsivo mobile-first com tema claro e escuro ativáveis
- Validação com mensagens sem travar a digitação do usuário

---

## 🌍 Deploy Online

[Link para versão online](https://teste-frontend-cakto-livia-valverde.vercel.app/)

---

## ⚠️ Pré-requisitos

- Node.js >= 18
- npm ou yarn ou pnpm
- Git

---

## ▶️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/teste-frontend-cakto-livia-valverde.git

# Acesse a pasta do projeto
cd teste-frontend-cakto-livia-valverde

# Instale as dependências
npm install
# ou yarn
yarn
# ou pnpm
pnpm install

# Inicie a aplicação
npm run dev
# ou yarn dev / pnpm dev

# Acesse no navegador http://localhost:3000
```

---

## 🧪 Como executar os testes

- Testes unitários React Testing Library + Jest:

```bash
npm test
```

- Testes End-to-End com Playwright:

```bash
npx playwright test
```

---

## 🚀 Ideias para aumentar a conversão do checkout

- **Sugestão automática do PIX** com badge animada e explicação da economia
- **Microinterações mobile**: teclado numérico no CPF, foco automático e botões maiores
- **Barra de progresso/etapas** para reduzir abandono (“Falta só mais 1 passo!”)
- **Teste A/B** para diferentes layouts e CTAs, acompanhados por analytics
- **Autofill e login social** para agilizar preenchimento e cadastro
- **Envio de e-mail para recuperação do carrinho** se o usuário abandonar o checkout
- **Gatilhos de urgência**: “últimas vagas”, tempo limitado e selos de segurança
- **Chat rápido e FAQ integrado** para tirar dúvidas e aumentar confiança
- **Análise contínua de funil e mapa de calor** para otimizar o fluxo constantemente

---

## 📂 Tecnologias Utilizadas

- React 18 + Next.js 13 (App Router)
- TypeScript
- TailwindCSS (com suporte a dark mode)
- React Hook Form (controle de formulários)
- Jest + React Testing Library (testes unitários)
- Playwright (testes end-to-end)
- Autorização e validação customizadas para CPF
- Vercel para deploy (opcional)

---

## 🤝 Contato

Livia Valverde  
[LinkedIn](https://www.linkedin.com/in/livia-toledo-3a3359146) | [GitHub](https://github.com/toledo-livia)

---

⭐ Obrigada pela oportunidade! Espero que gostem do projeto e fico à disposição para dúvidas ou melhorias.
