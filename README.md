# Description

Restful‌ ‌API‌ ‌and‌ ‌database‌ ‌for‌ ‌an‌ ‌employee‌ ‌management‌ ‌system.

# Setup

- Install `Git` locally
- Install `NodeJS` locally
- Clone the repo with `git clone` command
- run `npm install` to install all the dependencies locally

# Scripts to use

- run `npm run start:server` to start server

# API endpoints

- POST `/employee` Create an employee
- PUT `/employee/:id` Manager can Edit an employee
- PUT `/employee/:id/activate` Manager can activate an employee
- PUT `/employee/:id/suspend` Manager can suspend an employee
- DELETE `/employee/:id` Delete an employee
- POST `/employee/search` Users can view specific entry
