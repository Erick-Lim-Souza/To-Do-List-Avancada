# 📋 To-Do List Avançada

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![LocalStorage](https://img.shields.io/badge/LocalStorage-FF6B6B?style=for-the-badge&logo=web&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

> 🎯 Uma aplicação completa de gerenciamento de tarefas com interface moderna, filtros avançados e sistema de backup robusto.

## 🌟 **Demonstração**

[To-Do List Preview](https://to-do-list-avancada.vercel.app/)

![image](https://github.com/user-attachments/assets/c19cac57-550e-45d4-b8b1-41cc48d81587)


## 🚀 **Funcionalidades Principais**

### ✅ **Gerenciamento de Tarefas**
- 📝 **Criar tarefas** com título, descrição, categoria, prioridade e data de vencimento
- ✏️ **Editar tarefas** existentes com preenchimento automático do formulário
- 🗑️ **Excluir tarefas** com confirmação de segurança
- ✔️ **Marcar como concluída** ou reabrir tarefas
- ⚠️ **Detecção automática** de tarefas vencidas com destaque visual

### 🎯 **Sistema de Categorização**
- 🏠 **Pessoal** - Tarefas da vida pessoal
- 💼 **Trabalho** - Atividades profissionais
- 📚 **Estudos** - Aprendizado e educação
- 🏥 **Saúde** - Consultas e cuidados médicos
- 🛒 **Compras** - Lista de compras e aquisições
- 📌 **Outros** - Tarefas diversas

### 🎨 **Níveis de Prioridade**
- 🔴 **Alta** - Tarefas urgentes e importantes
- 🟡 **Média** - Tarefas importantes mas não urgentes
- 🟢 **Baixa** - Tarefas de menor prioridade

### 🔍 **Sistema de Filtros e Busca**
- **Filtros por Status**: Todas, Pendentes, Concluídas
- **Filtros por Categoria**: Todos os tipos de categoria
- **Filtros por Prioridade**: Todos os níveis de prioridade
- **Busca em Tempo Real**: Pesquisa por título e descrição
- **Combinação de Filtros**: Use múltiplos filtros simultaneamente

### 📊 **Dashboard e Estatísticas**
- 📈 **Total de Tarefas** - Contador geral
- ⏳ **Tarefas Pendentes** - Ainda não concluídas
- ✅ **Tarefas Concluídas** - Já finalizadas
- 📊 **Taxa de Conclusão** - Porcentagem de produtividade

### 💾 **Sistema de Backup Completo**
- 📤 **Exportar para JSON** - Backup com data no nome do arquivo
- 📥 **Importar do JSON** - Restaurar ou adicionar tarefas
- 🗑️ **Limpar Tudo** - Reset completo com confirmação
- 💽 **Auto-Save** - Salvamento automático no localStorage

## 🛠️ **Tecnologias Utilizadas**

- **HTML5** - Estrutura semântica e moderna
- **CSS3** - Estilos avançados com Flexbox e Grid
- **JavaScript ES6+** - Lógica de aplicação e POO
- **LocalStorage API** - Persistência de dados local
- **FileReader API** - Import/Export de arquivos JSON
- **CSS Grid & Flexbox** - Layout responsivo
- **CSS Animations** - Transições e efeitos visuais

## 📱 **Design Responsivo**

### 🖥️ **Desktop (1200px+)**
- Layout em duas colunas com sidebar
- Dashboard completo com estatísticas
- Formulário fixo na lateral

### 📱 **Mobile (768px-)**
- Layout em coluna única
- Sidebar reposicionada
- Interface otimizada para touch
- Botões maiores e mais acessíveis

## ⚡ **Instalação e Uso**

### 📋 **Pré-requisitos**
- Navegador web moderno (Chrome 60+, Firefox 55+, Safari 12+)
- Suporte a ES6+ e LocalStorage

### 🚀 **Instalação**

1. **Clone ou baixe o projeto:**
```bash
git clone https://github.com/Erick-Lim-Souza/To-Do-List-Avancada
cd todo-list-avancada
```

2. **Abra o arquivo HTML:**
```bash
# Método 1: Abrir diretamente no navegador
open index.html

# Método 2: Usar um servidor local
python -m http.server 8000
# Acesse: http://localhost:8000
```

3. **Comece a usar:**
   - A aplicação carregará com tarefas de exemplo
   - Crie sua primeira tarefa no formulário lateral
   - Explore os filtros e funcionalidades

## 🎮 **Como Usar**

### ➕ **Criando uma Nova Tarefa**
1. Preencha o **título** (obrigatório)
2. Adicione uma **descrição** detalhada (opcional)
3. Selecione a **categoria** apropriada
4. Defina o nível de **prioridade**
5. Escolha uma **data de vencimento** (opcional)
6. Clique em **"Criar Tarefa"**

### 🔍 **Filtrando e Buscando**
- Use os **botões de filtro** na sidebar para filtrar por:
  - Status (Todas/Pendentes/Concluídas)
  - Categoria (Pessoal/Trabalho/Estudos/etc.)
  - Prioridade (Alta/Média/Baixa)
- Digite na **barra de busca** para encontrar tarefas específicas
- **Combine filtros** para resultados mais precisos

### ✏️ **Editando Tarefas**
1. Clique no botão **✏️ Editar** na tarefa desejada
2. O formulário será preenchido automaticamente
3. Faça as alterações necessárias
4. Clique em **"Criar Tarefa"** para salvar

### 💾 **Backup e Restauração**
- **Exportar**: Clique em "📤 Exportar JSON" para baixar suas tarefas
- **Importar**: Clique em "📥 Importar JSON" e selecione seu arquivo
- **Limpar**: Use "🗑️ Limpar Tudo" para reset completo

## ⌨️ **Atalhos de Teclado**

| Atalho | Função |
|--------|---------|
| `Ctrl/Cmd + N` | Focar no campo de nova tarefa |
| `Ctrl/Cmd + F` | Focar na barra de busca |
| `ESC` | Limpar busca atual |

## 🎨 **Personalização**

### 🎯 **Cores e Temas**
- Modifique as variáveis CSS no topo do arquivo para alterar cores
- Gradientes principais: `#667eea` → `#764ba2`
- Cores de prioridade: Vermelho (Alta), Amarelo (Média), Verde (Baixa)

### 🏷️ **Categorias Personalizadas**
Para adicionar novas categorias, edite o HTML do `<select id="taskCategory">`:

```html
<option value="nova-categoria">🎯 Nova Categoria</option>
```

E adicione os ícones correspondentes no JavaScript:

```javascript
const icons = {
    'nova-categoria': '🎯',
    // ... outras categorias
};
```

## 📊 **Estrutura do Projeto**

```
todo-list-avancada/
│
├── index.html              # Arquivo principal
├── README.md              # Este arquivo
├── assets/               # (opcional)
│   ├── screenshots/      # Capturas de tela
│   └── demo.gif         # GIF demonstrativo
└── backup-examples/     # Exemplos de backup JSON
    └── tarefas-exemplo.json
```

## 🔧 **Estrutura de Dados**

### 📝 **Formato de Tarefa**
```javascript
{
    "id": 1640995200000,
    "title": "Fazer compras",
    "description": "Comprar ingredientes para o jantar",
    "category": "compras",
    "priority": "medium",
    "dueDate": "2025-05-26",
    "completed": false,
    "createdAt": "2025-05-25T10:30:00.000Z",
    "completedAt": null
}
```

### 📤 **Formato de Backup JSON**
```json
[
    {
        "id": 1640995200000,
        "title": "Exemplo de Tarefa",
        "description": "Descrição da tarefa...",
        "category": "trabalho",
        "priority": "high",
        "dueDate": "2025-05-30",
        "completed": false,
        "createdAt": "2025-05-25T10:30:00.000Z",
        "completedAt": null
    }
]
```

## 🚨 **Limitações Conhecidas**

- **LocalStorage**: Limitado a ~5-10MB dependendo do navegador
- **Backup Manual**: Não há sincronização automática na nuvem
- **Navegadores Antigos**: Requer suporte a ES6+ e APIs modernas

## 🔮 **Roadmap Futuro**

### 🎯 **Versão 2.0**
- 🌐 **Sincronização na Nuvem** (Firebase/Supabase)
- 👥 **Compartilhamento de Listas** entre usuários
- 🔔 **Notificações Push** para tarefas vencidas
- 📈 **Relatórios Avançados** e gráficos
- 🎨 **Temas Personalizáveis** (claro/escuro)

### 🛠️ **Melhorias Técnicas**
- ⚡ **Service Worker** para funcionalidade offline
- 📱 **PWA (Progressive Web App)** instalável
- 🎭 **Drag & Drop** para reordenar tarefas
- 🔍 **Busca Avançada** com operadores
- 📆 **Integração com Calendário**

## 🤝 **Contribuição**

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um **Pull Request**

### 🐛 **Reportando Bugs**
- Use as **Issues** do GitHub
- Inclua **steps to reproduce** o problema
- Adicione **screenshots** se necessário
- Especifique **navegador e versão**

## 📄 **Licença**

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - Copyright (c) 2025
Você pode usar, modificar e distribuir livremente.
```

## 👨‍💻 **Autor**

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/Erick-Lim-Souza)
- LinkedIn: [Seu Perfil](https://www.linkedin.com/in/erick-souza-70404686/)
- Email: erick.devzone@gmail.com

## 🙏 **Agradecimentos**

- 🎨 **Design inspiration**: Material Design e Tailwind CSS
- 📚 **Recursos educativos**: MDN Web Docs e JavaScript.info
- 🎯 **Feedback da comunidade**: GitHub Issues e Pull Requests

## 📊 **Estatísticas do Projeto**

![GitHub stars](https://img.shields.io/github/stars/Erick-Lim-Souza/todo-list-avancada?style=social)
![GitHub forks](https://img.shields.io/github/forks/Erick-Lim-Souza/todo-list-avancada?style=social)
![GitHub issues](https://img.shields.io/github/issues/Erick-Lim-Souza/todo-list-avancada)
![GitHub license](https://img.shields.io/github/license/Erick-Lim-Souza/todo-list-avancada)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

**💡 Tem uma ideia? Abra um Issue!**

**🤝 Quer contribuir? Faça um Pull Request!**

</div>

---

> 📱 **Dica**: Para melhor experiência, use o projeto em tela cheia e teste todas as funcionalidades interativas!

## Autor:
Erick de Lima Souza
- [Meu GitHub](https://github.com/Erick-Lim-Souza)
- [Meu Linkedin](https://www.linkedin.com/in/erick-souza-70404686/ "Meu LinKedin")
- [Meu perfil DIO.me](https://www.dio.me/users/erickdelimasouza "Meu perfil DIO.me")
- [Meu perfil Alura](https://cursos.alura.com.br/user/erickdelimasouza)
- [Meu perfil Rocketseat](https://app.rocketseat.com.br/me/ericksouza)
