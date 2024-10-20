# String Calculator - TDD Kata

This project implements a **String Calculator** using **Test-Driven Development (TDD)** principles. The calculator processes a string of comma-separated numbers and returns their sum.

## Features

- Returns `0` for an empty string.
- Sums numbers separated by commas (e.g., `"1,2"` → `3`).
- Handles newlines as delimiters (e.g., `"1\n2,3"` → `6`).
- Supports custom delimiters (e.g., `"//;\n1;2"` → `3`).
- Throws an error for negative numbers, listing all negatives.

## Getting Started

### Prerequisites

- **Node.js** and **npm**.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gaurav-shharma/string-calculator-kata.git
