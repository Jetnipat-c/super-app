import { Test, TestingModule } from '@nestjs/testing';
import { DepositController } from './deposit.controller';
import { DepositService } from './deposit.service';

describe('DepositController', () => {
  let depositController: DepositController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DepositController],
      providers: [DepositService],
    }).compile();

    depositController = app.get<DepositController>(DepositController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(depositController.getHello()).toBe('Hello World!');
    });
  });
});
