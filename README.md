# Cassanova Site

## 🚀 Visão Geral do Projeto
Este projeto é uma experiência imersiva que une música e visual. Através de uma interface moderna, buscamos elevar a percepção artística do usuário.

---

### 🎨 Nova Interface e Ajustes Visuais

Para garantir que o nome **Cassanova** apareça completo em qualquer tela e adicionar o novo conceito artístico, utilize as seguintes definições no seu código principal:

#### 1. Ajuste de Tamanho (Responsividade)
Para que o nome não seja cortado, o estilo CSS deve ser atualizado para:
```css
h1.brand-name {
  font-size: clamp(2rem, 8vw, 5rem); /* Ajusta o tamanho automaticamente conforme a tela */
  text-align: center;
  letter-spacing: 2px;
}
