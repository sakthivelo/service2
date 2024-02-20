const request = require('supertest');
const assert = require('assert');
const app = require('./index'); // assuming your Express app is in app.js

describe('API Tests', function() {
  it('should return valid response for POST /consume', function(done) {
    request(app)
      .get('/consume')
      .end(function(err, res) {
        assert.ifError(err);
        assert.equal(res.status, 200);
        done();
      });
  });
});