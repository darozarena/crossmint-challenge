import { Test, TestingModule } from '@nestjs/testing';
import { CrossmintService } from '@crossmint/crossmint.service';
import { IPolyanet, ISoloon, ICometh, TAstralObjectType } from '@types';
import { CreateAstralObjectService } from '../create-astral-object.service';

describe('CreateAstralObjectService', () => {
  const TEST_CANDIDATE_ID = 'testCandidateId';
  let service: CreateAstralObjectService;
  let crossmintServiceMock: jest.Mocked<CrossmintService>;

  beforeEach(async () => {
    crossmintServiceMock = {
      createPolyanet: jest.fn(),
      createSoloon: jest.fn(),
      createCometh: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateAstralObjectService,
        { provide: CrossmintService, useValue: crossmintServiceMock },
      ],
    }).compile();

    service = module.get<CreateAstralObjectService>(CreateAstralObjectService);
  });

  it('should create POLYANET', async () => {
    const polyanet: IPolyanet = { row: 0, column: 0, type: 'POLYANET' };
    await service.create(TEST_CANDIDATE_ID, polyanet);
    expect(crossmintServiceMock.createPolyanet).toHaveBeenCalledWith(
      TEST_CANDIDATE_ID,
      polyanet,
    );
  });

  it('should create SOLOON', async () => {
    const soloon: ISoloon = {
      row: 0,
      column: 0,
      type: 'SOLOON',
      color: 'BLUE',
    };
    await service.create(TEST_CANDIDATE_ID, soloon);
    expect(crossmintServiceMock.createSoloon).toHaveBeenCalledWith(
      TEST_CANDIDATE_ID,
      soloon,
    );
  });

  it('should create COMETH', async () => {
    const cometh: ICometh = {
      row: 0,
      column: 0,
      type: 'COMETH',
      direction: 'UP',
    };
    await service.create(TEST_CANDIDATE_ID, cometh);
    expect(crossmintServiceMock.createCometh).toHaveBeenCalledWith(
      TEST_CANDIDATE_ID,
      cometh,
    );
  });

  it('should not create SPACE', async () => {
    const space = { row: 0, column: 0, type: 'SPACE' as TAstralObjectType };
    await service.create(TEST_CANDIDATE_ID, space);
    expect(crossmintServiceMock.createPolyanet).not.toHaveBeenCalled();
    expect(crossmintServiceMock.createSoloon).not.toHaveBeenCalled();
    expect(crossmintServiceMock.createCometh).not.toHaveBeenCalled();
  });
});
