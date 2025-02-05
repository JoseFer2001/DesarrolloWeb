# Plantilla de Inicio Next

Esta plantilla (Nodo 22) es un punto de partida para crear aplicaciones con Next.js, React y TypeScript. Incluye un conjunto de dependencias preconfiguradas para ayudarte a comenzar rápidamente.

## Dependencias Incluidas

- Next
- Shadcn (Se pueden agregar componentes de UI y se integra con V0)
- Linter (eslint) que se corre con pnpm run lint
- Formateador (prettier) que se corre con pnpm run fmt
- Tailwind
- Estructura de carpetas y fuentes, orden, etc.

## Características Faltantes

Esta plantilla es solo un punto de partida y no incluye todo. Aquí hay algunas cosas que podrías querer agregar:

- **Layouts**: Componentes de diseño comunes y SEO para tu aplicación.
- **Conexión a Backend**: Recomendable Supabase si es una estructura de BD relacional y Firebase si es NoSQL.

---

Estructura de Carpetas:

- public: Lo que es visible en toda la aplicación. Puede tener Favicon (ícono de la tab de la ventana), entre otras imágenes
- src: El código fuente de la app
  - actions: Para comunicación con un backend
  - app: la carpeta raíz desde donde se renderiza la app
    - providers: tiene un componente para scroll suave
    - favicon
    - layout.tsx: el esqueleto base de la app
    - page.tsx: la página raiz de la app o el home
  - assets: Aquí van imágenes
  - components: carpeta en donde van los componentes de Shadcn o V0
  - db: para archivos de conexión de base de datos y esquemas
  - lib: para archivos de definición de tipos de typescript
  - styles: para hoja principal de css y fuentes
  - utils: para archivos varios de javascript o typescript

Además hay archivos en la raíz de la carpeta que son de configuración.

El más importante es el de tailwind.config.ts y el resto ya están pre-configurados o se actualizan automáticamente.
