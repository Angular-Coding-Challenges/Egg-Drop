# Egg Drop Problem Solver

This project is designed to help you understand how to solve the **Egg Dropping Problem** using **Dynamic Programming (DP)** in TypeScript. It explains the key concepts and approach, and walks you through the challenge of minimizing the number of attempts needed to find the critical floor.

## Problem Overview

Imagine you have a certain number of **eggs** and a building with multiple **floors**. Your goal is to determine the highest floor from which an egg can be dropped without breaking. If the egg breaks, you can’t use that egg again, but if it survives, it can be reused. The challenge is to minimize the **maximum number of attempts** needed to find this floor in the worst-case scenario.

### **Rules:**

1. If an egg breaks after being dropped, it can't be used again.
2. If the egg survives, you can drop it again from a higher floor.
3. The goal is to find the minimum number of attempts required to determine the critical floor.

---

## Solution Approach: Dynamic Programming

### What is Dynamic Programming?

Dynamic programming is a technique used to solve complex problems by breaking them down into simpler subproblems. It stores the results of these subproblems to avoid redundant calculations, making the overall solution more efficient.

In this challenge, we use **dynamic programming** to build a solution that reduces the number of redundant calculations when determining the number of attempts needed for different combinations of eggs and floors.

---

## Understanding the DP Table (2D Table)

To solve the problem using dynamic programming, we create a **2D table (matrix)**. This table will store the minimum number of attempts needed for each combination of eggs and floors.

### DP Table Structure

- **Rows:** Represent the number of eggs (`i` eggs).
- **Columns:** Represent the number of floors (`j` floors).
- **`dp[i][j]`:** This cell will store the minimum number of attempts needed for `i` eggs and `j` floors.

### Key Concepts:

- **Base Case for One Egg:** 
  - If you only have one egg, you must drop it from each floor starting from the lowest to the highest until it breaks or you find the critical floor. Therefore, the minimum number of attempts equals the number of floors. So, `dp[1][j] = j` (where `j` is the number of floors).
  
- **Base Case for One Floor:**
  - If there is only one floor (or zero floors), you only need one attempt (or zero attempts, respectively) to determine the result. Thus, `dp[i][1] = 1` and `dp[i][0] = 0` (where `i` is the number of eggs).

---

## Filling the DP Table

After initializing the base cases, the next step is to fill in the rest of the DP table by considering different numbers of eggs and floors.

### Filling Strategy:

1. **Loop Through Eggs and Floors:**
   - Start with 2 eggs and iterate through each floor count from 2 to `f` (the total number of floors).
   
2. **Try Dropping an Egg from Each Floor `k`:**
   - For each possible floor `k` (from 1 to `j` floors), calculate the number of attempts required.
   - If the egg **breaks** when dropped from floor `k`, you are left with `i-1` eggs and `k-1` floors to check.
   - If the egg **doesn't break**, you still have `i` eggs but now you have `j-k` floors remaining to check.

3. **Formula:**
   The formula used to calculate the number of attempts is:

   ```typescript
   attempts = 1 + Math.max(dp[i - 1][k - 1], dp[i][j - k]);
   ```

   - `dp[i - 1][k - 1]`: The number of attempts if the egg breaks (check the floors below).
   - `dp[i][j - k]`: The number of attempts if the egg doesn't break (check the floors above).
   - We add 1 to represent the current drop attempt.

4. **Choose the Minimum Attempts:**
   - For each floor `k`, you take the maximum number of attempts between the two scenarios (egg breaking or surviving). This gives you the worst-case scenario.
   - To minimize the number of attempts, you choose the **minimum** value over all possible dropping floors `k`.

---

## Solution Retrieval

Once the DP table is filled, the solution for the given number of eggs and floors will be stored in `dp[e][f]`, where `e` is the total number of eggs and `f` is the total number of floors. This value represents the **minimum number of attempts** required to find the critical floor in the worst-case scenario.

---

## Example Walkthrough

Let's break down an example with **2 eggs** and **100 floors**:

1. **Base Cases:**
   - With 1 egg and `f` floors, the number of attempts equals the number of floors: `dp[1][f] = f`.
   - With 1 floor or 0 floors, the number of attempts is 1 or 0, respectively.

2. **Filling the Table for 2 Eggs:**
   - We iterate through the floors and calculate the minimum attempts needed by considering each possible dropping floor `k`.
   - For example, if we drop an egg from floor `k` and it breaks, we solve the problem for `i-1` eggs and `k-1` floors. If it doesn't break, we solve it for `i` eggs and `j-k` floors.
   
   Using dynamic programming, the intermediate results are stored, reducing the complexity of recalculating the same subproblems.

---

## What Makes Dynamic Programming Efficient?

1. **Overlapping Subproblems:**
   Dynamic programming avoids recalculating the same subproblem multiple times by storing the results of previous calculations in a 2D table. This eliminates redundant work, making the solution more efficient.

2. **Optimal Substructure:**
   The problem exhibits optimal substructure, meaning that the solution to the problem can be constructed efficiently from the solutions of its subproblems.

3. **Time Complexity:**
   Using dynamic programming, we can reduce the time complexity of the problem to **O(e * f²)**, where `e` is the number of eggs and `f` is the number of floors. Although this is still quadratic in nature, it is far more efficient than a brute-force approach.

---

## Key Takeaways

- **Egg Drop Problem:** A classic problem where you must find the minimum number of attempts required to determine the critical floor in the worst-case scenario.
- **Dynamic Programming:** By breaking down the problem into subproblems and using a 2D DP table to store intermediate results, we optimize the solution.
- **DP Table:** A 2D matrix where each cell `dp[i][j]` holds the minimum number of attempts needed for `i` eggs and `j` floors.

---

## Next Steps

To complete this challenge, implement the **Egg Drop Problem** in TypeScript, using dynamic programming and a 2D table as explained in this guide. Start by initializing the base cases, filling the DP table, and then retrieving the solution from `dp[eggs][floors]`.

---

## Further Reading

- [Dynamic Programming Concepts](https://www.geeksforgeeks.org/dynamic-programming/)
- [Egg Dropping Puzzle](https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

This `README.md` should guide you through understanding the problem and the approach used to solve it, while also teaching you the fundamentals of dynamic programming and how it can be applied to the Egg Drop Problem in TypeScript.

