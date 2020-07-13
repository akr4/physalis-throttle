import { makeThrottle } from '../throttle';

test('push', (done) => {
  let data = 0;

  const t = makeThrottle(0);

  t.push(() => (data = 1));

  setTimeout(() => {
    expect(data).toEqual(1);
    done();
  }, 0);
});

test('push 2', (done) => {
  let data = 0;

  const t = makeThrottle(0);

  t.push(() => (data = 1));
  t.push(() => (data = 2));

  setTimeout(() => {
    expect(data).toEqual(2);
    done();
  }, 0);
});

test('flush', () => {
  let data = 0;

  const t = makeThrottle(0);

  t.push(() => (data = 1));
  t.flush();
  expect(data).toEqual(1);

  t.push(() => (data = 2));
  t.flush();
  expect(data).toEqual(2);
});
