# Employee Management Application

A modern web application for employee management built with Lit Elements. Features a responsive design, state management, and multilingual support.

## Features

- 📋 Employee Management
  - View employees in a responsive table
  - Create new employees
  - Update employee information
  - Delete employees with confirmation
- 🌐 Multilingual Support (English/Turkish)
- 🎨 Theme Customization
- 📱 Responsive Design

## Tech Stack

- [Lit](https://lit.dev/) v3.2.0 - Web Components
- [Vaadin](https://vaadin.com/)
  - Router v2.0.0
  - Dialog v24.6.1
  - Notification v24.6.1
- [Zustand](https://github.com/pmndrs/zustand) v5.0.3 - State Management

## Project Structure

## Key Directories

- **components/**: Reusable web components built with Lit
- **pages/**: Page-level components for routing
- **stores/**: State management using Zustand
- **utils/**: Utility functions and helpers
- **i18n/**: Internationalization resources
- **styles/**: Shared styles and themes

## Main Components

- `employee-table-view.js`: Displays employee data in a sortable table
- `employee-form.js`: Handles employee data input and validation
- `employee-delete-confirm.js`: Confirmation dialog for delete operations
- `employee-list-view.js`: Manages the employee list layout and actions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install dependencies