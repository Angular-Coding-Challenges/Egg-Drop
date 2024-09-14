# EggDrop

**Problem Statement:**

*You are given two identical eggs and access to a building with 100 floors.*

- **Objective:** Determine the highest floor from which an egg can be dropped without breaking.
- **Constraints:**
  - An egg that survives a fall can be used again.
  - An egg that breaks on impact cannot be used again.
  - The eggs are identical in every way.
- **Goal:** Devise a strategy that minimizes the number of egg drops in the worst-case scenario.

**Question:**

*How would you approach this problem? Please design an algorithm or strategy to determine the critical floor with the least number of drops possible, and explain your reasoning.*


# Versions Used When This Project Was Generated & Extra Packages Installed
*Angular CLI: 18.2.4*

*Angular Material 18.2.4*

*Node: 20.12.0*

*Package Manager: npm 10.5.0*

# Angular Material 18.2.4 Overview

Angular Material provides a set of reusable, well-tested, and accessible UI components based on Material Design. Here's a quick overview of the main components and features:

## Form Controls

- **Autocomplete**: `<mat-autocomplete>`
- **Checkbox**: `<mat-checkbox>`
- **Datepicker**: `<mat-datepicker>`
- **Form field**: `<mat-form-field>`
- **Input**: `<input matInput>`
- **Radio button**: `<mat-radio-button>`
- **Select**: `<mat-select>`
- **Slider**: `<mat-slider>`
- **Slide toggle**: `<mat-slide-toggle>`

## Navigation

- **Menu**: `<mat-menu>`
- **Sidenav**: `<mat-sidenav>`
- **Toolbar**: `<mat-toolbar>`
- **Tabs**: `<mat-tab-group>`

## Layout

- **Card**: `<mat-card>`
- **Divider**: `<mat-divider>`
- **Expansion Panel**: `<mat-expansion-panel>`
- **Grid list**: `<mat-grid-list>`
- **List**: `<mat-list>`
- **Stepper**: `<mat-stepper>`
- **Tree**: `<mat-tree>`

## Buttons & Indicators

- **Button**: `<button mat-button>`
- **Button toggle**: `<mat-button-toggle>`
- **Badge**: `matBadge`
- **Chips**: `<mat-chip>`
- **Icon**: `<mat-icon>`
- **Progress bar**: `<mat-progress-bar>`
- **Progress spinner**: `<mat-progress-spinner>`
- **Ripples**: `matRipple`

## Popups & Modals

- **Bottom Sheet**: `MatBottomSheet`
- **Dialog**: `MatDialog`
- **Snackbar**: `MatSnackBar`
- **Tooltip**: `matTooltip`

## Data Table

- **Paginator**: `<mat-paginator>`
- **Sort header**: `matSort`
- **Table**: `<mat-table>`

## CDK (Component Dev Kit)

- Accessibility
- Bidirectionality
- Drag and Drop
- Layout
- Observers
- Overlay
- Platform
- Portal
- Scrolling
- Text field

## Usage Example

```typescript
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
  ]
})
export class MyModule { }
```

```html
<mat-card>
  <mat-card-title>My Card</mat-card-title>
  <mat-card-content>
    This is the content of my card.
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>OK</button>
  </mat-card-actions>
</mat-card>
```

For detailed documentation and examples, visit the [official Angular Material documentation](https://material.angular.io/).

