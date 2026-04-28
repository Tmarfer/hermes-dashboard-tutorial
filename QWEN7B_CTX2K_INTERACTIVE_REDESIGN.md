Para transformar a página longa em um app com sidebar e painéis ativos, podemos seguir os seguintes passos:

### Estrutura HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hermes Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app">
        <!-- Sidebar -->
        <nav class="sidebar">
            <ul>
                <li><a href="#" data-panel="overview">Overview</a></li>
                <li><a href="#" data-panel="local">Local</a></li>
                <li><a href="#" data-panel="ssh">SSH</a></li>
                <li><a href="#" data-panel="areas">Areas</a></li>
                <li><a href="#" data-panel="maintenance">Maintenance</a></li>
                <li><a href="#" data-panel="qa">QA</a></li>
            </ul>
        </nav>

        <!-- Main Content -->
        <div class="main-content">
            <div id="overview" class="panel active">
                <!-- Overview Content -->
            </div>
            <div id="local" class="panel">
                <!-- Local Content -->
            </div>
            <div id="ssh" class="panel">
                <!-- SSH Content -->
            </div>
            <div id="areas" class="panel">
                <!-- Areas Content -->
            </div>
            <div id="maintenance" class="panel">
                <!-- Maintenance Content -->
            </div>
            <div id="qa" class="panel">
                <!-- QA Content -->
            </div>
        </div>

        <!-- Drawer for Mobile -->
        <nav class="drawer">
            <ul>
                <li><a href="#" data-panel="overview">Overview</a></li>
                <li><a href="#" data-panel="local">Local</a></li>
                <li><a href="#" data-panel="ssh">SSH</a></li>
                <li><a href="#" data-panel="areas">Areas</a></li>
                <li><a href="#" data-panel="maintenance">Maintenance</a></li>
                <li><a href="#" data-panel="qa">QA</a></li>
            </ul>
        </nav>

        <!-- Modals -->
        <div class="modal" id="insecure-modal">
            <!-- Insecure Modal Content -->
        </div>
        <div class="modal" id="docker-9119-modal">
            <!-- Docker 9119 Modal Content -->
        </div>
        <div class="modal" id="address-in-use-modal">
            <!-- Address in Use Modal Content -->
        </div>
        <div class="modal" id="validation-modal">
            <!-- Validation Modal Content -->
        </div>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
```

### Estilo CSS (styles.css)

```css
/* Paleta de Cores */
:root {
    --parchment: #f8e9d7;
    --ivory: #fff0d4;
    --near-black: #333;
    --ter