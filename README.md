# 🌿 Saúde Total — Landing Page (Página Ponte WhatsApp)

Landing page de alta conversão para captação de leads via **grupo VIP do WhatsApp**, focada no nicho de **Saúde e Bem-Estar**.

> **Slogan:** *Sua fonte de saúde integral.*

---

## 🎯 Objetivo

Redirecionar tráfego (Meta Ads, Google Ads, orgânico) para o grupo VIP no WhatsApp:
`https://chat.whatsapp.com/JpEoAEGW6SX6jm6wxqq0iV?s=cl&p=a&ilr=1`

---

## ✨ Características

- ✅ **Mobile First** — otimizada para 95% do tráfego vindo de smartphones
- ✅ **Design premium** — azul marinho escuro (#111A2E) + dourado suave (#C5A059)
- ✅ **CTA de alta conversão** — botão verde WhatsApp com efeito pulsante
- ✅ **Elementos de confiança** — cadeado de segurança + escassez (vagas limitadas)
- ✅ **CTA flutuante** aparece após scroll no mobile
- ✅ **Performance** — HTML/CSS/JS puros, sem frameworks pesados
- ✅ **SEO / Open Graph** — pronto para compartilhamento em redes sociais
- ✅ **Acessível** — respeita `prefers-reduced-motion`, ARIA labels
- ✅ **Preparado para tracking** — pontos de integração com Meta Pixel e Google Analytics

---

## 📁 Estrutura de Arquivos

```
saude-total/
├── index.html          # Página principal
├── styles.css          # Estilos completos (mobile-first + responsivo)
├── script.js           # JS de tracking e comportamento
├── README.md           # Este arquivo
└── assets/
    ├── logo.png        # Logo Saúde Total
    └── banner.png      # Banner horizontal
```

---

## 🚀 Como publicar no GitHub Pages

1. **Crie um repositório** no GitHub (ex.: `saude-total`).
2. **Envie os arquivos** deste projeto para o repositório (via web ou `git push`).
3. No repositório, acesse **Settings → Pages**.
4. Em **Source**, selecione **Deploy from a branch** → escolha `main` e pasta `/ (root)`.
5. Salve. Em ~1 minuto seu site estará em:
   `https://SEU-USUARIO.github.io/saude-total/`

### Comandos (via terminal, opcional):

```bash
cd saude-total
git init
git add .
git commit -m "feat: landing page Saúde Total"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/saude-total.git
git push -u origin main
```

---

## 🔧 Personalização Rápida

| O que alterar          | Onde                                     |
|------------------------|------------------------------------------|
| Link do WhatsApp       | `index.html` — buscar `chat.whatsapp.com`|
| Cores                  | `styles.css` — variáveis `:root`         |
| Textos / headline      | `index.html`                             |
| Logo / banner          | `assets/`                                |
| Meta Pixel / GA        | `script.js` — bloco de tracking          |

---

## 📊 Adicionando Meta Pixel (opcional)

No `<head>` do `index.html`, insira o pixel do Facebook. O `script.js` já está preparado para disparar o evento **Lead** quando o CTA é clicado.

---

## 📝 Licença

Uso pessoal / comercial livre para o projeto Saúde Total.

---

**Feito com 💚 para transformar saúde em resultados.**
