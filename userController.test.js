const UserController = require('./userController');

let controller;
beforeEach(() => {
    controller = new UserController();
    controller.add({id: 1, email: 'test1@example.com', name: 'User1'});
    controller.add({id: 2, email: 'test2@example.com', name: 'User2'});
});

test('findByEmail should return user', () => {
    expect(controller.findByEmail('test1@example.com')[0].name).toBe('User1');
});

test('findByEmail should return empty array for unknown email', () => {
    expect(controller.findByEmail('notfound@example.com')).toEqual([]);
});

test('findById should return user object', () => {
    expect(controller.findById(2).name).toBe('User2');
});

test('findById should return undefined for unknown id', () => {
    expect(controller.findById(999)).toBeUndefined();
});

test('add should add a new user', () => {
    const newUser = {id: 3, email: 'test3@example.com', name: 'User3'};
    expect(controller.add(newUser)).toEqual(newUser);
    expect(controller.findById(3)).toEqual(newUser);
});

test('remove should remove a user by id', () => {
    controller.remove(1);
    expect(controller.findById(1)).toBeUndefined();
});
