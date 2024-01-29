import Team from '../src/script';

describe('testing class Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  it('must add user', () => {
    team.add('Bob');
    expect([...team.members]).toEqual(['Bob']);
  });

  it('should throw an error if there is a user', () => {
    team.add('Bob');
    expect(() => team.add('Bob')).toThrow(Error);
  });

  it('must add all users', () => {
    team.addAll('Bob', 'Bob', 'Cat', 'Dog');
    expect([...team.members]).toEqual(['Bob', 'Cat', 'Dog']);
  });

  it('should convert to array', () => {
    team.addAll('Bob', 'Bob', 'Cat', 'Dog');
    const array = team.toArray();
    expect(array).toEqual(['Bob', 'Cat', 'Dog']);
  });
});
