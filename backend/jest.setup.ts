import { ExpressServer } from './src/config/express';

process.env.API_PORT = '3333';
const server = new ExpressServer();
server.setup(Number(process.env.API_PORT));

beforeAll(() => {
  jest.mock('typeorm', () => ({
    BaseEntity: class Mock {},
    EntityManager: class Mock {},
    DataSource: class Mock {},
    ObjectType: jest.fn(),
    InputType: jest.fn(),
    OneToMany: jest.fn(),
    PrimaryGeneratedColumn: jest.fn(),
    PrimaryColumn: jest.fn(),
    CreateDateColumn: jest.fn(),
    UpdateDateColumn: jest.fn(),
    Column: jest.fn(),
    Entity: jest.fn(),
    ManyToOne: jest.fn(),
    JoinColumn: jest.fn(),
    OneToOne: jest.fn(),
    Index: jest.fn(),
    createConnections: () => [{ name: 'default' }],
    getRepository: jest.fn(() => ({
      find: jest.fn(),
      insert: jest.fn(),
    })),
  }));
});

afterAll(() => server.kill());
export default {
  serverInstance: server.app,
};
