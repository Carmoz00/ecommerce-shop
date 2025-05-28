# Ecommerce-Shop

**Autore**: Carmelo Panepinto
**Data**: 28/05/2025
**Versione**: 0.0.1
**Corso**: Angular - ITS Steve Jobs Web and Mobile development / Corso 28

**Ecommerce-Shop** è un progetto di e-commerce sviluppato con **Angular 19** che integra molteplici funzionalità fondamentali per un’app moderna. L’obiettivo è dimostrare l’uso di:

- **Componenti standalone** per modularità e riuso
- **Routing** per navigazione multipagina
- **Servizi** (HttpClient, BehaviorSubject) per gestione dati e stato
- **Reactive Forms** per checkout e login con validazioni
- **Autenticazione mock** e guardie di rotta per accesso protetto
- **Carrello** con servizio condiviso e contatore
- **Stili SCSS**: variabili, mixin, tema uniforme, responsive
- **Lifecycle hooks** (`ngOnChanges`, `ngDoCheck`, `ngAfterViewInit`, `ngOnDestroy`) e `@ViewChild` per esempi didattici
- **Chiamata HTTP** a JSONPlaceholder con pipe `async` per demo REST

## Struttura del progetto

```
src/
├── app/
│ ├── components/ # Header, Footer, ProductItem, ChangeDetector, LifecycleDemo
│ ├── pages/ # Home, Products, Checkout, Login, Posts
│ ├── services/ # ProductService, CartService, AuthService, PostService
│ ├── guards/ # AuthGuard
│ ├── models/ # Product, Post
│ ├── app.routes.ts
│ └── app.component.\*
├── assets/
│ ├── images/
│ └── data/ # products.json
└── styles/ # variabili e mixin globali
```

## Funzionalità implementate

| Funzionalità                | Tecnologie/Hook impiegati                                                  | Scopo                                                                                          |
| --------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Setup e struttura modulare  | Angular CLI, standalone components                                         | Inizializzazione del progetto con SCSS e routing                                               |
| Layout base                 | HeaderComponent, FooterComponent, `<router-outlet>`                        | Strutturare header, footer, area contenuti                                                     |
| Navigazione                 | `provideRouter`, RouterLink, RouterLinkActive                              | Gestione rotte Home, Products, Checkout, Login, Posts                                          |
| Lista prodotti              | `ProductService` (HttpClient), `*ngFor`, `async`                           | Caricamento da `products.json`, visualizzazione griglia                                        |
| Carrello                    | `CartService` (BehaviorSubject), badge nel header                          | Aggiunta prodotti e conteggio articoli                                                         |
| Reactive Forms              | `ReactiveFormsModule`, FormGroup, Validators                               | Form di checkout con validazioni inline                                                        |
| Autenticazione mock         | `AuthService` (BehaviorSubject), AuthGuard, queryParams                    | Proteggere rotta `/checkout` e gestire login/logout                                            |
| Stili e responsive design   | SCSS: variabili, mixin `respond-to`, flex/grid, `ngClass`                  | Tema uniforme, layout adattivo, hover effects                                                  |
| Lifecycle hooks & ViewChild | `ngOnChanges`, `ngDoCheck`, `ngAfterViewInit`, `ngOnDestroy`, `@ViewChild` | Esempi di monitoraggio cambi input, custom change detection, manipolazione view, cleanup timer |
| Demo REST API               | `PostService`, HttpClient, `Observable`, pipe `async`                      | Chiamata a JSONPlaceholder, gestione asincrona dati                                            |

## Come eseguire il progetto

1. **Clona il repository**

   ```bash
   git clone https://github.com/<tuo-username>/ecommerce-shop.git
   cd ecommerce-shop
   ```

2. **Installa le dipendenze**

   ```bash
   npm install
   ```

3. **Avvia il server**

   ```bash
   ng serve
   ```

4. **Naviga al sito [http://localhost:4200](http://localhost:4200)**

Ecommerce-Shop è un progetto dimostrativo che percorre un’ampia gamma di concetti Angular, ideale per chi vuole approfondire architettura, gestione dello stato, reattività e best practice di styling e lifecycle.
