var _ = require('src/util')
var def = require('src/directives/public/test')

describe('v-test', function () {
  it('element', function () {
    var dir = {
      el: document.createElement('div')
    }
    _.extend(dir, def)
    dir.bind()
    dir.update('foo')
    expect(dir.el.textContent).toBe('foo')
    dir.update(123)
    expect(dir.el.textContent).toBe('123')
  })

  it('test node', function () {
    var dir = {
      el: document.createTextNode(' ')
    }
    _.extend(dir, def)
    dir.bind()
    dir.update('foo')
    expect(dir.el.nodeValue).toBe('foo')
    dir.update(123)
    expect(dir.el.nodeValue).toBe('123')
  })
})
