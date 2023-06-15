import { Test, TestingModule } from '@nestjs/testing';
import { WithdrawController } from './withdraw.controller';
import { WithdrawService } from './withdraw.service';

describe('WithdrawController', () => {
  let withdrawController: WithdrawController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WithdrawController],
      providers: [WithdrawService],
    }).compile();

    withdrawController = app.get<WithdrawController>(WithdrawController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(withdrawController.getHello()).toBe('Hello World!');
    });
  });
});
