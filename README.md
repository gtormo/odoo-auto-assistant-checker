# Odoo Automatic Assistant checker

1) Install dependencies:
    - npm install

2) Update settings:
    - Go to cypress.json and put your credentials (url, username and password)

3) Run manually:
    - With browser view: 
        - npm run cy
    - Without browser view: 
        - npm run cy:headless

4) Run Automated like cron job:
    - 0 $HOUR * * * npm run --prefix $PROJECT_PATH cy:headless
