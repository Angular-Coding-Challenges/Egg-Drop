import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

// Signals for tracking state
eggs = signal(2);     // Number of eggs
floors = signal(100);  // Number of floors
drops = signal(0);     // Track number of drops

// Function to simulate the egg drop problem
eggDrop() {
  const eggs = this.eggs();
  const floors = this.floors();
  const result = this.calculateDrops(eggs, floors);
  this.drops.set(result);
}

// Calculate the minimum number of drops
calculateDrops(eggs: number, floors: number): number {
  const dp: number[][] = Array.from({ length: eggs + 1 }, () => Array(floors + 1).fill(0));

  for (let i = 1; i <= eggs; i++) {
    for (let j = 1; j <= floors; j++) {
      dp[i][j] = j;
    }
  }

  for (let i = 2; i <= eggs; i++) {
    for (let j = 2; j <= floors; j++) {
      dp[i][j] = Number.MAX_SAFE_INTEGER;
      for (let x = 1; x <= j; x++) {
        const res = 1 + Math.max(dp[i - 1][x - 1], dp[i][j - x]);
        dp[i][j] = Math.min(dp[i][j], res);
      }
    }
  }

  return dp[eggs][floors];
}

// Handle input safely
onInputChange(event: Event) {
  const inputValue: string = (event.target as HTMLInputElement)?.value || '0'; // Always a string
  this.floors.set(parseInt(inputValue, 10)); // Set signal value safely
}
}
