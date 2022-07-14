const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection.js');
const path = require('path');

const helpers = require('./utils/helpers');

// Import express-session
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3005;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Set up sessions
const sess = {
  secret: 'techblog',
  cookie: {
        // Session will automatically expire in 5 minutes
        expires: 100 * 30 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// Connection link to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`\nNow listening and running on ${PORT}!\n`));
});