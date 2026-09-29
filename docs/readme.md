# Comandos Git

Estos son los comandos utilizados para trabajar en la rama `jenna`:

1. `git checkout -b jenna`
   Crea la rama `jenna` y cambia a ella. En el comando original faltaba la `t` de `checkout` (`git checkou -b jenna`), por lo que esa forma daría error.

2. `git add .`
   Añade al área de preparación los cambios del directorio actual y sus subdirectorios, excepto los archivos ignorados por Git.

3. `git commit -m "primeros cambios"`
   Guarda los cambios preparados en un commit con el mensaje `primeros cambios`.

4. `git push -u origin jenna`
   Publica la rama `jenna` en el remoto `origin` y configura esa rama remota como seguimiento para futuros `push` y `pull`.

5.hola jenna 