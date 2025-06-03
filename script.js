// Sistema de armazenamento usando localStorage
let tasksData = [];
let currentFilters = {
    status: 'all',
    category: 'all',
    priority: 'all'
};

class TodoApp {
    constructor() {
        this.tasks = [];
        this.loadTasks();
        this.bindEvents();
        this.renderTasks();
        this.updateStats();
    }

    bindEvents() {
        document.getElementById('taskForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTask();
        });

        document.getElementById('searchBox').addEventListener('input', (e) => {
            this.searchTasks(e.target.value);
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleFilter(e);
            });
        });
    }

    addTask() {
        const title = document.getElementById('taskTitle').value.trim();
        const description = document.getElementById('taskDescription').value.trim();
        const category = document.getElementById('taskCategory').value;
        const priority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('taskDueDate').value;

        if (!title) {
            alert('Por favor, insira um título para a tarefa!');
            return;
        }

        const task = {
            id: Date.now(),
            title,
            description,
            category,
            priority,
            dueDate,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.tasks.unshift(task);
        this.saveTasks();
        this.renderTasks();
        this.updateStats();
        this.clearForm();

        // Animação de sucesso
        this.showNotification('✅ Tarefa criada com sucesso!', 'success');
    }

    editTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;

        // Preencher o formulário com os dados da tarefa
        document.getElementById('taskTitle').value = task.title;
        document.getElementById('taskDescription').value = task.description;
        document.getElementById('taskCategory').value = task.category;
        document.getElementById('taskPriority').value = task.priority;
        document.getElementById('taskDueDate').value = task.dueDate;

        // Remover a tarefa antiga
        this.deleteTask(id, false);

        // Scroll para o formulário
        document.querySelector('.add-task-form').scrollIntoView({ behavior: 'smooth' });
    }

    deleteTask(id, showConfirm = true) {
        if (showConfirm && !confirm('Tem certeza que deseja excluir esta tarefa?')) {
            return;
        }

        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.renderTasks();
        this.updateStats();

        if (showConfirm) {
            this.showNotification('🗑️ Tarefa excluída!', 'info');
        }
    }

    toggleComplete(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toISOString() : null;
            this.saveTasks();
            this.renderTasks();
            this.updateStats();

            const message = task.completed ? '✅ Tarefa concluída!' : '↩️ Tarefa reaberta!';
            this.showNotification(message, 'success');
        }
    }

    handleFilter(e) {
        const btn = e.target;
        const filterType = btn.dataset.type;
        const filterValue = btn.dataset.filter;

        // Atualizar botões ativos
        document.querySelectorAll(`[data-type="${filterType}"]`).forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');

        // Aplicar filtro
        currentFilters[filterType] = filterValue;
        this.renderTasks();
    }

    searchTasks(query) {
        this.renderTasks(query);
    }

    getFilteredTasks(searchQuery = '') {
        let filtered = this.tasks;

        // Filtro por status
        if (currentFilters.status !== 'all') {
            filtered = filtered.filter(task => {
                return currentFilters.status === 'completed' ? task.completed : !task.completed;
            });
        }

        // Filtro por categoria
        if (currentFilters.category !== 'all') {
            filtered = filtered.filter(task => task.category === currentFilters.category);
        }

        // Filtro por prioridade
        if (currentFilters.priority !== 'all') {
            filtered = filtered.filter(task => task.priority === currentFilters.priority);
        }

        // Busca por texto
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(task => 
                task.title.toLowerCase().includes(query) ||
                task.description.toLowerCase().includes(query)
            );
        }

        return filtered;
    }

    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;
        const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('pendingTasks').textContent = pending;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('completionRate').textContent = `${completionRate}%`;
    }

    loadTasks() {
        try {
            const savedTasks = localStorage.getItem('tasks');
            this.tasks = savedTasks ? JSON.parse(savedTasks) : [];
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
            this.tasks = [];
        }
    }

    saveTasks() {
        try {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        } catch (error) {
            console.error('Erro ao salvar tarefas:', error);
        }
    }

    clearForm() {
        document.getElementById('taskForm').reset();
    }

    getCategoryLabel(category) {
        const labels = {
            'pessoal': 'Pessoal',
            'trabalho': 'Trabalho',
            'estudos': 'Estudos',
            'saude': 'Saúde',
            'compras': 'Compras',
            'outros': 'Outros'
        };
        return labels[category] || 'Outros';
    }

    getCategoryIcon(category) {
        const icons = {
            'pessoal': '🏠',
            'trabalho': '💼',
            'estudos': '📚',
            'saude': '🏥',
            'compras': '🛒',
            'outros': '📌'
        };
        return icons[category] || '📌';
    }

    getPriorityLabel(priority) {
        const labels = {
            'high': 'Alta',
            'medium': 'Média',
            'low': 'Baixa'
        };
        return labels[priority] || 'Baixa';
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    renderTasks(searchQuery = '') {
        const tasksList = document.getElementById('tasksList');
        const filteredTasks = this.getFilteredTasks(searchQuery);

        if (filteredTasks.length === 0) {
            tasksList.innerHTML = `
                <div class="empty-state">
                    <div style="font-size: 4rem; margin-bottom: 20px;">🔍</div>
                    <h3>Nenhuma tarefa encontrada</h3>
                    <p>${searchQuery ? 'Tente buscar por outros termos' : 'Comece criando sua primeira tarefa!'}</p>
                </div>
            `;
            return;
        }

        // Ordenar tarefas: não concluídas primeiro, depois por prioridade e data
        const sortedTasks = filteredTasks.sort((a, b) => {
            if (a.completed !== b.completed) {
                return a.completed ? 1 : -1;
            }
            
            const priorityOrder = { high: 0, medium: 1, low: 2 };
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            }
            
            return new Date(a.createdAt) - new Date(b.createdAt);
        });

        tasksList.innerHTML = sortedTasks.map(task => {
            const isOverdue = isTaskOverdue(task);
            const overdueClass = isOverdue ? 'style="border-left-color: #dc2626 !important; background-color: #fef2f2;"' : '';
            
            return `
                <div class="task-item ${task.completed ? 'completed' : ''} priority-${task.priority}" ${overdueClass}>
                    <div class="task-header">
                        <div>
                            <div class="task-title">
                                ${isOverdue ? '⚠️ ' : ''}${task.title}
                                <span class="priority-badge priority-${task.priority}-badge">${this.getPriorityLabel(task.priority)}</span>
                            </div>
                            <span class="task-category">${this.getCategoryIcon(task.category)} ${this.getCategoryLabel(task.category)}</span>
                        </div>
                        <div class="task-actions">
                            <button class="action-btn btn-complete" onclick="app.toggleComplete(${task.id})" title="${task.completed ? 'Reabrir tarefa' : 'Marcar como concluída'}">
                                ${task.completed ? '↩️' : '✅'}
                            </button>
                            <button class="action-btn btn-edit" onclick="app.editTask(${task.id})" title="Editar tarefa">✏️</button>
                            <button class="action-btn btn-delete" onclick="app.deleteTask(${task.id})" title="Excluir tarefa">🗑️</button>
                        </div>
                    </div>
                    
                    ${task.description ? `<div class="task-description">${task.description}</div>` : ''}
                    
                    <div class="task-meta">
                        <span>📅 Criada: ${this.formatDate(task.createdAt)}</span>
                        ${task.dueDate ? `<span ${isOverdue ? 'style="color: #dc2626; font-weight: 600;"' : ''}>⏰ ${isOverdue ? 'Venceu em' : 'Vence em'}: ${this.formatDate(task.dueDate + 'T00:00:00')}</span>` : ''}
                        ${task.completed && task.completedAt ? `<span style="color: #10b981;">✅ Concluída: ${this.formatDate(task.completedAt)}</span>` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Funções globais para backup
function exportTasks() {
    const dataStr = JSON.stringify(app.tasks, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tarefas-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    app.showNotification('📤 Backup exportado com sucesso!', 'success');
}

function importTasks(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedTasks = JSON.parse(e.target.result);
            if (Array.isArray(importedTasks)) {
                if (confirm('Deseja substituir todas as tarefas existentes ou adicionar às existentes?\n\nOK = Substituir tudo\nCancelar = Adicionar às existentes')) {
                    app.tasks = importedTasks;
                } else {
                    // Adicionar IDs únicos para evitar conflitos
                    const newTasks = importedTasks.map(task => ({
                        ...task,
                        id: Date.now() + Math.random()
                    }));
                    app.tasks = [...app.tasks, ...newTasks];
                }
                app.saveTasks();
                app.renderTasks();
                app.updateStats();
                app.showNotification('📥 Tarefas importadas com sucesso!', 'success');
            } else {
                throw new Error('Formato inválido');
            }
        } catch (error) {
            app.showNotification('❌ Erro ao importar arquivo. Verifique o formato.', 'error');
        }
    };
    reader.readAsText(file);
    
    // Limpar o input
    event.target.value = '';
}

function clearAllTasks() {
    if (confirm('⚠️ Tem certeza que deseja excluir TODAS as tarefas?\n\nEsta ação não pode ser desfeita!')) {
        app.tasks = [];
        app.saveTasks();
        app.renderTasks();
        app.updateStats();
        app.showNotification('🗑️ Todas as tarefas foram excluídas!', 'info');
    }
}

// Função para detectar se a tarefa está vencida
function isTaskOverdue(task) {
    if (!task.dueDate || task.completed) return false;
    const today = new Date();
    const dueDate = new Date(task.dueDate + 'T23:59:59');
    return dueDate < today;
}

// Inicializar aplicação
let app;
document.addEventListener('DOMContentLoaded', function() {
    app = new TodoApp();
});

// Atalhos de teclado
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + N para nova tarefa
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        document.getElementById('taskTitle').focus();
    }
    
    // Ctrl/Cmd + F para buscar
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        document.getElementById('searchBox').focus();
    }
    
    // ESC para limpar busca
    if (e.key === 'Escape') {
        const searchBox = document.getElementById('searchBox');
        if (searchBox.value) {
            searchBox.value = '';
            app.renderTasks();
        }
    }
});
