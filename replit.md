# Overview

This is an MVP (Minimum Viable Product) for "Ourverse" - a React-based web application that appears to be focused on user profiles, achievements, AI personality configuration, and goal tracking. The application is built as a single-page application with a modern TypeScript React stack and includes features for user identity management, badge systems, workflow automation, and analytics visualization.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS for utility-first styling with PostCSS for processing
- **Component Structure**: Single large component (`App.tsx`) containing the entire MVP functionality
- **State Management**: React's built-in `useState` and `useEffect` hooks for local state management
- **Icons**: Lucide React for consistent iconography throughout the interface
- **Data Visualization**: Recharts library for rendering charts and analytics (RadarChart, LineChart, BarChart)

## UI/UX Design Patterns
- **Tab-based Navigation**: Main interface organized into tabs (profile, achievements, workflows, etc.)
- **Modal System**: Overlay modals for complex interactions like goal creation and workflow management
- **Progressive Disclosure**: Badge categories and detailed views revealed on demand
- **Real-time Updates**: Loading states and progress indicators for dynamic content

## Data Architecture
- **Local State**: All data currently managed through React state (no persistent storage implemented)
- **Component Props**: Data passed between components through standard React props
- **Mock Data**: Hardcoded sample data for profiles, achievements, goals, and analytics

## Development Environment
- **Code Quality**: ESLint configuration with TypeScript rules and React-specific linting
- **Type Safety**: Strict TypeScript configuration with comprehensive type checking
- **Development Server**: Vite dev server configured for external access (host: 0.0.0.0, port: 5000)
- **Hot Reload**: React Fast Refresh for immediate development feedback

# External Dependencies

## Core Frontend Libraries
- **React & React DOM** (^18.3.1): Core UI framework and DOM rendering
- **TypeScript** (^5.5.3): Type system and compilation
- **Vite** (^5.4.2): Build tool and development server

## UI and Visualization
- **Tailwind CSS** (^3.4.1): Utility-first CSS framework for styling
- **Lucide React** (^0.344.0): SVG icon library with React components
- **Recharts** (^3.2.1): Chart library for data visualization components

## Backend Integration (Prepared)
- **Supabase Client** (^2.57.4): JavaScript client for Supabase backend services (authentication, database, real-time features)

## Development Tools
- **ESLint**: Code linting with React and TypeScript rules
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing
- **Vite React Plugin**: React-specific Vite optimizations

## Notes
- The application includes Supabase client dependency but doesn't appear to have active backend integration implemented yet
- No database schema or API endpoints are currently defined
- The codebase is structured as a foundation for future backend integration with user authentication, data persistence, and real-time features