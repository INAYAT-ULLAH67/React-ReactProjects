cat << 'EOF' > README.md
# React Practice Projects

A collection of functional React applications focusing on clean architecture, context-driven state, global state management, and modern UI patterns. 

## 📁 Repository Structure

This repository contains multiple isolated React projects, each built on top of Vite and styled using Tailwind CSS / Bootstrap.

*   **`07contextApi/`**  
    An implementation exploring the native React Context API to solve prop-drilling. Demonstrates sharing global state across components without external libraries.
*   **`cartViaRedux/`**  
    A complete shopping cart ecosystem utilizing Redux Toolkit (`@reduxjs/toolkit`) and `react-redux`. Contains optimized slices for handling cart actions, quantity mutations, and state subscription updates.
*   **`toasteViaContex/`**  
    A custom notification and toast-alert handling system powered by React Context. Centralizes triggers to broadcast layout alerts seamlessly across independent view tiers.

---

## 🛠️ Tech Stack & Utilities

*   **Frontend Library:** React 19 / 18
*   **Build Tool & Dev Server:** Vite
*   **State Management:** Redux Toolkit, React Context API
*   **Styling Engines:** Tailwind CSS, Bootstrap
*   **Package Management:** npm

---

## 🚀 Local Development Setup

To run any of the project directories locally, follow these steps:

1. **Clone the repository using SSH:**
   ```bash
   git clone git@github.com:INAYAT-ULLAH67/React-ReactProjects.git
   cd React-ReactProjects
