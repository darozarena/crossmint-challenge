import { Test, TestingModule } from '@nestjs/testing';
import { CrossmintService } from './crossmint.service';
import {
  PolyanetService,
  SoloonService,
  ComethService,
  GoalService,
} from './services';
import { IPolyanet, ISoloon, ICometh } from '@types';

describe('CrossmintService', () => {
  const TEST_CANDIDATE_ID = 'testCandidateId';
  let service: CrossmintService;
  let polyanetServiceMock: jest.Mocked<PolyanetService>;
  let soloonServiceMock: jest.Mocked<SoloonService>;
  let comethServiceMock: jest.Mocked<ComethService>;
  let goalServiceMock: jest.Mocked<GoalService>;

  beforeEach(async () => {
    polyanetServiceMock = {
      createPolyanet: jest.fn(),
      deletePolyanet: jest.fn(),
    } as any;
    soloonServiceMock = {
      createSoloon: jest.fn(),
      deleteSoloon: jest.fn(),
    } as any;
    comethServiceMock = {
      createCometh: jest.fn(),
      deleteCometh: jest.fn(),
    } as any;
    goalServiceMock = {
      getGoalMap: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CrossmintService,
        { provide: PolyanetService, useValue: polyanetServiceMock },
        { provide: SoloonService, useValue: soloonServiceMock },
        { provide: ComethService, useValue: comethServiceMock },
        { provide: GoalService, useValue: goalServiceMock },
      ],
    }).compile();

    service = module.get<CrossmintService>(CrossmintService);
  });

  describe('createPolyanet', () => {
    it('should call polyanetService.createPolyanet', async () => {
      const polyanet: IPolyanet = { row: 0, column: 0, type: 'POLYANET' };
      await service.createPolyanet(TEST_CANDIDATE_ID, polyanet);
      expect(polyanetServiceMock.createPolyanet).toHaveBeenCalledWith(
        TEST_CANDIDATE_ID,
        polyanet,
      );
    });
  });

  describe('createSoloon', () => {
    it('should call soloonService.createSoloon', async () => {
      const soloon: ISoloon = {
        row: 0,
        column: 0,
        type: 'SOLOON',
        color: 'BLUE',
      };
      await service.createSoloon(TEST_CANDIDATE_ID, soloon);
      expect(soloonServiceMock.createSoloon).toHaveBeenCalledWith(
        TEST_CANDIDATE_ID,
        soloon,
      );
    });
  });

  describe('createCometh', () => {
    it('should call comethService.createCometh', async () => {
      const cometh: ICometh = {
        row: 0,
        column: 0,
        type: 'COMETH',
        direction: 'UP',
      };
      await service.createCometh(TEST_CANDIDATE_ID, cometh);
      expect(comethServiceMock.createCometh).toHaveBeenCalledWith(
        TEST_CANDIDATE_ID,
        cometh,
      );
    });
  });

  describe('deletePolyanet', () => {
    it('should call polyanetService.deletePolyanet', async () => {
      const polyanet: IPolyanet = { row: 0, column: 0, type: 'POLYANET' };
      await service.deletePolyanet(TEST_CANDIDATE_ID, polyanet);
      expect(polyanetServiceMock.deletePolyanet).toHaveBeenCalledWith(
        TEST_CANDIDATE_ID,
        polyanet,
      );
    });
  });

  describe('deleteSoloon', () => {
    it('should call soloonService.deleteSoloon', async () => {
      const soloon: ISoloon = {
        row: 0,
        column: 0,
        type: 'SOLOON',
        color: 'BLUE',
      };
      await service.deleteSoloon(TEST_CANDIDATE_ID, soloon);
      expect(soloonServiceMock.deleteSoloon).toHaveBeenCalledWith(
        TEST_CANDIDATE_ID,
        soloon,
      );
    });
  });

  describe('deleteCometh', () => {
    it('should call comethService.deleteCometh', async () => {
      const cometh: ICometh = {
        row: 0,
        column: 0,
        type: 'COMETH',
        direction: 'UP',
      };
      await service.deleteCometh(TEST_CANDIDATE_ID, cometh);
      expect(comethServiceMock.deleteCometh).toHaveBeenCalledWith(
        TEST_CANDIDATE_ID,
        cometh,
      );
    });
  });

  describe('getGoalMap', () => {
    it('should call goalServiceMock.getGoalMap', async () => {
      const mockGoalDTO = { goal: [['POLYANET']] };
      goalServiceMock.getGoalMap.mockResolvedValue(mockGoalDTO);
      const result = await service.getGoalMap(TEST_CANDIDATE_ID);
      expect(goalServiceMock.getGoalMap).toHaveBeenCalledWith(
        TEST_CANDIDATE_ID,
      );
      expect(result).toEqual(mockGoalDTO);
    });
  });
});
