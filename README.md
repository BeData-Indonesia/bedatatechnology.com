# README

## Requirements
- PHP 8.1
- Node.js 21
- Composer
- Yarn

## Installation

### PHP 8.1 & Node.js 21


### Yarn
```sh
# Install Yarn globally
sudo npm install -g yarn
# Verify installation
yarn -v
```

## Setup Project
```sh
# Clone the repository
git clone <repository_url>
cd <project_directory>

# Install PHP dependencies
composer install

# Install JavaScript dependencies
yarn install

# Configure environment
copy paste .env.example -> .env
# Edit .env to set up your database configuration

# Run database migrations
php artisan migrate
```

## Run the Application
```sh
# Compile assets
yarn watch

# Start the Laravel development server
php artisan serve
```

Access the application at `http://localhost:8000`.
