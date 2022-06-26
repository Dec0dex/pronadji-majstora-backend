import { Test } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { PermissionModule } from './permission.module';

describe('PermissionModule', () => {
  let module: PermissionModule;
  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [PermissionModule, AppModule],
      providers: [],
    }).compile();
  });

  it('should declare module', () => {
    expect(module).toBeDefined();
  });

  afterEach(() => {
    module = undefined;
  });
});
