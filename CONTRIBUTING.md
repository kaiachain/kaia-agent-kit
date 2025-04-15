# Contributing Guide

Thank you for your interest in contributing to this project! This guide will help you understand how to add new ecosystem partners to the `packages` folder.

## Getting Started

1. **Fork the Repository**: Start by forking this repository to your GitHub account.
2. **Clone the Repository**: Clone your forked repository to your local machine.
    ```bash
    git clone https://github.com/<your-username>/kaia-agent-kit.git
    cd kaia-agent-kit
    ```
3. **Create a Branch**: Create a new branch for your changes.
    ```bash
    git checkout -b add-ecosystem-partner/<partner-name>
    ```

## Adding a New Ecosystem Partner

1. **Create a New Folder**: Inside the `packages` folder, create a new folder named after the ecosystem partner.
    ```bash
    mkdir src/packages/<partner-name>
    ```

2. **Add Required Files**: Add the necessary files for the new partner. At a minimum, include:
    - `README.md`: Provide an overview of the partner integration.
    - Any additional files required for the integration.
    - Make sure metadata.ts has same function names as in each service. Follow kaiascan or web3 package for reference

3. **Follow Code Standards**: Ensure your code adheres to the project's coding standards and conventions.

4. **Write Tests**: Add tests to validate the functionality of the new partner integration. Place tests in the appropriate test directory.

5. **Update Documentation**: Update any relevant documentation to include details about the new partner.

## Submitting Your Changes

1. **Commit Your Changes**: Commit your changes with a descriptive commit message.
    ```bash
    git add .
    git commit -m "Add ecosystem partner: <partner-name>"
    ```

2. **Push Your Branch**: Push your branch to your forked repository.
    ```bash
    git push origin add-ecosystem-partner/<partner-name>
    ```

3. **Open a Pull Request**: Open a pull request to the main repository. Provide a clear description of your changes and link any relevant issues.

## Review Process

- Your pull request will be reviewed by the maintainers.
- Address any feedback or requested changes promptly.
- Once approved, your changes will be merged into the main branch.

Thank you for contributing to this project! Your efforts are greatly appreciated.