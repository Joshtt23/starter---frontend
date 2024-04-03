# Solito Frontend Template

This template is designed for building cross-platform applications using Solito, enabling shared code between Next.js (web) and React Native (mobile). It's set up with TypeScript, ESLint, and Prettier to ensure a high-quality development experience. This README provides an overview and setup instructions for the frontend portion of your full-stack project.

## Features

- **Cross-Platform Development**: Unified codebase for web and mobile apps using Next.js and React Native.
- **TypeScript**: Full TypeScript support for type-safe coding.
- **Code Quality**: Integrated ESLint and Prettier for linting and code formatting.
- **Development Environment**: Configured for npm as the package manager for consistency across environments.

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm (Version 7 or later)

### Installation

1. Clone the repository and navigate to the frontend directory:

git clone https://github.com/Joshtt23/starter---frontend.git
cd starter---frontend

2. Install dependencies:

npm install

3. Configure environment variables:

- Rename `.env.example` to `.env` and update the variables according to your needs.

### Running the Application

- **Web Application**:

Start the Next.js server for the web app:

npm run web

- **Mobile Application**:

Start the Expo server for mobile development:

npm run native

Follow the instructions in the terminal to open your app on an emulator, simulator, or physical device.

## Structure

- `/apps/next`: Contains the Next.js application code for the web platform.
- `/apps/expo`: Contains the React Native code for the mobile platform.
- `/packages`: Shared logic, components, and utilities between web and mobile platforms.

## Testing

To run tests, navigate to the specific app directory (`apps/next` or `apps/expo`) and execute:

npm run test

## Deployment

- **Web**: Follow the deployment instructions for Vercel or your preferred hosting service for Next.js applications.
- **Mobile**: Use Expo's build and deployment services to distribute your React Native app to iOS and Android devices.

## Contributing

Your contributions are welcome! Please refer to the project's contribution guidelines for more information on how to contribute effectively.

## License

This frontend template is licensed under the [MIT License](LICENSE). See the LICENSE file in the root directory for more details.