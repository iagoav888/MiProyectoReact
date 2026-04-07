# Coruña Vibra

Coruña Vibra es una propuesta de interfaz para explorar planes culturales en A Coruña. El proyecto está desarrollado con React y plantea una home editorial con secciones de eventos destacados, colecciones temáticas, espacios relevantes y navegación interna.

## Objetivo del proyecto

El objetivo de este proyecto es construir una aplicación frontend con una base visual cuidada, una estructura de componentes clara y una experiencia de navegación sencilla. Está planteado como un proyecto de iniciación en React con enfoque de portfolio, buscando equilibrio entre diseño, organización del código y progresión funcional.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS

## Funcionalidades actuales

- Home estructurada en varias secciones
- Navegación interna entre bloques de contenido
- Sección de eventos destacados
- Filtro por categoría
- Búsqueda por texto en eventos
- Resumen visual del estado de filtros
- Sección editorial de colecciones
- Sección de espacios destacados
- Bloque final de llamada a la acción
- Diseño responsive para desktop, tablet y móvil
- Mejora de estados interactivos y foco visible

## Estructura del proyecto

```bash
src/
  components/
    CollectionsSection.tsx
    CtaSection.tsx
    FeaturedEventCard.tsx
    FeaturedSection.tsx
    HeroOverviewSection.tsx
    VenuesSection.tsx
  data/
    curatedCollections.ts
    featuredEvents.ts
    featuredVenues.ts
  App.tsx
  App.css
  main.tsx
  index.css
```

## Cómo ejecutar el proyecto

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

3. Abre en el navegador la URL que indique Vite, normalmente:

```bash
http://localhost:5173/
```

## Posibles siguientes mejoras

- Añadir datos reales desde una API o fuente externa
- Incorporar páginas o rutas internas
- Permitir guardar favoritos
- Mejorar accesibilidad semántica y navegación por teclado
- Añadir tests de componentes
- Incorporar animaciones más refinadas
- Crear una vista detallada para eventos o espacios

## Autor

Proyecto desarrollado por Iago como práctica de frontend con React, orientado a seguir creciendo en diseño de interfaces, organización de componentes y desarrollo web moderno.
