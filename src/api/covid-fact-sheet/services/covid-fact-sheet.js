'use strict';

/**
 * covid-fact-sheet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::covid-fact-sheet.covid-fact-sheet');
