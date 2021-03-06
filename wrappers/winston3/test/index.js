const stdMocks = require('std-mocks');
const WinstonWrapper = require('../');
const logtown = require('logtown');
const test = require('tape');
const winston = require('winston');

logtown.addWrapper(new WinstonWrapper([
  new winston.transports.Console({
    handleExceptions: true,
    format: winston.format.json()
  })
]));
const logger = logtown('winston-test');

function flush(ind = 0) {
  stdMocks.restore();
  const output = stdMocks.flush();
  if (ind < 0) {
    return output.stdout.map((rec) => JSON.parse(rec));
  }
  return JSON.parse(output.stdout[ind]);
}

test('basic info test', (t) => {
  t.plan(2);

  stdMocks.use();
  logger.info('hi');
  const record = flush();
  t.equal(record.level, 'info');
  t.equal(record.message, '[winston-test] hi');
});

