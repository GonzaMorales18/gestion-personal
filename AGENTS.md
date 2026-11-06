# Instrucciones y Reglas del Proyecto

## Flujo de Trabajo y Git
- **Auto-Commit y Push:** Cada vez que se complete una nueva funcionalidad, corrección, refactorización o cambio solicitado por el usuario en el código (`index.html`, `script.txt`, etc.), se debe realizar automáticamente:
  1. `git add <archivos modificados>`
  2. `git commit -m "<tipo>(<alcance>): <descripción concisa>"`
  3. `git push origin main`
  De esta forma, el repositorio remoto siempre se mantiene sincronizado y con el árbol de trabajo limpio.
