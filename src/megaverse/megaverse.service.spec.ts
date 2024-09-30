import { Test, TestingModule } from '@nestjs/testing';
import { MegaverseService } from './megaverse.service';
import { CrossmintService } from '@crossmint/crossmint.service';
import { ParseMegaverseService, CreateAstralObjectService } from './services';
import { TMegaverse } from '../types';

describe('MegaverseService', () => {
  const TEST_CANDIDATE_ID = 'testCandidateId';
  let service: MegaverseService;
  let crossmintServiceMock: jest.Mocked<CrossmintService>;
  let parseMegaverseServiceMock: jest.Mocked<ParseMegaverseService>;
  let createAstralObjectServiceMock: jest.Mocked<CreateAstralObjectService>;

  beforeEach(async () => {
    crossmintServiceMock = {
      getGoalMap: jest.fn(),
    } as any;

    parseMegaverseServiceMock = {
      parseFromGoal: jest.fn(),
    } as any;

    createAstralObjectServiceMock = {
      create: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MegaverseService,
        { provide: CrossmintService, useValue: crossmintServiceMock },
        { provide: ParseMegaverseService, useValue: parseMegaverseServiceMock },
        {
          provide: CreateAstralObjectService,
          useValue: createAstralObjectServiceMock,
        },
      ],
    }).compile();

    service = module.get<MegaverseService>(MegaverseService);
  });

  describe('createMegaverseFromGoal', () => {
    it('should create megaverse from goal', async () => {
      const mockGoalDTO = { goal: [['POLYANET', 'SPACE']] };
      const mockParsedMegaverse: TMegaverse = [
        [
          { row: 0, column: 0, type: 'POLYANET' },
          { row: 0, column: 1, type: 'SPACE' },
        ],
      ];

      crossmintServiceMock.getGoalMap.mockResolvedValue(mockGoalDTO);
      parseMegaverseServiceMock.parseFromGoal.mockReturnValue(
        mockParsedMegaverse,
      );

      const result = await service.createMegaverseFromGoal(TEST_CANDIDATE_ID);

      expect(crossmintServiceMock.getGoalMap).toHaveBeenCalledWith(
        TEST_CANDIDATE_ID,
      );
      expect(parseMegaverseServiceMock.parseFromGoal).toHaveBeenCalledWith(
        mockGoalDTO,
      );
      expect(createAstralObjectServiceMock.create).toHaveBeenCalledTimes(2);
      expect(result).toEqual(mockParsedMegaverse);
    });
  });
});
