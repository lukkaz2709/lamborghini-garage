# 🚗 Lamborghini App - React Native

Aplicação desenvolvida em **React Native** que apresenta uma vitrine de automóveis com informações detalhadas como **marca, modelo, imagem e preço**, permitindo navegação entre diferentes carros e opção de compra.

---

## 📌 Funcionalidades

- Carregamento automático de dados de um carro inicial (ID = 9).
- Exibição do **logótipo da aplicação**.
- Visualização de **detalhes do carro**:
  - Marca (exemplo: Lamborghini).
  - Nome do modelo (dinâmico via `carData`).
- Renderização de **imagens do carro** a partir de uma URL.
- **Botão de compra** (`BuyButton`).
- **Controlos de navegação**:
  - `<` → carro anterior.
  - `>` → carro seguinte.
  - Exibição do preço do carro atual.

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Hooks do React (`useState`, `useEffect`)
- Componentes base (`View`, `Text`, `Image`, `Button`)
- Possível integração com APIs para carregar dados de carros

## 🚀 Como Executar o Projeto

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/teu-usuario/car-showcase-app.git
   cd car-showcase-app
   ```

2. **Instalar dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Executar Metro Bundler**
   ```bash
   npx react-native start
   ```

4. **Rodar no emulador ou dispositivo**
   ```bash
   npx react-native run-android
   # ou
   npx react-native run-ios
   ```

---

## 📸 Exemplo de UI

*(Adiciona aqui uma captura de ecrã do app para melhor demonstração)*

---

## 📌 Notas Importantes

- O ficheiro `actions.ts` contém:
  - `loadCarData(id, setCarData)`: carrega dados de um carro específico.
  - `handleNextItem(carData, setCarData)`: passa para o próximo carro.
  - `handlePreviousItem(carData, setCarData)`: volta para o carro anterior.
- O botão `BuyButton` deve ser implementado separadamente (por exemplo, abrindo um modal ou redirecionando para checkout).
- A constante `CAR_ASSETS_BASE_URL` deve estar definida no projeto (exemplo: URL de imagens armazenadas em CDN).

---

## 🤝 Contribuição

1. Faça um **fork** do projeto.
2. Crie uma branch:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Faça commit das alterações:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie para a branch principal:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um **Pull Request**.

---


