const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') require('dotenv').config()