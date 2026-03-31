// Arquivo: sw.js
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
    // Permite que o app funcione
});

### Passo 3: Criar o arquivo de Configuração (Manifest)
Ainda na mesma pasta, crie mais um arquivo de texto, cole o código abaixo e salve com o nome exato de **`manifest.json`**

```json
{
  "name": "Total Saúde - Plataforma Corporativa",
  "short_name": "Total Saúde",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ea580c",
  "theme_color": "#ea580c",
  "icons": [
    {
      "src": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=192&q=80",
      "sizes": "192x192",
      "type": "image/jpeg",
      "purpose": "any maskable"
    },
    {
      "src": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=512&q=80",
      "sizes": "512x512",
      "type": "image/jpeg",
      "purpose": "any maskable"
    }
  ]
}

### O que fazer agora?
Sua pasta no computador deve ficar exatamente assim, com esses 3 arquivos:
1. 📄 `index.html` (com a modificação que fiz acima)
2. 📄 `sw.js`
3. 📄 `manifest.json`

Pegue essa pasta inteira e arraste novamente para o **Netlify**. Agora, quando você abrir o link gerado no celular e passar pelo processo da nossa tela, o navegador reconhecerá os arquivos físicos de segurança e **forçará a instalação real no sistema do celular!**
