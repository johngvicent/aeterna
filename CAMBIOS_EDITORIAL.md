# Informe de Cambios - Página Editorial

## Archivo Modificado
`src/pages/editorial.astro`

---

## Resumen de Cambios

Se agregaron estilos CSS elegantes y chic a la página editorial, manteniendo coherencia con los estilos globales del proyecto (`global.css`).

---

## Detalles de los Estilos Implementados

### 1. Estructura General (`main`)
- Ancho máximo de 1200px centrado
- Padding responsivo del 5%
- Espaciado interno de 4rem

### 2. Secciones
- Margen inferior de 5rem entre secciones
- Separador visual con borde inferior sutil (`#f0f0f0`)
- Animación de entrada `fadeInUp` secuencial

### 3. Tipografía de Encabezados

| Elemento | Fuente | Tamaño | Estilo |
|----------|--------|--------|--------|
| `h2` | Bodoni Moda | 2.5rem | Mayúsculas, espaciado 4px, línea decorativa roja |
| `h3` | Bodoni Moda | 1.8rem | Itálica, espaciado 2px |
| `h4` | Lato | 0.9rem | Mayúsculas, peso 300, color secundario |

### 4. Párrafos
- Fuente Lato a 1.05rem
- Interlineado de 1.9
- Texto justificado
- Ancho máximo de 800px centrado
- Color `--color-text-light`

### 5. Sección del Curador
- Fondo con gradiente sutil (#fafafa → #ffffff)
- Padding de 4rem
- Sombra suave (`box-shadow: 0 4px 30px rgba(0,0,0,0.03)`)
- **Imagen del curador:**
  - Tamaño 220x220px
  - Borde circular con marco de 3px
  - Sombra pronunciada
  - Efecto hover con escalado y aumento de sombra

### 6. Banner de Contacto (`.contact-banner`)
- Fondo oscuro con gradiente (`#1a1a1a` → `#2a2a2a`)
- Texto en blanco
- Línea decorativa dorada bajo el título
- **Iconos sociales:**
  - Tamaño 40x40px
  - Filtro invertido (blanco)
  - Opacidad 0.7 → 1 en hover
  - Efecto de elevación (-5px) en hover
  - Tinte dorado en hover

### 7. Sección Newsletter
- Fondo gris claro (#fafafa)
- Padding de 4rem
- Centrado

### 8. Sección de Ubicación
- Mapa envuelto en contenedor con sombra
- Iframe al 100% de ancho
- Border-radius sutil

### 9. Elemento Decorativo
- Comillas gigantes (8rem) en la primera sección
- Color muy claro (#f5f5f5) como fondo decorativo
- Posicionado con z-index negativo

---

## Animaciones

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

- Duración: 0.8s
- Retraso secuencial por sección (0.2s incrementos)

---

## Diseño Responsivo (≤768px)

| Elemento | Adaptación |
|----------|------------|
| `main` | Padding reducido a 2rem |
| `h2` | Tamaño 1.8rem, espaciado 2px |
| `h3` | Tamaño 1.4rem |
| Imagen curador | Centrada, sin float |
| Banner contacto | Padding 2rem, iconos 32px |
| Mapa | Altura reducida a 300px |

---

## Variables CSS Utilizadas

| Variable | Uso |
|----------|-----|
| `--color-text` | Títulos principales |
| `--color-text-light` | Párrafos |
| `--color-secondary` | Subtítulos (h4) |
| `--color-accent` | Líneas decorativas (#8B0000) |
| `--color-hover` | Efectos hover dorados (#B59410) |
| `--transition` | Transiciones suaves |

---

## Coherencia con Estilos Globales

✅ Mismas fuentes (Bodoni Moda + Lato)  
✅ Misma paleta de colores  
✅ Mismo estilo de transiciones  
✅ Estética minimalista y elegante  
✅ Espaciados consistentes  

---

*Informe generado el 1 de enero de 2026*
